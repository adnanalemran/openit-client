import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext, useState } from "react";
import { FaEnvelope, FaLock, FaSignInAlt, FaUserPlus, FaSpinner, FaArrowRight } from "react-icons/fa";
import Info from "./Info";

const Signin = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "সফল",
      text: "সফলভাবে লগইন হয়েছে",
    });
  };

  const showErrorAlert = (error) => {
    Swal.fire({
      icon: "error",
      title: "লগইন ব্যর্থ",
      text: error,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    signIn(email, password)
      .then(() => {
        setLoading(false);
        showSuccessAlert();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLoading(false);
        if (error.code === "auth/invalid-login-credentials") {
          showErrorAlert("ইমেইল বা পাসওয়ার্ড ভুল।");
        } else {
          showErrorAlert(error.message);
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <Info />
          </Link>
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              লগইন করুন
            </h1>
            <p className="text-gray-600">
              আপনার অ্যাকাউন্টে প্রবেশ করুন
            </p>
          </div>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FaSignInAlt className="text-white" />
              অ্যাকাউন্টে প্রবেশ
            </h2>
            <p className="text-orange-100 text-sm mt-1">
              আপনার ইমেইল এবং পাসওয়ার্ড দিয়ে লগইন করুন
            </p>
          </div>

          <div className="p-8">
            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">ইমেইল</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="আপনার ইমেইল লিখুন"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">পাসওয়ার্ড</label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="আপনার পাসওয়ার্ড লিখুন"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    লগইন হচ্ছে...
                  </>
                ) : (
                  <>
                    <span>লগইন করুন</span>
                    <FaArrowRight className="ml-2" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">অথবা</span>
                </div>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                নতুন শিক্ষার্থী?
              </p>
              <Link
                to="/signUp"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-orange-600 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all duration-300 transform hover:scale-105"
              >
                <FaUserPlus className="text-orange-500" />
                নতুন শিক্ষার্থী হিসেবে আবেদন করুন
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-sm font-semibold text-blue-800 mb-2">
                💡 সহায়তা প্রয়োজন?
              </h3>
              <p className="text-sm text-blue-700">
                যদি আপনার অ্যাকাউন্টে প্রবেশ করতে সমস্যা হয়, তাহলে আমাদের সাথে যোগাযোগ করুন।
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            © ২০২৪ ওপেন আইটি। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
