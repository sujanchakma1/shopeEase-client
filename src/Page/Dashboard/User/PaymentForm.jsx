import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import Loading from "@/Shared/Loading";

const PaymentForm = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const { orderId } = useParams();

  const [error, setError] = useState("");

  // Load Order Info
  const { data: orderInfo, isPending } = useQuery({
    queryKey: ["order", orderId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order/${orderId}`);
      return res.data;
    },
  });

  if (isPending) return <Loading />;

  const amount = orderInfo?.totalPrice; // ✔ correct field
  const amountInCents = amount * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    // Create PaymentMethod
    const { error: cardError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card,
      });

    if (cardError) {
      setError(cardError.message);
      return;
    } else {
      setError("");
      console.log("payment method", paymentMethod);
    }

    // Create Payment Intent — send amount + orderId
    const intentRes = await axiosSecure.post("/create-payment-intent", {
      amountInCents,
      orderId,
    });

    const clientSecret = intentRes.data.clientSecret;

    // Confirm card payment
    const confirm = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: orderInfo.customer_name,
          email: orderInfo.customer_email,
        },
      },
    });

    if (confirm.error) {
      setError(confirm.error.message);
      return;
    }

    if (confirm.paymentIntent.status === "succeeded") {
      // Save record in DB
      const paymentData = {
        orderId,
        customer_email: orderInfo.customer_email,
        amount,
        transactionId: confirm.paymentIntent.id,
        method: confirm.paymentIntent.payment_method_types[0],
      };

      const saveRes = await axiosSecure.post("/payments", paymentData);

      if (saveRes.data.insertedId) {
        toast.success("Payment successful!");
        navigate("/dashboard/orders");
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-base-300 space-y-4 p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
      >
        <CardElement className="p-2 border rounded" />

        <button
          type="submit"
          className="btn rounded-full btn-primary w-full text-black"
          disabled={!stripe}
        >
          Pay ৳{amount}
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
