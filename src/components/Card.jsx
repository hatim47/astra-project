import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';
 export default function Hero() {




    const { ref: headingRef1, inView: showHeading1 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: textRef1, inView: showText1 } = useInView({ triggerOnce: true, threshold: 0.2 });
  
    // Second section
    const { ref: headingRef2, inView: showHeading2 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: textRef2, inView: showText2 } = useInView({ triggerOnce: true, threshold: 0.2 });
  
      const { ref: headingRef3, inView: showHeading3 } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: textRef3, inView: showText3 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [expandedPanels, setExpandedPanels] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    if (isExpanded) {
      setExpandedPanels([...expandedPanels, panel]);
    } else {
      setExpandedPanels(expandedPanels.filter((p) => p !== panel));
    }
  };
  const [active, setActive] = useState('monthly');
const CheckIcon = ({ color = "text-blue-500", circleColor = "#E0F2FE" }) => (
  <svg className={` w-4 h-4  mr-2 ${color}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Circle background */}
    <circle cx="10" cy="10" r="10" fill={circleColor} />
    
    {/* Check mark */}
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 
         4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 
         001.414 0l8-8a1 1 0 000-1.414z"
    />
  </svg>
);
  const GradientAddIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="url(#gradient1)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#02A6FF" />
        <stop offset="100%" stopColor="#3957DF" />
      </linearGradient>
    </defs>
    <path d="M13 11H19V13H13V19H11V13H5V11H11V5H13V11Z" />
    <circle cx="12" cy="12" r="10"  stroke="url(#gradient1)" fill="none" />
  </svg>
);
  return (
    <section className="relative bg-uniscrape-gradient min-h-screen flex flex-col justify-center overflow-hidden items-center text-center px-4">
      {/* Glowing circle */}
      <div className="absolute top-[150px] -right-50 -translate-x-1/2 w-[100px] h-[300px] md:w-[200px] md:h-[300px] bg-[#02A6FF] rounded-l-full blur-[70px] md:blur-[120px] opacity-40 z-0" />
      <div className="absolute top-[-150px] -left-10 -translate-x-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#02A6FF] rounded-full blur-[70px] md:blur-[120px] opacity-40 z-0" />
      <div className="max-w-xs md:max-w-5xl flex flex-col items-center text-center pt-50 md:pt-70">
         <div ref={headingRef1} className='max-w-xs  md:max-w-5xl md:w-11/12'>
                 <Slide in={showHeading1} direction="up" timeout={800}> 
                 <div className=''><h1 className="text-3xl md:text-5xl font-medium  text-gray-600">
          Only pay for successful request. <br className='hidden md:block' /><span className="text-gradient font-bold">No hidden fees.</span> 
        </h1></div>
                </Slide>
                </div>
        <div ref={textRef1}>
                <Slide in={showText1} direction="up" timeout={800} > 
                <div className='max-w-xs md:max-w-lg'> <p className="mt-4 text-gray-600 text-md md:text-xl  mx-auto">
         No charges for failed scrapes. Credits roll over for up to 12 months when billed annually.
        </p>  </div> 
                </Slide> </div>
       <div className="flex w-70 justify-between items-center py-2 px-3 bg-blue-50 border border-sky-500/70 rounded-full my-8 ">
      <button
        className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200
          ${active === 'monthly'
            ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white'
            : 'text-indigo-700'
          }`}
        onClick={() => setActive('monthly')}
      >
        Monthly
      </button>
      <button
        className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200
          ${active === 'annually'
            ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white'
            : 'text-indigo-700'
          }`}
        onClick={() => setActive('annually')}
      >
        Annually
      </button>
    </div>

       <div className="w-full max-w-xs md:max-w-screen-2xl flex flex-col md:flex-row justify-center pt-10 md:pt-16 items-stretch gap-6  md:p-8 bg-white">

  <div className="flex-1 max-w-sm md:max-w-lg bg-white rounded-4xl shadow-xl shadow-[#74CEFF]/20 p-6 text-gray-800">
    <h3 className="text-sm text-gray-600 text-start my-2">Starter</h3>
       <div className="flex  text-start text-gray-800 my-4">
  <span className="text-4xl text-gray-600 font-bold">$59</span>
<span className="w-[2px] h-9 bg-gray-900 mx-2"></span> <span className="text-lg font-medium text-gray-500 pt-3 "> Month</span></div>
    <button className="w-full py-2 my-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium">
      Get Started
    </button>
    <p className="text-sm my-4 text-start">Ideal for developers or small projects.</p>
    <ul className="space-y-3  text-xs md:text-sm font-light pt-4 mb-10 text-gray-400">
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> 100,000 credits/month</li>
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> 10 concurrent browsers</li>
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> All credits upfront when billed annually</li>
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> Geotargeting included</li>
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> JavaScript rendering by default</li>
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> No charges for failed requests</li>
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> SDKs in TypeScript, Python, Golang</li>
    </ul>
  </div>

 
  <div className="flex-1 max-w-sm bg-gradient-to-b from-sky-500 to-indigo-500 text-white rounded-4xl shadow-xl shadow-[#74CEFF]/30 p-6">
    <h3 className="text-sm text-start my-2">Pro</h3>
   <div className="flex items-center text-start text-white my-4">
  <span className="text-4xl font-bold">$249</span> <span className="w-[2px] h-9 bg-white mx-2"></span><span className="text-lg font-medium text-white/90 pt-3"> Month</span></div>
    <button className="w-full py-2 my-4 rounded-full bg-white text-sky-600 font-semibold">
      Get Started
    </button>
    <p className="text-sm my-4 text-start w-11/12">Perfect for growing teams and frequent scraping needs.</p>
    <ul className="space-y-2 text-xs md:text-sm font-light pt-4 mb-10">
      <li className="flex items-center"><CheckIcon color="text-blue-500" circleColor="#fff" /> 500,000 credits/month</li>
      <li className="flex items-center"><CheckIcon color="text-blue-500" circleColor="#fff" /> 50 concurrent browsers</li>
      <li className="flex items-center"><CheckIcon color="text-blue-500" circleColor="#fff" /> All credits upfront when billed annually</li>
      <li className="flex items-center"><CheckIcon color="text-blue-500" circleColor="#fff" /> High-priority support</li>
      <li className="flex items-center"><CheckIcon color="text-blue-500" circleColor="#fff" /> Credits roll over for 12 months</li>
      <li className="flex items-center"><CheckIcon color="text-blue-500" circleColor="#fff" />Advanced content extraction (PDF,</li>
    <li className="flex items-center ps-6">Markdown, Main content)</li>
    </ul>
  </div>


  <div className="flex-1 max-w-sm  bg-white border border-gray-200 rounded-4xl shadow-xl shadow-[#74CEFF]/20 p-4 text-gray-800">
    <h3 className="text-sm text-start text-gray-600 my-2">Scale</h3>
    <div className="flex items-center text-start text-gray-800 my-4">
  <span className="text-4xl text-gray-600 font-bold">$999</span>
<span className="w-[2px] h-9 bg-gray-900 mx-2"></span>
<span className="text-lg font-medium text-gray-600 pt-3">Month</span>
</div>
    <button className="w-full py-2 my-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium">
      Get Started
    </button>
    <p className="text-sm my-4 text-start">For data-heavy teams and enterprise-scale extraction.</p>
    <ul className="space-y-3 text-xs md:text-sm font-light pt-4 mb-10 text-gray-400">
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> 2.25 million credits/month</li>
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> 100 concurrent browsers</li>
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> Dedicated account manager</li>
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> Live support</li>
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> Custom usage reporting</li>
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> Async scraping support</li>
      <li className="flex items-center"><CheckIcon color="text-white" circleColor="#3C54DF" /> Credits roll over for 12 months</li>
    </ul>
  </div>
</div>
      </div>

      <div className="flex w-full max-w-xs  md:max-w-7xl justify-center flex-col items-center text-center pt-30 md:pt-40">
        <div ref={headingRef2} className=''>
               <Slide in={showHeading2} direction="up" timeout={800}> 
                 <div className=''> <h1 className="text-3xl md:text-5xl font-medium text-gray-600 mb-10"><span className="text-gradient font-medium">Feature Comparison Table</span></h1></div> 
        </Slide> </div>
        


<div className="relative md:w-full  md:max-w-5xl mx-auto ">
                <div className="absolute  top-[250px]   md:top-[150px]  left-10  md:-left-50  -translate-x-1/2 w-[50px] h-[300px]  md:w-[400px] md:h-[500px] bg-[#02FFE6] rounded-l-full blur-[70px] md:blur-[220px] opacity-40 z-0" />
        <div className="relative w-full overflow-hidden z-2">

            <div className="grid mb-9 grid-cols-[2fr_1fr_1fr_1fr] bg-white rounded-full  shadow-xl shadow-gray-100 ">
                <div className="md:py-6 py-4 px-6 md:px-12 text-lg text-start font-semibold text-gray-500">Feature</div>
                <div className="px-0 py-4 md:py-6  md:px-6 font-semibold text-lg text-gray-500 text-center">Starter</div>
                <div className="px-0 py-4 md:py-6 md:px-6 font-semibold text-lg text-gray-500 text-center">Pro</div>
                <div className="px-6 py-4 md:py-6 md:px-6  font-semibold text-lg text-gray-500 text-center">Scale</div>
            </div>
            
           
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  ">
                <div className="p-2 text-nowarp md:px-12 text-start text-lg  text-gray-500 font-medium">Monthly Credits</div>
                <div className="p-2 text-center text-gray-400">100,000</div>
                <div className="p-2 text-center text-gray-400">500,000</div>
                <div className="p-2 text-center text-gray-400">2.25M</div>
            </div>
            
          
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  ">
                <div className="p-2 md:px-12 text-start text-lg  text-gray-500  font-medium ">Concurrent Browsers</div>
                <div className="p-2 text-center text-gray-400">10</div>
                <div className="p-2 text-center text-gray-400">50</div>
                <div className="p-2 text-center text-gray-400">100</div>
            </div>
            
           
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  ">
                <div className="p-2 md:px-12 text-start text-lg  text-gray-500  font-medium">JavaScript Rendering</div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500  mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
            
          
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  ">
                <div className="p-2 md:px-12 text-start text-lg  text-gray-500  font-medium">PDF Extraction</div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
            
           
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  ">
                <div className="p-2 md:px-12 text-start text-lg  text-gray-500  font-medium">Geotargeting</div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
            
           
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  ">
                <div className="p-2 text-nowarp md:px-12 text-start text-lg  text-gray-500  font-medium">Credit Rollover (Annual Plans)</div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
            
          
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  ">
                <div className="p-2 md:px-12 text-start text-lg  text-gray-500  font-medium">Failed Requests Billed?</div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
            
          
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  ">
                <div className="p-2 md:px-12 text-start text-lg  text-gray-500  font-medium">SDKs (TS / Python / Go)</div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
            
           
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  ">
                <div className="p-2 md:px-12 text-start text-lg  text-gray-500  font-medium">Dedicated Manager / Live Chat</div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
           
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] ">
                <div className="p-2 md:px-12 text-start text-lg  text-gray-500  font-medium">Usage Reports</div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="p-2 text-center">
                    <svg className="w-6 h-6 text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>

      
       


      </div>


      
      <div className="relative flex w-full max-w-xs md:max-w-5xl md:w-9/12  justify-center flex-col items-center pt-30 md:pt-40  ">
        <h2 className="text-3xl md:text-5xl font-semibold mb-0 text-gradient">Frequently Asked Questions</h2>
        <div className="relative z-2 max-w-5xl w-full mt-20 md:mt-30">
          <Accordion className='shadow-2xl mb-4' expanded={expandedPanels.includes('panel1')} onChange={handleChange('panel1')}>
            <AccordionSummary 
                      sx={{
    minHeight: '80px', // default is 48px
    '& .MuiAccordionSummary-content': {
      margin: 0, // remove default extra margin
    },
  }}
            className="rounded-full bg-white px-4 py-2" expandIcon={
      <GradientAddIcon        />
    }
  >
              <Typography   sx={{
      fontSize: { xs: '16px', sm: '18px' },
      color: '#6a7282',  // smaller text on mobile
    }}
              className="text-start">Is the Unicrawl API available for free?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{  fontSize: { xs: '12px', sm: '16px' }, }}    className="text-start text-[#878787]" >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className='shadow-2xl mb-4' expanded={expandedPanels.includes('panel2')} onChange={handleChange('panel2')}>
            <AccordionSummary
                      sx={{
    minHeight: '80px', // default is 48px
    '& .MuiAccordionSummary-content': {
      margin: 0, // remove default extra margin
    },
  }}
            className="rounded-full bg-white px-4 py-2" expandIcon={<GradientAddIcon />}>
              <Typography   sx={{
      fontSize: { xs: '16px', sm: '18px' },
      color: '#6a7282',  // smaller text on mobile
    }} className="text-start">Can I do scraping without coding?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography sx={{  fontSize: { xs: '12px', sm: '16px' }, }}   className="text-start text-[#878787]" >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='shadow-2xl mb-4' expanded={expandedPanels.includes('panel3')} onChange={handleChange('panel3')}>
            <AccordionSummary
                      sx={{
    minHeight: '80px', // default is 48px
    '& .MuiAccordionSummary-content': {
      margin: 0, // remove default extra margin
    },
  }}
             className="rounded-full bg-white px-4 py-2" expandIcon={<GradientAddIcon />}>
               <Typography   sx={{
      fontSize: { xs: '16px', sm: '18px' },
      color: '#6a7282',
      lineHeight:1  // smaller text on mobile
    }} className="text-start">Is PDF and main content <br className='md:hidden block' /> extraction included in<br className='md:hidden block' /> every plan?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography sx={{  fontSize: { xs: '12px', sm: '16px' }, }}    className="text-start   text-[#878787]" >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='shadow-2xl mb-4' expanded={expandedPanels.includes('panel4')} onChange={handleChange('panel4')}>
            <AccordionSummary
                      sx={{
    minHeight: '80px', // default is 48px
    '& .MuiAccordionSummary-content': {
      margin: 0, // remove default extra margin
    },
  }}
             className="rounded-full bg-white px-4 py-2" expandIcon={<GradientAddIcon />}>
              <Typography   sx={{
      fontSize: { xs: '16px', sm: '18px' },
      color: '#6a7282',  // smaller text on mobile
    }} className="text-start">Can I send bulk requests?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography sx={{  fontSize: { xs: '12px', sm: '16px' }, }}    className="text-start      text-[#878787]" >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion 
           className='rounded-full bg-white shadow-2xl mb-4' expanded={expandedPanels.includes('panel5')} onChange={handleChange('panel5')}>
            <AccordionSummary
              sx={{
    minHeight: '80px', // default is 48px
    '& .MuiAccordionSummary-content': {
      margin: 0, // remove default extra margin
    },
  }}
             className="rounded-full  px-4 my-8" expandIcon={<GradientAddIcon />}>
               <Typography   sx={{
      fontSize: { xs: '16px', sm: '18px' },
      color: '#6a7282',  // smaller text on mobile
    }} className="text-start my-10"> Is live support available?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{  fontSize: { xs: '12px', sm: '16px' }, }}   className="text-start text-[#878787]" >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>
        

      



        </div>

      </div>

    </section>
  );
}
