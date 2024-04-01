import React from "react";
import Notice from "./Notice";

const HomeInfo = () => {
  return (
    <div className="w-full py-5">
      <div className="hero    text-bangla w-full">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <div className=" lg:w-1/3">
            <Notice />
          </div>

          <div className="lg:w-2/3">
            <div className="">
              <h1 data-aos="fade-right" className="text-3xl font-bold ">
              Message from the head of the institution
              </h1>
              <p data-aos="fade-up-right" className="py-6">
                পৃথিবীর প্রতি ব্যক্তি নিজেকে বেঁচে থাকে, আমি ও তাই। কেবল
                নিজের জন্য জীবন যাপন করতে মানুষত্ব নেই, মানুষ হওয়ার সার্থকতা
                হলো অন্যদের উদ্ধার করা! আমি তৈরি আছি যাতে আবিষ্কৃত হয় যা মেয়াদ
                শেষে দু: খ এবং কঠিনাইতে পড়ার অর্থ থাকে। "ওপেন আইটি ইনস্টিটিউট"
                একটি আধুনিক কম্পিউটার প্রশিক্ষণ কেন্দ্র। এটি "বাংলাদেশ
                টেকনিক্যাল এজুকেশন বোর্ড" এর সংলগ্ন। আমরা মনে করি এই সাফল্যের
                কারণ হলো আমাদের লক্ষ্য-উদ্দেশ্য এবং সবার সহযোগিতা। আমাদের
                লক্ষ্য-উদ্দেশ্য হলো সমস্ত মানুষকে তথ্য এবং যোগাযোগ প্রযুক্তি
                সম্পর্কে জানানো এবং এটা করার জন্য আমাদের পক্ষ থেকে ধাপসমূহ -
                (০১) অভিজ্ঞ প্রশিক্ষক, (০২) ডিজিটাল কম্পিউটার ল্যাব এবং
                ক্লাসরুম, (০৩) কোর্সের শেষে: একবারের বৃত্তি, একবারের ঋণ সুবিধা,
                বিনামূল্যে অধিক কোর্স সুবিধা এবং বিটেবি সার্টিফিকেট প্রদান, (০৪)
                ২৪ ঘণ্টা বিদ্যুৎ সরবরাহ এবং ইন্টারনেট অ্যাক্সেস সহ। তাই আমরা
                আপনাকে ভর্তি হওয়ার আগে আমাদের ইনস্টিটিউট দেখতে আমন্ত্রিত করছি।
                ধন্যবাদ।
              </p>
            </div>
            <div className="flex  items-center gap-8 justify-end">
              <div className="avatar">
                <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://i.ibb.co/s5RQDc5/nur.jpg" />
                </div>
              </div>
              <div className="">
                <div className="text-lg font-bold"> Md.Nuruzzaman</div>
                <br />
                <div className="text-sm  ">
                  founder & ceo
                  <br />
                  Open IT Institute
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
