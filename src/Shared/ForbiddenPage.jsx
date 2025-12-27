import { Link } from "react-router";
import { FaBan, FaHome } from "react-icons/fa";

const Forbidden = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-base-100 shadow-xl rounded-xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <FaBan className="text-error text-6xl" />
        </div>

        <h1 className="text-3xl font-bold text-error mb-2">
          Access Denied
        </h1>

        <p className="text-gray-600 mb-6">
          You don’t have permission to access this page.
          <br />
          Please contact the administrator if you think this is a mistake.
        </p>

        <Link to="/" className="btn btn-primary gap-2">
          <FaHome />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
