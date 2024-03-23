const Featured = () => {
  return (
    <div className=" py-8 container mx-auto px-8  ">
      <h2 className="text-2xl font-semibold text-gray-950">
        Featured Destinations
      </h2>

      <div className="lg:flex gap-6 w-full py-12   ">
        <div className="card w-full max-w-sm  shadow-2xl relative hover:shadow-xl mx-auto ">
          <a title="click for product detail page">
            <figure className=" px-2">
              <img
                src="https://i.ibb.co/H7W5QQ6/Rectangle-18.png "
                alt="Shoes"
                className="rounded-xl my-2 w-[390px] h-[270px]   "
              />
            </figure>
          </a>
          <div className=" pb-5">
            <div className="  ">
              <h2 className="px-2  font-bold py-8 text-gray-900  ">
                Stopover opportunity in Istanbul with Turkish Airlines
              </h2>

              <div className="card-actions items-center justify-center pb-4">
                <button className=" btn btn-warning px-16 ">View More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full max-w-sm  shadow-2xl relative hover:shadow-xl mx-auto">
          <a title="click for product detail page">
            <figure className=" px-2">
              <img
                src="https://i.ibb.co/pRnH8qX/ec02d253c0726f352d37b0858f01cd3f.jpg "
                alt="Shoes"
                className="rounded-xl my-2 w-[390px] h-[270px]  "
              />
            </figure>
          </a>
          <div className=" pb-5">
            <div className="  ">
              <h2 className="px-2  font-bold py-8 text-gray-900  ">
                Discover the timeless city with Touristanbul of Turkish Airlines
              </h2>

              <div className="card-actions items-center justify-center pb-4">
                <button className=" btn btn-warning px-16 ">View More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full max-w-sm  shadow-2xl relative hover:shadow-xl mx-auto">
          <a title="click for product detail page">
            <figure className=" px-2">
              <img
                src="https://i.ibb.co/fnxD95m/918f128af604d26b32560b6eb10faccf.jpg "
                alt="Shoes"
                className="rounded-xl my-2  w-[390px] h-[270px] "
              />
            </figure>
          </a>
          <div className=" pb-5">
            <div className="  ">
              <h2 className="px-2  font-bold py-8 text-gray-900  ">
                the best of Abu Dhabi with exclusive Etihad Airways!
              </h2>

              <div className="card-actions items-center justify-center pb-4">
                <button className=" btn btn-warning px-16 ">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
