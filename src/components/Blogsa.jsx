import React, { useState } from 'react';
import { Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';
export default function Hero() {

 const { ref: headingRef1, inView: showHeading1 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textRef1, inView: showText1 } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
      <section className="relative bg-uniscrape-gradient min-h-screen flex flex-col justify-center overflow-hidden items-center text-center px-4">
      {/* Glowing circle */}
      <div className="absolute top-[150px] -right-50  -translate-x-1/2 w-[100px] h-[300px]  md:w-[200px] md:h-[300px] bg-[#02A6FF] rounded-l-full blur-[70px] md:blur-[120px] opacity-40 z-0" />
      <div className="absolute top-[-150px] -left-10 -translate-x-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#02A6FF] rounded-full blur-[70px] md:blur-[120px] opacity-40 z-0" />
      <div className="flex max-w-xs md:max-w-5xl flex-col items-center text-center pt-50  md:pt-70">
          <div ref={headingRef1} className='max-w-xs  md:max-w-5xl w-11/12'>
         <Slide in={showHeading1} direction="up" timeout={800}> 
         <div className=''>
          <h1 className="text-3xl md:text-5xl font-medium  text-gray-500">
         Your hub for <span className="text-gradient font-bold">web scraping knowledge</span><br className='hidden md:block' /> 
        </h1></div> 
        </Slide> </div>
          <div ref={textRef1} className='max-w-lg'>
         <Slide in={showText1} direction="up" timeout={800}> 
         <div className=''><p className="mt-4 text-gray-500 text-md md:text-xl  mx-auto">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
        </p></div> 
        </Slide> </div>
      </div>
  
    <div className="w-full max-w-xs md:max-w-7xl flex flex-wrap justify-center gap-x-16 gap-y-18 md:p-6 z-10">
     
        <div className="bg-white rounded-xl flex flex-col items-start  max-w-xs shadow-md shadow-[#74CEFF]/20  p-6 shadow-lg transition">
          <div className="bg-gray-200  rounded-md mb-4"> <img src="/rectangle1770.png" alt="" /></div>
          <h3 className="text-lg text-start font-medium text-gray-900">
            Lorem ipsum dolor sit <span className="text-gradient font-semibold">amet adipiscing elit.</span>
          </h3>
          <p className="text-sm text-start text-gray-500 mt-4">
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
          </p>
          <a href="#" className="text-sm   text-gradient mt-10 inline-block underline">Read More</a>
        </div>
<div  className="bg-white rounded-xl flex flex-col items-start max-w-xs shadow-md shadow-[#74CEFF]/20 p-6 shadow-lg transition">
          <div className="bg-gray-200  rounded-md mb-4 "> <img src="/rectangle1770.png" alt="" /></div>
          <h3 className="text-lg text-start font-medium text-gray-900">
            Lorem ipsum dolor sit <span className="text-gradient font-semibold">amet adipiscing elit.</span>
          </h3>
          <p className="text-sm text-start text-gray-500 mt-4">
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
          </p>
          <a href="#" className="text-sm   text-gradient mt-10 inline-block underline">Read More</a>
        </div><div  className="bg-white rounded-xl flex flex-col items-start max-w-xs shadow-md shadow-[#74CEFF]/20 p-6 shadow-lg transition">
          <div className="bg-gray-200  rounded-md mb-4 "> <img src="/rectangle1770.png" alt="" /></div>
          <h3 className="text-lg text-start font-medium text-gray-900">
            Lorem ipsum dolor sit <span className="text-gradient font-semibold">amet adipiscing elit.</span>
          </h3>
          <p className="text-sm text-start text-gray-500 mt-4">
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
          </p>
          <a href="#" className="text-sm   text-gradient mt-10 inline-block underline">Read More</a>
        </div><div  className="bg-white rounded-xl flex flex-col items-start max-w-xs shadow-md shadow-[#74CEFF]/20 p-6 shadow-lg transition">
          <div className="bg-gray-200  rounded-md mb-4 "> <img src="/rectangle1770.png" alt="" /></div>
          <h3 className="text-lg text-start font-medium text-gray-900">
            Lorem ipsum dolor sit <span className="text-gradient font-semibold">amet adipiscing elit.</span>
          </h3>
          <p className="text-sm text-start text-gray-500 mt-4">
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
          </p>
          <a href="#" className="text-sm   text-gradient mt-10 inline-block underline">Read More</a>
        </div><div  className="bg-white rounded-xl flex flex-col items-start max-w-xs shadow-md shadow-[#74CEFF]/20 p-6 shadow-lg transition">
          <div className="bg-gray-200  rounded-md mb-4 "> <img src="/rectangle1770.png" alt="" /></div>
          <h3 className="text-lg text-start font-medium text-gray-900">
            Lorem ipsum dolor sit <span className="text-gradient font-semibold">amet adipiscing elit.</span>
          </h3>
          <p className="text-sm text-start text-gray-500 mt-4">
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
          </p>
          <a href="#" className="text-sm   text-gradient mt-10 inline-block underline">Read More</a>
        </div><div  className="bg-white rounded-xl flex flex-col items-start max-w-xs shadow-md shadow-[#74CEFF]/20 p-6 shadow-lg transition">
          <div className="bg-gray-200  rounded-md mb-4 "> <img src="/rectangle1770.png" alt="" /></div>
          <h3 className="text-lg text-start font-medium text-gray-900">
            Lorem ipsum dolor sit <span className="text-gradient font-semibold">amet adipiscing elit.</span>
          </h3>
          <p className="text-sm text-start text-gray-500 mt-4">
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
          </p>
          <a href="#" className="text-sm   text-gradient mt-10 inline-block underline">Read More</a>
        </div><div  className="bg-white rounded-xl flex flex-col items-start max-w-xs shadow-md shadow-[#74CEFF]/20 p-6 shadow-lg transition">
          <div className="bg-gray-200  rounded-md mb-4 "> <img src="/rectangle1770.png" alt="" /></div>
          <h3 className="text-lg text-start font-medium text-gray-900">
            Lorem ipsum dolor sit <span className="text-gradient font-semibold">amet adipiscing elit.</span>
          </h3>
          <p className="text-sm text-start text-gray-500 mt-4">
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
          </p>
          <a href="#" className="text-sm   text-gradient mt-10 inline-block underline">Read More</a>
        </div><div  className="bg-white rounded-xl flex flex-col items-start max-w-xs shadow-md shadow-[#74CEFF]/20 p-6 shadow-lg transition">
          <div className="bg-gray-200  rounded-md mb-4 "> <img src="/rectangle1770.png" alt="" /></div>
          <h3 className="text-lg text-start font-medium text-gray-900">
            Lorem ipsum dolor sit <span className="text-gradient font-semibold">amet adipiscing elit.</span>
          </h3>
          <p className="text-sm text-start text-gray-500 mt-4">
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
          </p>
          <a href="#" className="text-sm text-gradient mt-10 inline-block underline ">Read More</a>
        </div>
      <div  className="bg-white rounded-xl flex flex-col items-start max-w-xs shadow-md p-6 shadow-[#74CEFF]/20 shadow-lg transition">
          <div className="bg-gray-200  rounded-md mb-4 "> <img src="/rectangle1770.png" alt="" /></div>
          <h3 className="text-lg text-start font-medium text-gray-900">
            Lorem ipsum dolor sit <span className="text-gradient font-semibold">amet adipiscing elit.</span>
          </h3>
          <p className="text-sm text-start text-gray-500 mt-4">
            Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
          </p>
          <a href="#" className="text-sm  text-gradient mt-10 inline-block underline">Read More</a>
        </div>
     
    </div>





      



       



    </section>
  );
}
