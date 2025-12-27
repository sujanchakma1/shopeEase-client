import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const axiosSecure = UseAxiosSecure();
  const IMGBB_KEY = import.meta.env.VITE_IMGBB_API_KEY;

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    discountPrice: "",
    category: "",
    brand: "",
    stock: "",
    currency: "BDT",
    orderCount: 0
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🔥 ImgBB upload
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.data.display_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      return Swal.fire("Error", "Please select an image", "error");
    }

    try {
      setLoading(true);

      // 1️⃣ Upload image
      const imageURL = await uploadImage(imageFile);

      // 2️⃣ Prepare payload
      const payload = {
        ...form,
        image: imageURL,
        price: Number(form.price),
        discountPrice: Number(form.discountPrice),
        stock: Number(form.stock),
      };

      // 3️⃣ Send to backend
      await axiosSecure.post("/products", payload);

      Swal.fire("Success", "Product added successfully", "success");
      e.target.reset();
      setImageFile(null);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to add product", "error");
    } finally {
      setLoading(false);
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
          <label className="label font-medium">Product Name</label>
          <input
            name="name"
            onChange={handleChange}
            placeholder="Product name..."
            className="input input-bordered w-full rounded-lg"
            required
          />
        </div>

        {/* Brand */}
        <div>
          <label className="label font-medium">Brand</label>
          <input
            name="brand"
            onChange={handleChange}
            placeholder="Brand name..."
            className="input input-bordered w-full rounded-lg"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="label font-medium">Original Price (BDT)</label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            placeholder="Price..."
            className="input input-bordered w-full rounded-lg"
            required
          />
        </div>

        {/* Discount */}
        <div>
          <label className="label font-medium">Discount Price</label>
          <input
            type="number"
            name="discountPrice"
            onChange={handleChange}
            placeholder="Discount price..."
            className="input input-bordered w-full rounded-lg"
          />
        </div>

        {/* Category */}
        <div>
          <label className="label font-medium">Category</label>
          <select
            name="category"
            onChange={handleChange}
            defaultValue=""
            className="select select-bordered w-full rounded-lg"
            required
          >
            <option value="" disabled>Select category</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Fashion">Fashion</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>

        {/* Stock */}
        <div>
          <label className="label font-medium">Stock Quantity</label>
          <input
            type="number"
            name="stock"
            onChange={handleChange}
            placeholder="Quantity..."
            className="input input-bordered w-full rounded-lg"
            required
          />
        </div>

        {/* 🔥 Image Upload */}
        <div className="md:col-span-2">
          <label className="label font-medium">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="file-input file-input-bordered w-full rounded-lg"
            required
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="label font-medium">Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Product description..."
            className="textarea textarea-bordered w-full rounded-lg"
            rows={4}
          />
        </div>


        {/* Submit */}
        <div className="md:col-span-2">
          <button
            disabled={loading}
            className="btn btn-primary w-full rounded-lg"
          >
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
