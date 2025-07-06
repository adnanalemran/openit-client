import axios from "axios";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { AuthContext } from "../../../providers/AuthProvider";
import Info from "./Info";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaFacebook, FaUpload, FaSpinner } from "react-icons/fa";

const apiKey = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("");

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Success...",
      text: "Sign up success",
    });
  };

  const showErrorAlert = (error) => {
    let errorMessage = error;

    if (error && error.message) {
      errorMessage = error.message;
    }

    Swal.fire({
      icon: "error",
      title: "Error",
      text: errorMessage,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = e.target;
      const formData = new FormData(form);

      const displayName = form.displayName.value;
      const photoURL = form.photoURL.files[0];

      const imageFile = { image: photoURL };
      const res = await axios.post(imageHostingApi, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const result = await createUser(email, password);
      const currentUser = result.user;

      result.user.displayName = displayName;
      result.user.photoURL = res.data?.data?.display_url;

      await updateProfile(currentUser, {
        displayName: displayName,
        photoURL: res.data?.data?.display_url,
      });

      const data = {
        userData: Object.fromEntries(formData.entries()),
        displayName: displayName,
        email: email,
        photoURL: res.data?.data?.display_url,
        phoneNo: `+880${phoneNo}`,
        userType: "applied_student",
        course: course,
        gender: gender,
        totalDueAmmout: 0,
        totalPurchesAmmount: 0,
        markCollection: [],
      };

      axiosPublic.post("/user", data).then(() => {
        setLoading(false);
        showSuccessAlert();
        setPassword("");
        navigate("/");
      });
    } catch (error) {
      showErrorAlert(error.message);
      setLoading(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <Info />
          <div className="mt-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              শিক্ষার্থী আবেদন ফর্ম
            </h1>
            <p className="text-gray-600">
              আপনার ভবিষ্যতের জন্য প্রথম পদক্ষেপ নিন
            </p>
          </div>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSignUp} className="space-y-8">
          {/* Personal Information Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FaUser className="text-white" />
                ব্যক্তিগত তথ্য
              </h2>
              <p className="text-orange-100 text-sm mt-1">
                আপনার ব্যক্তিগত তথ্য প্রদান করুন
              </p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">নাম</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="displayName"
                      required
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Photo Upload */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">ছবি আপলোড করুন</label>
                  <div className="relative">
                    <FaUpload className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="file"
                      name="photoURL"
                      accept="image/*"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                    />
                  </div>
                </div>

                {/* Course Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">কোর্স নির্বাচন করুন</label>
                  <div className="relative">
                    <FaGraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 appearance-none bg-white"
                      defaultValue=""
                      required
                      onChange={handleCourseChange}
                    >
                      <option value="" disabled>কোর্স নির্বাচন করুন</option>
                      <option value="office-application-course">অফিস অ্যাপ্লিকেশন কোর্স</option>
                      <option value="graphic-design-course">গ্রাফিক ডিজাইন কোর্স</option>
                      <option value="web-course-cms">ওয়েব কোর্স (সিএমএস)</option>
                      <option value="web-course-laravel">ওয়েব কোর্স (লারাভেল)</option>
                      <option value="web-course-marn">ওয়েব কোর্স (মার্ন)</option>
                    </select>
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">লিঙ্গ</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 appearance-none bg-white"
                      defaultValue=""
                      required
                      onChange={handleGenderChange}
                    >
                      <option value="" disabled>লিঙ্গ নির্বাচন করুন</option>
                      <option value="male">পুরুষ</option>
                      <option value="female">মহিলা</option>
                      <option value="other">অন্যান্য</option>
                    </select>
                  </div>
                </div>

                {/* Father's Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">পিতার নাম</label>
                  <input
                    type="text"
                    name="fatherName"
                    required
                    placeholder="পিতার নাম লিখুন"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Mother's Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">মাতার নাম</label>
                  <input
                    type="text"
                    name="motherName"
                    required
                    placeholder="মাতার নাম লিখুন"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Date of Birth */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">জন্ম তারিখ</label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      name="dateOfBirth"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">ফোন নম্বর</label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <span className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500">+880</span>
                    <input
                      type="text"
                      name="PhoneNo"
                      value={phoneNo}
                      onChange={handlePhoneNoChange}
                      pattern="[0-9]{10}"
                      placeholder="1917019619"
                      required
                      className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Education Qualification */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">শিক্ষাগত যোগ্যতা</label>
                  <input
                    type="text"
                    name="educationQualification"
                    required
                    placeholder="যেমন: বিএসসি ইন সিএসই"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* School/University */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">স্কুল/বিশ্ববিদ্যালয়</label>
                  <input
                    type="text"
                    name="schoolUniversity"
                    required
                    placeholder="যেমন: গ্রিন ইউনিভার্সিটি অফ বাংলাদেশ"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Facebook URL */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">ফেসবুক প্রোফাইল</label>
                  <div className="relative">
                    <FaFacebook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="url"
                      name="facebookUrl"
                      required
                      placeholder="https://facebook.com/your_username"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Present Address */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">বর্তমান ঠিকানা</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="presentAddress"
                      required
                      placeholder="আপনার বর্তমান ঠিকানা লিখুন"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Permanent Address */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">স্থায়ী ঠিকানা</label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="permanentAddress"
                      required
                      placeholder="আপনার স্থায়ী ঠিকানা লিখুন"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SSC Education Information Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FaGraduationCap className="text-white" />
                এসএসসি শিক্ষা তথ্য
              </h2>
              <p className="text-blue-100 text-sm mt-1">
                আপনার এসএসসি পরীক্ষার তথ্য প্রদান করুন
              </p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">এসএসসি রোল নম্বর</label>
                  <input
                    type="number"
                    name="sscRollNo"
                    required
                    placeholder="যেমন: 654321"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">এসএসসি রেজিস্ট্রেশন নম্বর</label>
                  <input
                    type="number"
                    name="sscRegNo"
                    required
                    placeholder="000000000000000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">এসএসসি বোর্ড</label>
                  <input
                    type="text"
                    name="SSCBoardName"
                    required
                    placeholder="যেমন: ঢাকা"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">পাসের বছর</label>
                  <input
                    type="number"
                    name="passingYear"
                    required
                    placeholder="যেমন: 2015"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Account Information Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FaLock className="text-white" />
                অ্যাকাউন্ট তথ্য
              </h2>
              <p className="text-green-100 text-sm mt-1">
                আপনার লগইন তথ্য সংরক্ষণ করুন
              </p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">ইমেইল</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      placeholder="আপনার ইমেইল লিখুন"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">পাসওয়ার্ড</label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                      placeholder="পাসওয়ার্ড লিখুন"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  প্রক্রিয়াকরণ হচ্ছে...
                </>
              ) : (
                "আবেদন জমা দিন"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
