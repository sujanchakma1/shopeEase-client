import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const axiosSecure = UseAxiosSecure();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    discountPrice: "",
    category: "",
    brand: "",
    image: "",
    stock: "",
    isFeatured: false,
    currency: "BDT",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      price: Number(form.price),
      discountPrice: Number(form.discountPrice),
      stock: Number(form.stock),
    };

    try {
      await axiosSecure.post("/products", payload);
      Swal.fire("Success", "Product added successfully", "success");
      e.target.reset();
    } catch (err) {
      Swal.fire("Error", "Failed to add product", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-base-200 shadow rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* Product Name */}
        <div>
          <label className="label font-medium text-black">Product Name</label>
          <input
            name="name"
            onChange={handleChange}
            placeholder="product name..."
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Brand */}
        <div>
          <label className="label font-medium text-black">Brand</label>
          <input
            name="brand"
            onChange={handleChange}
            placeholder="brand name..."
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="label font-medium text-black">
            Original Price (BDT)
          </label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            placeholder="price..."
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Discount Price */}
        <div>
          <label className="label font-medium text-black">Discount Price</label>
          <input
            type="number"
            name="discountPrice"
            onChange={handleChange}
            placeholder="discount price..."
            className="input input-bordered w-full"
          />
        </div>

        {/* Category */}
        <div>
          <label className="label font-medium text-black">Category</label>
          <select
            name="category"
            onChange={handleChange}
            defaultValue=""
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Fashion">Fashion</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>

        {/* Stock */}
        <div>
          <label className="label font-medium text-black">Stock Quantity</label>
          <input
            type="number"
            name="stock"
            onChange={handleChange}
            placeholder="quantity..."
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image */}
        <div className="md:col-span-2">
          <label className="label font-medium text-black">
            Product Image URL
          </label>
          <input
            name="image"
            onChange={handleChange}
            placeholder="product image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2 ">
          <label className="label font-medium text-black">Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="description..."
            className="textarea textarea-bordered w-full"
            rows={4}
          ></textarea>
        </div>

        {/* Featured */}
        <div className="flex items-center gap-2 md:col-span-2">
          <input
            type="checkbox"
            name="isFeatured"
            onChange={handleChange}
            className="checkbox checkbox-primary"
          />
          <span className="font-medium">Mark as Featured Product</span>
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button className="btn btn-primary w-full">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
