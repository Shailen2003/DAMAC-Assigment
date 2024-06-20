import React from 'react';

const Banner = () => {
  return (
    <section className="bg-cover bg-center text-white pb-96" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
      <div className="relative z-20 max-w-6xl mx-auto px-4">
      <nav>
        <div className="max-w-6xl mx-auto flex justify-between items-center py-8 sm:py-12 bg-transparent ">
          <a href="/">
          <img src="/images/logo.jpg" alt="Logo image" className="relative w-105.84 h-20.86 top-0 left-161 gap-0" />
          </a>
          <button className="uppercase text-sm font-semibold text border-2 border-[#17ABFF] rounded-md px-6 sm:px-10 py-3 backdrop-blur hover:bg-[#17ABFF]/50 hover:text-white transition">Enquire Now</button>
          </div>
          </nav>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mt-20">
            <div>
              <h1 className="text-4xl  lg:text-5xl font-semibold font-oswald">HARBOUR LIGHTS DE
                <span className="text-[#17ABFF]">
                  GRESOGONO
                </span>
              </h1>
              <p className="text-[16px] sm:text-xl md:text-2xl font-medium my-4">1, 2 &amp; 3 Bedrooms Seaside Apartments in Dubai Maritime City
              </p>
            </div>
            <ul className="mt-12">
              <li className="p-3 bg-slate-900/65 my-2 max-w-96 border-l-4 border-[#17ABFF]">Rental Returns of
                <strong> UPTO 11%**</strong>
              </li>
              <li className="p-3 bg-slate-900/65 my-2 max-w-96 border-l-4 border-[#17ABFF]">Capital Appreciation of <strong> UPTO 32%**</strong>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-transparent flex justify-center md:justify-end md:m-0 m-6 mb-8 md:mb-0 items-end">
            <div className="max-w-[305px] bg-[#000]/10 backdrop-blur-md  shadow-2xl border  pt-10 rounded-xl  ">
              <div className="px-6">
                <p className="font-light tracking-wide">PRICING STARTS FROM</p>
                <p className="text-5xl font-medium my-1 font-oswald">$ 425,000</p>
                <p className="text-2xl  my-2 font-oswald">AED 1.3 Million</p>
                <button className="bg-[#17ABFF] w-full my-4 mb-8 py-3 px-10 rounded-md text-sm font-medium hover:bg-[#17ABFF]/60 border border-[#17ABFF] hover:border-[#fff] transition">GET A PRESENTATION
                </button>
              </div>
              <p className="px-6 py-4 border-t-2 border-[rgba(0,0,0,0.3)] text-[#98C5E8] text-[13px]">Get an Expert's Presentation of Real Estate in Dubai for Life and investment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;