const DealsAndOffers = () => {
  return (
    <div className=" py-8 container mx-auto px-8  ">
      <h2 className="text-2xl font-semibold text-gray-950 text-center">Deals and Offers</h2>

      <div className="lg:flex gap-6 w-full py-12    ">

        <div className=" my-5 flex  items-center justify-center align-middle  w-full max-w-sm  shadow-xl relative  ">
          <figure className=" w-1/3  ">
            <img
              src="https://i.ibb.co/X29WKy8/ffb96e0e5c51c764ad1be283b8f88c63.png"
              alt="Shoes"
              className="rounded-xl    h-full   "
            />
          </figure>

          <div className="w-2/3 pb-5">
            <div className=" pl-3  ">
              <p className="text-sm font-semibold">With bkash payment only</p>
              <h2 className="  font-bold   text-blue-500  ">
                up to 14% discount on the base fare of domestic flights
              </h2>
            </div>
          </div>
        </div>
        <div className=" my-5 flex  items-center justify-center align-middle  w-full max-w-sm  shadow-xl relative  ">
          <figure className=" w-1/3  ">
            <img
              src="https://i.ibb.co/RjR4MQr/58a5cb07596c8390c3c8b8c1b5228f5c.png"
              alt="Shoes"
              className="rounded-xl    h-full   "
            />
          </figure>

          <div className="w-2/3 pb-5">
            <div className=" pl-3  ">
              <p className="text-sm font-semibold">With bkash payment only</p>
              <h2 className="  font-bold   text-blue-500  ">
                up to 14% discount on the base fare of domestic flights
              </h2>
            </div>
          </div>
        </div>
        <div className=" my-5 flex  items-center justify-center align-middle  w-full max-w-sm  shadow-xl relative  ">
          <figure className=" w-1/3  ">
            <img
              src="https://i.ibb.co/gZmbP84/bd2a194917550c4334c07048753d2361.png"
              alt="Shoes"
              className="rounded-xl    h-full   "
            />
          </figure>

          <div className="w-2/3 pb-5">
            <div className=" pl-3  ">
              <p className="text-sm font-semibold">With bkash payment only</p>
              <h2 className="  font-bold   text-blue-500  ">
                up to 14% discount on the base fare of domestic flights
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsAndOffers;
