import { Link } from "react-router-dom";
import gpdesign from "../../assets/1_uw8prVHOb4-8rE5EM_JYjg.jpg";
import mran from "../../assets/MERN-Stack-Development.png";
import office from "../../assets/office_application.jpg";
const Featured = () => {
  return (
    <div className=" py-8 container mx-auto px-8  ">
      <div className="text-center ">
        <h2 className="text-3xl font-semibold text-gray-950 pb-3">
          Our Tracks and course
        </h2>
        <p className="text-gray-700">
          Discover the ideal course from your wishlist with us!
        </p>
      </div>

      <div className="lg:flex gap-6 w-full py-12   ">
        <div className="card w-full max-w-sm  shadow-xl relative hover:shadow-2xl mx-auto ">
          <a title="click for product detail page">
            <figure className=" px-2">
              <img
                src={office}
                alt="Shoes"
                className="rounded-xl my-2 w-[390px] h-[270px] object-cover  "
              />
            </figure>
          </a>
          <div className=" pb-5">
            <div className="  ">
              <div className="flex justify-between p-4">
                <div className="">
                  <h2 className="   font-bold  text-xl  text-gray-900  ">
                    Office Application
                  </h2>
                </div>

                <div className="">
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      checked
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
              <div className="text-[#FF7426] px-4 text-lg font-bold">
                5000BDT
              </div>
              <div className="p-4 flex gap-2 text-gray-500">
                <div className="flex gap-1">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M9.50014 0C4.26193 0 0.000488281 4.26167 0.000488281 9.49989C0.000488281 14.7383 4.26193 19 9.50014 19C14.7384 19 19 14.7383 19 9.49989C19 4.26167 14.7381 0 9.50014 0ZM9.50014 17.6265C5.0194 17.6265 1.37374 13.9809 1.37374 9.49989C1.37374 5.01892 5.01917 1.37348 9.50014 1.37348C13.9811 1.37348 17.6266 5.01892 17.6266 9.49989C17.6266 13.9809 13.9811 17.6265 9.50014 17.6265Z"
                        fill="black"
                      />
                      <path
                        d="M12.2485 10.3744C12.2449 10.3744 12.2416 10.3744 12.238 10.3744L10.1865 10.405V5.0361C10.1865 4.6568 9.87904 4.34937 9.49973 4.34937C9.12042 4.34937 8.81299 4.6568 8.81299 5.0361V11.1023C8.81299 11.1037 8.81345 11.105 8.81345 11.1064C8.81345 11.1087 8.81299 11.1108 8.81299 11.1126C8.81345 11.1405 8.81871 11.1668 8.82237 11.1936C8.82466 11.2103 8.82489 11.2275 8.8281 11.244C8.83428 11.2735 8.84458 11.301 8.85442 11.3287C8.85946 11.3431 8.86266 11.3582 8.86861 11.372C8.88052 11.4001 8.89654 11.4257 8.91188 11.4521C8.91897 11.4637 8.92424 11.4766 8.93179 11.488C8.94919 11.5134 8.97002 11.5361 8.99062 11.5592C8.99932 11.5688 9.00642 11.5798 9.01558 11.5892C9.03778 11.6112 9.06273 11.6297 9.08768 11.6487C9.09776 11.6563 9.10668 11.6654 9.11698 11.6725C9.144 11.6908 9.17353 11.7053 9.20306 11.7194C9.21336 11.7243 9.22251 11.7311 9.23304 11.7355C9.26738 11.7499 9.30401 11.76 9.34109 11.7689C9.34796 11.7705 9.35437 11.7737 9.36146 11.7751C9.40587 11.784 9.45188 11.789 9.49904 11.789C9.50247 11.789 9.50614 11.789 9.50957 11.789L12.2584 11.7478C12.6374 11.7421 12.9403 11.4299 12.9348 11.0508C12.9295 10.6751 12.623 10.3744 12.2485 10.3744Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_3437">
                        <rect width="19" height="19" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  200hr 30min
                </div>
                <div className="flex gap-1">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25 5.5C3.45507 5.5 2 6.95508 2 8.75V19.25C2 21.0449 3.45507 22.5 5.25 22.5H15.7523C17.5472 22.5 19.0023 21.0449 19.0023 19.25V17.6707L23.5434 20.7824C24.3729 21.3508 25.4999 20.7568 25.4999 19.7512V8.24842C25.4999 7.24298 24.3732 6.64898 23.5436 7.21708L19.0023 10.3272V8.75C19.0023 6.95508 17.5472 5.5 15.7523 5.5H5.25ZM19.0023 15.8524V12.1452L23.9999 8.72263V19.2769L19.0023 15.8524ZM17.5023 8.75V19.25C17.5023 20.2165 16.7187 21 15.7523 21H5.25C4.2835 21 3.5 20.2165 3.5 19.25V8.75C3.5 7.7835 4.2835 7 5.25 7H15.7523C16.7188 7 17.5023 7.7835 17.5023 8.75Z"
                      fill="#212121"
                    />
                  </svg>
                  50 classes
                </div>
                <div className="flex gap-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8961 12.0023C16.4988 12.0023 16.1789 12.3222 16.1789 12.7195V16.1789H1.82109V12.7195C1.82109 12.3222 1.50117 12.0023 1.10391 12.0023C0.706641 12.0023 0.386719 12.3222 0.386719 12.7195V16.8961C0.386719 17.2933 0.706641 17.6133 1.10391 17.6133H16.8961C17.2934 17.6133 17.6133 17.2933 17.6133 16.8961V12.7195C17.6133 12.3222 17.2934 12.0023 16.8961 12.0023Z"
                      fill="black"
                    />
                    <path
                      d="M8.47278 12.8531C8.87708 13.261 9.37278 13.036 9.52395 12.8531L13.6478 8.41643C13.9185 8.12463 13.9009 7.67112 13.6091 7.40041C13.3173 7.12971 12.8638 7.14729 12.5966 7.43909L9.71731 10.5364V1.21292C9.71731 0.815649 9.39739 0.495728 9.00012 0.495728C8.60286 0.495728 8.28294 0.815649 8.28294 1.21292V10.5399L5.40364 7.4426C5.13294 7.15081 4.67942 7.13674 4.38762 7.40393C4.09583 7.67463 4.08177 8.12815 4.34895 8.41995L8.47278 12.8531Z"
                      fill="black"
                    />
                  </svg>
                  25 Sales
                </div>
              </div>
              <div className="card-actions items-center justify-center  ">
                <Link to="/signUp">
                  
                  <button className=" px-8 py-3 font-semibold rounded-full btn hover:bg-[#ff6d48] bg-[#FF7426] text-white  flex items-center  ">
                    Join Course
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full max-w-sm  shadow-xl relative hover:shadow-2xl mx-auto ">
          <a title="click for product detail page">
            <figure className=" px-2">
              <img
                src={gpdesign}
                alt="Shoes"
                className="rounded-xl my-2 w-[390px] h-[270px] object-cover  "
              />
            </figure>
          </a>
          <div className=" pb-5">
            <div className="  ">
              <div className="flex justify-between p-4">
                <div className="">
                  <h2 className="   font-bold  text-xl  text-gray-900  ">
                  Graph design
                  </h2>
                </div>

                <div className="">
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-200"
                      checked
                    />
                  </div>
                </div>
              </div>
              <div className="text-[#FF7426] px-4 text-lg font-bold">
                6000BDT
              </div>
              <div className="p-4 flex gap-2 text-gray-500">
                <div className="flex gap-1">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M9.50014 0C4.26193 0 0.000488281 4.26167 0.000488281 9.49989C0.000488281 14.7383 4.26193 19 9.50014 19C14.7384 19 19 14.7383 19 9.49989C19 4.26167 14.7381 0 9.50014 0ZM9.50014 17.6265C5.0194 17.6265 1.37374 13.9809 1.37374 9.49989C1.37374 5.01892 5.01917 1.37348 9.50014 1.37348C13.9811 1.37348 17.6266 5.01892 17.6266 9.49989C17.6266 13.9809 13.9811 17.6265 9.50014 17.6265Z"
                        fill="black"
                      />
                      <path
                        d="M12.2485 10.3744C12.2449 10.3744 12.2416 10.3744 12.238 10.3744L10.1865 10.405V5.0361C10.1865 4.6568 9.87904 4.34937 9.49973 4.34937C9.12042 4.34937 8.81299 4.6568 8.81299 5.0361V11.1023C8.81299 11.1037 8.81345 11.105 8.81345 11.1064C8.81345 11.1087 8.81299 11.1108 8.81299 11.1126C8.81345 11.1405 8.81871 11.1668 8.82237 11.1936C8.82466 11.2103 8.82489 11.2275 8.8281 11.244C8.83428 11.2735 8.84458 11.301 8.85442 11.3287C8.85946 11.3431 8.86266 11.3582 8.86861 11.372C8.88052 11.4001 8.89654 11.4257 8.91188 11.4521C8.91897 11.4637 8.92424 11.4766 8.93179 11.488C8.94919 11.5134 8.97002 11.5361 8.99062 11.5592C8.99932 11.5688 9.00642 11.5798 9.01558 11.5892C9.03778 11.6112 9.06273 11.6297 9.08768 11.6487C9.09776 11.6563 9.10668 11.6654 9.11698 11.6725C9.144 11.6908 9.17353 11.7053 9.20306 11.7194C9.21336 11.7243 9.22251 11.7311 9.23304 11.7355C9.26738 11.7499 9.30401 11.76 9.34109 11.7689C9.34796 11.7705 9.35437 11.7737 9.36146 11.7751C9.40587 11.784 9.45188 11.789 9.49904 11.789C9.50247 11.789 9.50614 11.789 9.50957 11.789L12.2584 11.7478C12.6374 11.7421 12.9403 11.4299 12.9348 11.0508C12.9295 10.6751 12.623 10.3744 12.2485 10.3744Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_3437">
                        <rect width="19" height="19" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  200hr 30min
                </div>
                <div className="flex gap-1">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25 5.5C3.45507 5.5 2 6.95508 2 8.75V19.25C2 21.0449 3.45507 22.5 5.25 22.5H15.7523C17.5472 22.5 19.0023 21.0449 19.0023 19.25V17.6707L23.5434 20.7824C24.3729 21.3508 25.4999 20.7568 25.4999 19.7512V8.24842C25.4999 7.24298 24.3732 6.64898 23.5436 7.21708L19.0023 10.3272V8.75C19.0023 6.95508 17.5472 5.5 15.7523 5.5H5.25ZM19.0023 15.8524V12.1452L23.9999 8.72263V19.2769L19.0023 15.8524ZM17.5023 8.75V19.25C17.5023 20.2165 16.7187 21 15.7523 21H5.25C4.2835 21 3.5 20.2165 3.5 19.25V8.75C3.5 7.7835 4.2835 7 5.25 7H15.7523C16.7188 7 17.5023 7.7835 17.5023 8.75Z"
                      fill="#212121"
                    />
                  </svg>
                  52 classes
                </div>
                <div className="flex gap-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8961 12.0023C16.4988 12.0023 16.1789 12.3222 16.1789 12.7195V16.1789H1.82109V12.7195C1.82109 12.3222 1.50117 12.0023 1.10391 12.0023C0.706641 12.0023 0.386719 12.3222 0.386719 12.7195V16.8961C0.386719 17.2933 0.706641 17.6133 1.10391 17.6133H16.8961C17.2934 17.6133 17.6133 17.2933 17.6133 16.8961V12.7195C17.6133 12.3222 17.2934 12.0023 16.8961 12.0023Z"
                      fill="black"
                    />
                    <path
                      d="M8.47278 12.8531C8.87708 13.261 9.37278 13.036 9.52395 12.8531L13.6478 8.41643C13.9185 8.12463 13.9009 7.67112 13.6091 7.40041C13.3173 7.12971 12.8638 7.14729 12.5966 7.43909L9.71731 10.5364V1.21292C9.71731 0.815649 9.39739 0.495728 9.00012 0.495728C8.60286 0.495728 8.28294 0.815649 8.28294 1.21292V10.5399L5.40364 7.4426C5.13294 7.15081 4.67942 7.13674 4.38762 7.40393C4.09583 7.67463 4.08177 8.12815 4.34895 8.41995L8.47278 12.8531Z"
                      fill="black"
                    />
                  </svg>
                  20 Sales
                </div>
              </div>
              <div className="card-actions items-center justify-center  ">
                <Link to="/signUp">
                  
                  <button className=" px-8 py-3 font-semibold rounded-full btn hover:bg-[#ff6d48] bg-[#FF7426] text-white  flex items-center  ">
                    Join Course
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full max-w-sm  shadow-xl relative hover:shadow-2xl mx-auto ">
          <a title="click for product detail page">
            <figure className=" px-2  ">
              <img
                src={mran}
                alt="web"
                className="rounded-xl my-2 w-[390px] h-[270px] object-cover border  border-orange-500 "
              />
            </figure>
          </a>
          <div className=" pb-5">
            <div className="  ">
              <div className="flex justify-between p-4">
                <div className="">
                  <h2 className="   font-bold  text-xl  text-gray-900  ">
                  Full stack development 
                  </h2>
                </div>

                <div className="">
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      checked
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>
              </div>
            
              <div className="text-[#FF7426] px-4 text-lg font-bold">
                12000BDT 
              </div>
              <div className="p-4 flex gap-2 text-gray-500">
                <div className="flex gap-1">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M9.50014 0C4.26193 0 0.000488281 4.26167 0.000488281 9.49989C0.000488281 14.7383 4.26193 19 9.50014 19C14.7384 19 19 14.7383 19 9.49989C19 4.26167 14.7381 0 9.50014 0ZM9.50014 17.6265C5.0194 17.6265 1.37374 13.9809 1.37374 9.49989C1.37374 5.01892 5.01917 1.37348 9.50014 1.37348C13.9811 1.37348 17.6266 5.01892 17.6266 9.49989C17.6266 13.9809 13.9811 17.6265 9.50014 17.6265Z"
                        fill="black"
                      />
                      <path
                        d="M12.2485 10.3744C12.2449 10.3744 12.2416 10.3744 12.238 10.3744L10.1865 10.405V5.0361C10.1865 4.6568 9.87904 4.34937 9.49973 4.34937C9.12042 4.34937 8.81299 4.6568 8.81299 5.0361V11.1023C8.81299 11.1037 8.81345 11.105 8.81345 11.1064C8.81345 11.1087 8.81299 11.1108 8.81299 11.1126C8.81345 11.1405 8.81871 11.1668 8.82237 11.1936C8.82466 11.2103 8.82489 11.2275 8.8281 11.244C8.83428 11.2735 8.84458 11.301 8.85442 11.3287C8.85946 11.3431 8.86266 11.3582 8.86861 11.372C8.88052 11.4001 8.89654 11.4257 8.91188 11.4521C8.91897 11.4637 8.92424 11.4766 8.93179 11.488C8.94919 11.5134 8.97002 11.5361 8.99062 11.5592C8.99932 11.5688 9.00642 11.5798 9.01558 11.5892C9.03778 11.6112 9.06273 11.6297 9.08768 11.6487C9.09776 11.6563 9.10668 11.6654 9.11698 11.6725C9.144 11.6908 9.17353 11.7053 9.20306 11.7194C9.21336 11.7243 9.22251 11.7311 9.23304 11.7355C9.26738 11.7499 9.30401 11.76 9.34109 11.7689C9.34796 11.7705 9.35437 11.7737 9.36146 11.7751C9.40587 11.784 9.45188 11.789 9.49904 11.789C9.50247 11.789 9.50614 11.789 9.50957 11.789L12.2584 11.7478C12.6374 11.7421 12.9403 11.4299 12.9348 11.0508C12.9295 10.6751 12.623 10.3744 12.2485 10.3744Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_3437">
                        <rect width="19" height="19" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  200hr 30min
                </div>
                <div className="flex gap-1">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25 5.5C3.45507 5.5 2 6.95508 2 8.75V19.25C2 21.0449 3.45507 22.5 5.25 22.5H15.7523C17.5472 22.5 19.0023 21.0449 19.0023 19.25V17.6707L23.5434 20.7824C24.3729 21.3508 25.4999 20.7568 25.4999 19.7512V8.24842C25.4999 7.24298 24.3732 6.64898 23.5436 7.21708L19.0023 10.3272V8.75C19.0023 6.95508 17.5472 5.5 15.7523 5.5H5.25ZM19.0023 15.8524V12.1452L23.9999 8.72263V19.2769L19.0023 15.8524ZM17.5023 8.75V19.25C17.5023 20.2165 16.7187 21 15.7523 21H5.25C4.2835 21 3.5 20.2165 3.5 19.25V8.75C3.5 7.7835 4.2835 7 5.25 7H15.7523C16.7188 7 17.5023 7.7835 17.5023 8.75Z"
                      fill="#212121"
                    />
                  </svg>
                  50 classes
                </div>
                <div className="flex gap-1">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8961 12.0023C16.4988 12.0023 16.1789 12.3222 16.1789 12.7195V16.1789H1.82109V12.7195C1.82109 12.3222 1.50117 12.0023 1.10391 12.0023C0.706641 12.0023 0.386719 12.3222 0.386719 12.7195V16.8961C0.386719 17.2933 0.706641 17.6133 1.10391 17.6133H16.8961C17.2934 17.6133 17.6133 17.2933 17.6133 16.8961V12.7195C17.6133 12.3222 17.2934 12.0023 16.8961 12.0023Z"
                      fill="black"
                    />
                    <path
                      d="M8.47278 12.8531C8.87708 13.261 9.37278 13.036 9.52395 12.8531L13.6478 8.41643C13.9185 8.12463 13.9009 7.67112 13.6091 7.40041C13.3173 7.12971 12.8638 7.14729 12.5966 7.43909L9.71731 10.5364V1.21292C9.71731 0.815649 9.39739 0.495728 9.00012 0.495728C8.60286 0.495728 8.28294 0.815649 8.28294 1.21292V10.5399L5.40364 7.4426C5.13294 7.15081 4.67942 7.13674 4.38762 7.40393C4.09583 7.67463 4.08177 8.12815 4.34895 8.41995L8.47278 12.8531Z"
                      fill="black"
                    />
                  </svg>
                  25 Sales
                </div>
              </div>
              <div className="card-actions items-center justify-center  ">
                <Link to="/signUp">
                  
                  <button className=" px-8 py-3 font-semibold rounded-full btn hover:bg-[#ff6d48] bg-[#FF7426] text-white  flex items-center  ">
                    Join Course
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
