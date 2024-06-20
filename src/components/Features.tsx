import React from 'react';

const Features = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className=" bg-[#F4F9FF]">
          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 ">
            <div className="flex flex-col  items-center my-4 md:my-8 text-[#00357B] font-semibold">
              <div className="h-10 w-10 sm:h-12 sm:w-12 ">
              </div>
              <h1 className="mt-4 text-sm">BOOK WITH</h1>
              <p className="text-2xl sm:text-3xl font-oswald">ONLY 20%</p>
            </div>
            <div className="flex flex-col  items-center my-4 md:my-8 text-[#00357B] font-semibold">
              <div className="h-10 w-10 sm:h-12 sm:w-12 ">
              </div>
              <h1 className="mt-4 text-sm">PAYMENT PLAN</h1>
              <p className="text-2xl sm:text-3xl font-oswald">Easy 70/30</p>
            </div>
            <div className="flex flex-col  items-center my-4 md:my-8 text-[#00357B] font-semibold">
              <div className="h-10 w-10 sm:h-12 sm:w-12 ">
              </div>
              <h1 className="mt-4 text-sm">HANDOVER ON</h1>
              <p className="text-2xl sm:text-3xl font-oswald">Q2 2027</p>
            </div>
            <div className="flex flex-col  items-center my-4 md:my-8 text-[#00357B] font-semibold">
              <div className="h-10 w-10 sm:h-12 sm:w-12 ">
              </div>
              <h1 className="mt-4 text-sm">AREA STARTS FROM</h1>
              <p className="text-2xl sm:text-3xl font-oswald">700 sqmt</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-[#00357B] flex flex-col items-center mt-14 px-4">
          <h1 className="text-center text-3xl sm:text-4xl font-light whitespace-pre-wrap leading-[0.8] sm:leading-[0.8] ">HARBOUR LIGHT</h1>
          <p className="text-[10px] mt-2">de GRISOGONO</p>
          <p className="text-[6px] leading-[0.2]">GENEVE</p>
          <div className="max-w-3xl text-center mt-10">
            <h1 className="text-3xl sm:text-4xl font-medium font-oswald uppercase">Features &amp; Amenities</h1>
            <p className="text-black my-4">Harbour Lights beautifully honours maritime voyages while embracing
              an opulent seafront lifestyle. Its maritime-inspired amenities
              provide an unmatched seaside experience, offering a life of
              tranquility and bliss.</p>
          </div>
        </div>
        <div className="mt-8 flex flex justify-center w-90">
          <div className="m-4 p-4 bg-white rounded shadow-lg w-1/4">
            <div className="className ">
              <img src="/images/pool.jpg" alt="Floating Pool" className="w-193px h-193px object-cover rounded" />
            </div>
            <h2 className="font-poppins text-xl mt-4 font-semibold leading-5 text-center text-blue-900">Floating Pool</h2>
          </div>
          <div className="m-4 p-4 bg-white rounded shadow-lg w-1/4">
            <img src="/images/cabana.jpg" alt="Spacious Cabana" className="w-193px h-193px object-cover rounded" />
            <h3 className="font-poppins text-xl mt-4 font-semibold leading-5 text-center text-blue-900">Spacious Cabins
              Like Rooms</h3>
          </div>
          <div className="m-4 p-4 bg-white rounded shadow-lg w-1/4">
            <img src="/images/pool2.jpg" alt="Sea-facing Pool" className="w-193px h-193px object-cover rounded" />
            <h3 className="font-poppins text-xl mt-4 font-semibold leading-5 text-center text-blue-900">Sea-facing Pool</h3>
          </div>
          <div className="m-4 p-4 bg-white rounded shadow-lg w-1/4">
            <img src="/images/gym.jpg" alt="Gymnasium" className="w-193px h-193px object-cover rounded" />
            <h3 className="font-poppins text-xl mt-4 font-semibold leading-5 text-center text-blue-900">Gymnasium</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2"><button className="bg-[#00357B] py-4 px-12 rounded-md text-sm font-semibold hover:scale-105 transition-all">EXTERIORS</button><button className="border border-[#00357B] text-[#00357B] py-4 px-12 rounded-md text-sm font-semibold hover:scale-105 transition-all">INTERIORS</button></div>
    </section>
  );
};

export default Features;
