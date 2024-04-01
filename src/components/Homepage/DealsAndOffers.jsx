const DealsAndOffers = () => {
  return (
    <div className=" py-8 container mx-auto px-8  ">
      <h2 className="text-3xl font-semibold text-gray-950 text-center text-bangla">আসন্ন অনুষ্ঠান</h2>

      <div className="lg:flex gap-6 w-full py-12    ">

        <div className=" my-5 flex  items-center justify-center align-middle  w-full max-w-sm  shadow-xl relative  ">
          <figure className=" w-1/3  ">
            <img
              src="https://t3.ftcdn.net/jpg/02/02/61/30/360_F_202613068_kl4ZJPWGn5nWo2G1qBTv1a5CzgKkHg2r.jpg"
              alt="Image"
              className="rounded-xl     h-36 object-cover  "
            />
          </figure>

          <div className="w-2/3 pb-5">
            <div className=" pl-3  ">
              <p className="text-sm font-semibold">25-03-2024</p>
              <h2 className="  font-bold   text-blue-500  ">
               Mahe Romadan ifter party <br />
               on open it 
              </h2>
            </div>
          </div>
        </div>   <div className=" my-5 flex  items-center justify-center align-middle  w-full max-w-sm  shadow-xl relative  ">
          <figure className=" w-1/3  ">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0aM7Eazx0qada-GAwHAFjewluCWTeTyjReXGxBpVdoNPkFWBGTOP-THvb9v-eW3LI-vTkG9HAGYwa5RH3yAQ8RaV72X7CovPdZopbkgEpulnQyzmsTkg3_LMKOzDiQgyHlRJC2sbht5Z-/s1600/Birisiri-lake.jpg"
              alt="Image"
              className="rounded-xl     h-36 object-cover  "
            />
          </figure>

          <div className="w-2/3 pb-5">
            <div className=" pl-3  ">
              <p className="text-sm font-semibold">20-04-2024</p>
              <h2 className="  font-bold   text-blue-500  ">
              Annual picnic and tour  
              </h2>
            </div>
          </div>
        </div>   <div className=" my-5 flex  items-center justify-center align-middle  w-full max-w-sm  shadow-xl relative  ">
          <figure className=" w-1/3  ">
            <img
              src="https://seemadentalcollege.org/images/2019/08/22/how-to-make-the-best-use-of-your-college-alumni-association.jpg"
              alt="Image"
              className="rounded-xl     h-36 object-cover  "
            />
          </figure>

          <div className="w-2/3 pb-5">
            <div className=" pl-3  ">
              <p className="text-sm font-semibold">25-03-2024</p>
              <h2 className="  font-bold   text-blue-500  ">
              Alumni reunion putty <br />
               
              </h2>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default DealsAndOffers;
