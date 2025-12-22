import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { toast } from "react-toastify";
import UseAuth from "@/Hook/UseAuth";
import Loading from "../Loading/Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();

  // Fetch ALL products (your backend structure)
  const { data: products, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosSecure.get("/product");
      return res.data; // array
    },
  });

  if (isLoading) return <Loading />;

  // find this product
  const product = products.find((p) => p._id === id);

  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found</div>;
  }

  // Recommended (same category, excluding itself)
  const recommended = products
    .filter((p) => p.category === product.category && p._id !== id)
    .slice(0, 4);

  // * Added to Cart

  const handleAddToCart = async (product) => {
    const {
      _id,
      name,
      description,
      brand,
      category,
      image,
      price,
      discountPrice,
      stock,
    } = product;

    const productData = {
      productId: _id,
      productName: name,
      description,
      brand,
      category,
      image,
      price,
      discountPrice,
      stock,
      userName: user.displayName,
      userEmail: user.email,
    };

    try {
      const res = await axiosSecure.post("/cart", productData);
      console.log("Cart Response:", res.data);
      if (res.data.insertedId) {
        toast.success(`${product.name} Added to Cart!`);
      } else {
        toast.error(`${product.name} Failed to add!`);
      }
    } catch {
      toast.error(`${product.name} Failed to add`);
    }
  };

  return (
    <div className="container max-w-7xl mx-auto p-6">
      {/* PRODUCT TOP SECTION */}
      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-10 bg-base-200 p-6 rounded-xl shadow">
        {/* LEFT: IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="space-y-5">
          <p className="font-semibold text-xl text-gray-500">
            [{product.category}]
          </p>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div>
            {product.discountPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-sm">
                  ${product.price}
                </span>
                <span className="text-primary  font-bold text-lg">
                  ${product.discountPrice}
                </span>
              </div>
            ) : (
              <span className="text-secondary  font-bold text-lg">
                ${product.price}
              </span>
            )}
            <p className="text-md font-medium mb-2">
              Available Stock: {product.stock}
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4">
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-secondary btn-outline rounded-md"
            >
              Add to Cart
            </button>
            <Link to={`/products/buy/${product._id}`}>
              <button className="btn btn-primary rounded-md ">Order Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* RECOMMENDED SECTION */}
      <h2 className="text-2xl font-bold mt-12 mb-6">Recommended for You</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {recommended.map((item) => (
          <Link key={item._id} to={`/products/details/${item._id}`}>
            <div className="bg-base-200 p-4 rounded-lg shadow hover:shadow-md transition">
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="font-semibold mt-3">{item.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-sm">
                  ${product.price}
                </span>
                <span className="text-primary  font-bold text-lg">
                  ${product.discountPrice}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
