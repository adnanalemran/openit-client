import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaIdCard,
  FaGraduationCap,
  FaCalendarAlt,
  FaSchool,
  FaFacebook,
  FaMapMarkerAlt,
  FaHome,
  FaEdit,
  FaArrowLeft,
  FaSave,
  FaSpinner,
  FaUserTie,
  FaUserFriends,
  FaCrown,
  FaCheckCircle,
} from "react-icons/fa";
import Loading from "../Loading/Loading";

const AdministratorByEditProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: userData = [], isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${id}`);
      return res.data;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      displayName: e.target.displayName.value,
      phoneNo: e.target.phoneNo.value,
      btebID: e.target.btebID.value,
      beach: parseInt(e.target.beach.value),
      userType: userData?.userType,
      email: userData?.email,
      photoURL: userData?.photoURL,
      totalDueAmmout: userData?.totalDueAmmout,
      totalPurchesAmmount: userData?.totalPurchesAmmount,
      purchesProductCollection: userData?.purchesProductCollection,
      markCollection: userData?.markCollection,
      userData: {
        ...userData.userData,
        fatherName: e.target.fatherName.value,
        motherName: e.target.motherName.value,
        educationQualification: e.target.educationQualification.value,
        dateOfBirth: e.target.dateOfBirth.value,
        schoolUniversity: e.target.schoolUniversity.value,
        facebookUrl: e.target.facebookUrl.value,
        permanentAddress: e.target.permanentAddress.value,
        presentAddress: e.target.presentAddress.value,
      },
    };

    try {
      const updateRes = await axiosSecure.put(`/user/${id}`, formData);

      if (updateRes.data) {
        Swal.fire({
          title: "সফল!",
          text: "প্রোফাইল সফলভাবে আপডেট করা হয়েছে",
          icon: "success",
          position: "top-right",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate(`/dashboard/single-user-info/${userData._id}`);
        }, 2000);
      } else {
        Swal.fire({
          title: "ত্রুটি!",
          text: updateRes.data.message || "কিছু ভুল হয়েছে",
          icon: "error",
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error updating user: ", error);
      Swal.fire({
        title: "ত্রুটি!",
        text: "প্রোফাইল আপডেট করার সময় একটি ত্রুটি ঘটেছে",
        icon: "error",
        position: "top-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="btn btn-ghost btn-circle hover:bg-blue-100"
              >
                <FaArrowLeft className="text-blue-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                  <FaEdit className="text-blue-600" />
                  প্রোফাইল সম্পাদনা
                </h1>
                <p className="text-gray-600">শিক্ষার্থীর তথ্য আপডেট করুন</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {userData?.userType === 'admin' && (
                <div className="flex items-center gap-2">
                  <FaCrown className="text-yellow-500 text-xl" />
                  <span className="badge badge-warning">অ্যাডমিন</span>
                </div>
              )}
            </div>
          </div>

          {/* User Info Preview */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="avatar">
              <div className="w-16 h-16 rounded-full ring-2 ring-blue-200">
                <img 
                  src={userData?.photoURL || '/default-avatar.png'} 
                  alt={userData?.displayName}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {userData?.displayName}
              </h3>
              <p className="text-gray-600">{userData?.email}</p>
              <p className="text-sm text-blue-600">{userData?.beach} ব্যাচ</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaUser className="text-blue-600" />
              মৌলিক তথ্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <FaUser className="text-blue-600" />
                    নাম
                  </span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  defaultValue={userData?.displayName}
                  disabled
                  className="input input-bordered w-full bg-gray-50 text-gray-600"
                />
                <label className="label">
                  <span className="label-text-alt text-gray-500">নাম পরিবর্তন করা যাবে না</span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <FaPhone className="text-blue-600" />
                    ফোন নম্বর
                  </span>
                </label>
                <input
                  type="tel"
                  name="phoneNo"
                  defaultValue={userData?.phoneNo}
                  className="input input-bordered w-full focus:border-blue-500 focus:ring-blue-500"
                  placeholder="০১৭১২-৩৪৫৬৭৮"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <FaIdCard className="text-orange-600" />
                    ব্যাচ নম্বর
                  </span>
                </label>
                <input
                  type="number"
                  name="beach"
                  defaultValue={userData?.beach}
                  className="input input-bordered w-full focus:border-orange-500 focus:ring-orange-500"
                  placeholder="১"
                />
                <label className="label">
                  <span className="label-text-alt text-orange-600">শুধুমাত্র অ্যাডমিন সম্পাদনা করতে পারবেন</span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <FaIdCard className="text-green-600" />
                    BTEB ID
                  </span>
                </label>
                <input
                  type="text"
                  name="btebID"
                  defaultValue={userData?.btebID}
                  className="input input-bordered w-full focus:border-green-500 focus:ring-green-500"
                  placeholder="BTEB-২০২৪-০০১"
                />
              </div>
            </div>
          </div>

          {/* Family Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaUserTie className="text-purple-600" />
              পারিবারিক তথ্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <FaUserTie className="text-purple-600" />
                    পিতার নাম
                  </span>
                </label>
                <input
                  type="text"
                  name="fatherName"
                  defaultValue={userData?.userData?.fatherName}
                  className="input input-bordered w-full focus:border-purple-500 focus:ring-purple-500"
                  placeholder="পিতার নাম লিখুন"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <FaUserFriends className="text-purple-600" />
                    মাতার নাম
                  </span>
                </label>
                <input
                  type="text"
                  name="motherName"
                  defaultValue={userData?.userData?.motherName}
                  className="input input-bordered w-full focus:border-purple-500 focus:ring-purple-500"
                  placeholder="মাতার নাম লিখুন"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <FaCalendarAlt className="text-purple-600" />
                    জন্ম তারিখ
                  </span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  defaultValue={userData?.userData?.dateOfBirth}
                  className="input input-bordered w-full focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Educational Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-green-600" />
              শিক্ষাগত তথ্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <FaGraduationCap className="text-green-600" />
                    শিক্ষাগত যোগ্যতা
                  </span>
                </label>
                <input
                  type="text"
                  name="educationQualification"
                  defaultValue={userData?.userData?.educationQualification}
                  className="input input-bordered w-full focus:border-green-500 focus:ring-green-500"
                  placeholder="উচ্চ মাধ্যমিক/স্নাতক"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <FaSchool className="text-green-600" />
                    স্কুল/বিশ্ববিদ্যালয়
                  </span>
                </label>
                <input
                  type="text"
                  name="schoolUniversity"
                  defaultValue={userData?.userData?.schoolUniversity}
                  className="input input-bordered w-full focus:border-green-500 focus:ring-green-500"
                  placeholder="শিক্ষাপ্রতিষ্ঠানের নাম"
                />
              </div>
            </div>
          </div>

          {/* Contact & Social Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaFacebook className="text-blue-600" />
              যোগাযোগ ও সামাজিক মাধ্যম
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <FaFacebook className="text-blue-600" />
                    ফেসবুক URL
                  </span>
                </label>
                <input
                  type="url"
                  name="facebookUrl"
                  defaultValue={userData?.userData?.facebookUrl}
                  className="input input-bordered w-full focus:border-blue-500 focus:ring-blue-500"
                  placeholder="https://facebook.com/username"
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-600" />
              ঠিকানা
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <FaHome className="text-red-600" />
                    বর্তমান ঠিকানা
                  </span>
                </label>
                <textarea
                  name="presentAddress"
                  defaultValue={userData?.userData?.presentAddress}
                  className="textarea textarea-bordered w-full h-24 focus:border-red-500 focus:ring-red-500"
                  placeholder="বর্তমান ঠিকানা লিখুন"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold flex items-center gap-2">
                    <FaMapMarkerAlt className="text-red-600" />
                    স্থায়ী ঠিকানা
                  </span>
                </label>
                <textarea
                  name="permanentAddress"
                  defaultValue={userData?.userData?.permanentAddress}
                  className="textarea textarea-bordered w-full h-24 focus:border-red-500 focus:ring-red-500"
                  placeholder="স্থায়ী ঠিকানা লিখুন"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="text-center sm:text-left">
                <p className="text-gray-600">
                  সর্বশেষ আপডেট: {new Date(userData?.updatedAt).toLocaleDateString('bn-BD')}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="btn btn-outline btn-lg gap-2"
                >
                  <FaArrowLeft /> ফিরে যান
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      আপডেট হচ্ছে...
                    </>
                  ) : (
                    <>
                      <FaSave />
                      আপডেট করুন
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdministratorByEditProfile;