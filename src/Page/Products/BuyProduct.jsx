import UseAuth from "@/Hook/UseAuth";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import Loading from "@/Shared/Loading";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const BuyProduct = () => {
  const { id } = useParams();
  const axiosSecure = UseAxiosSecure();
  const {user} = UseAuth()
  const navigate  = useNavigate()

  const { data: product, isLoading } = useQuery({
    queryKey: ["buy", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/product/${id}`);
      return res.data;
    },
  });

  // Quantity state
  const [quantity, setQuantity] = useState(1);

  if (isLoading) return <Loading />;

  const { name, image, price, discountPrice } = product || {};
  const finalPrice = discountPrice ? discountPrice : price;

  const totalPrice = finalPrice * quantity;

  // Update quantity
  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handlePlaceOrder = async(e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const orderData = {
      customer_name: form.get("fullName"),
      customer_email: user?.email,
      customer_phone: form.get("phone"),
      customer_address: form.get("address"),
      productId: id,
      quantity,
      totalPrice,
      confirmation_status: "pending",
      payment_status: "pending",
      date: new Date().toISOString()
    };

    const res = await axiosSecure.post("/order", orderData)
    console.log("ordered",res.data);
    if(res.data.insertedId){
      e.target.reset()
      setQuantity(1)
      toast.success("Product Order Successfully")
      navigate(`/dashboard/payments/${id}`)
    }

    console.log("Order Placed:", orderData);
  };

  return (
    <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* LEFT SIDE — SHIPPING FORM */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow min-h-full">
        <h2 className="text-2xl text-primary font-semibold mb-5">Shipping Information</h2>

        <form onSubmit={handlePlaceOrder} className="space-y-4">
          <legend className="fieldset-legend">Name</legend>
          <input
            name="fullName"
            className="input input-bordered w-full"
            placeholder="Enter Full Name"
            required
          />
          <legend className="fieldset-legend">Email</legend>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter Email"
            value={user?.email}
            readOnly
          />
          <legend className="fieldset-legend">Phone</legend>
          <input
            name="phone"
            className="input input-bordered w-full"
            placeholder="Enter Phone Number"
            required
          />
          <legend className="fieldset-legend">Address</legend>
          <textarea
            name="address"
            className="textarea textarea-bordered w-full"
            placeholder="Full Address"
            required
          />

          <button className="btn btn-primary w-full mt-4">Place Order</button>
        </form>
      </div>

      {/* RIGHT SIDE — ORDER SUMMARY */}
      <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between min-h-full">
        <div>
          <h3 className="text-2xl text-primary font-semibold mb-4">Order Summary</h3>

          <div className="flex items-center gap-4">
            <img
              src={image}
              alt={name}
              className="w-24 h-24 object-cover rounded-lg"
            />

            <div>
              <h4 className="text-xl font-semibold">{name}</h4>

              {/* Quantity Selector */}
              <div className="flex items-center gap-2 mt-2">
                <h2 className="font-semibold">Quantity: </h2>
                <button onClick={decreaseQty} className="btn btn-sm">
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="input input-sm input-bordered w-16 text-center"
                />
                <button onClick={increaseQty} className="btn btn-sm">
                  +
                </button>
              </div>

              {/* Price */}
              {discountPrice ? (
                <p className="mt-2">
                  <span className="line-through text-gray-400">${price}</span>{" "}
                  <span className="text-lg font-bold text-primary">
                    ${discountPrice}
                  </span>
                </p>
              ) : (
                <p className="text-lg font-bold mt-2">${price}</p>
              )}
            </div>
          </div>
        </div>

        {/* Total */}
        <div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Total Price</span>
            <span className="text-xl font-bold text-primary">
              ${totalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
