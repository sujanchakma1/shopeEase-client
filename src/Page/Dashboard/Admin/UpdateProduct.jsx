import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import Swal from "sweetalert2";
import Loading from "@/Page/Loading/Loading";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();

  const { register, handleSubmit, reset } = useForm();

  // Fetch single product
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/product/${id}`);
      return res.data;
    },
    onSuccess: (data) => {
      reset(data); // auto fill form
    },
  });

  const onSubmit = async (data) => {
    const res = await axiosSecure.patch(`/products/${id}`, data);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Product updated successfully",
      });
      navigate(-1);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-2xl font-bold mb-6">Update Product</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 bg-base-200 p-6 rounded-xl shadow"
      >
        {/* Product Name */}
        <div>
          <label className="label font-medium">Product Name</label>
          <input
            {...register("name", { required: true })}
            className="input input-bordered w-full rounded-lg"
            defaultValue={`${product.name}`}
          />
        </div>

        {/* Image */}
        <div>
          <label className="label font-medium">Image URL</label>
          <input
            {...register("image", { required: true })}
            className="input input-bordered w-full rounded-lg"
            defaultValue={`${product.image}`}
          />
        </div>

        {/* Category */}
        <div>
          <label className="label font-medium">Category</label>
          <select
            {...register("category")}
            className="select select-bordered w-full rounded-lg"
            defaultValue={`${product.category}`}
          >
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="Fashion">Fashion</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>

        {/* Brand */}
        <div>
          <label className="label font-medium">Brand</label>
          <input
            {...register("brand")}
            className="input input-bordered w-full rounded-lg"
            defaultValue={`${product.brand}`}
          />
        </div>

        {/* Price */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label font-medium">Price</label>
            <input
              type="number"
              {...register("price")}
              className="input input-bordered w-full rounded-lg"
              defaultValue={`${product.price}`}
            />
          </div>

          <div>
            <label className="label font-medium">Discount Price</label>
            <input
              type="number"
              {...register("discountPrice")}
              className="input input-bordered w-full rounded-lg"
              defaultValue={`${product.discountPrice}`}
            />
          </div>
        </div>

        {/* Stock */}
        <div>
          <label className="label font-medium">Stock</label>
          <input
            type="number"
            {...register("stock")}
            className="input input-bordered w-full rounded-lg"
            defaultValue={`${product.stock}`}
          />
        </div>

        {/* Description */}
        <div>
          <label className="label font-medium">Description</label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full rounded-lg"
            rows={4}
            defaultValue={`${product.description}`}
          />
        </div>

        {/* Submit */}
        <button className="btn btn-primary w-full mt-4">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
