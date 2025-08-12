import React, {useEffect , useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion, useMotionValue, useSpring } from "framer-motion";
 export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
const springX = useSpring(x, { stiffness: 30, damping: 20, mass: 1.5 });
const springY = useSpring(y, { stiffness: 30, damping: 20, mass: 1.5 });
  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768) return; // disable effect on mobile
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX / 5);
    y.set(offsetY / 5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
 const circles = [
    { src:"/Group 90.png", x: "0%" },
    { src:"/Group 91.png", x: "33%" },
    { src:"/Group 92.png", x: "66%" },
    { src:"/Group 93.png", x: "100%" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % circles.length);
    }, 600); // speed of switch
    return () => clearInterval(interval);
  }, [circles.length]);

  const { ref: headingRef1, inView: showHeading1 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textRef1, inView: showText1 } = useInView({ triggerOnce: true, threshold: 0.2 });

  const { ref: headingRef2, inView: showHeading2 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textRef2, inView: showText2 } = useInView({ triggerOnce: true, threshold: 0.2 });

  const { ref: headingRef3, inView: showHeading3 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textRef3, inView: showText3 } = useInView({ triggerOnce: true, threshold: 0.2 });

  const { ref: headingRef4, inView: showHeading4 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textRef4, inView: showText4 } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [expandedPanels, setExpandedPanels] = useState([]);
  const handleChange = (panel) => (event, isExpanded) => {
    if (isExpanded) {
      setExpandedPanels([...expandedPanels, panel]);
    } else {
      setExpandedPanels(expandedPanels.filter((p) => p !== panel));
    }
  };
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
    <section  className="relative bg-uniscrape-gradient min-h-screen flex flex-col justify-center overflow-hidden items-center text-center px-4">
      {/* Glowing circle */}
      <div className="absolute top-[150px] -right-50  -translate-x-1/2 w-[100px] h-[300px]  md:w-[200px] md:h-[300px] bg-[#02A6FF] rounded-l-full blur-[70px] md:blur-[120px] opacity-40 z-0" />
      <div className="absolute top-[-150px] -left-10 -translate-x-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#02A6FF] rounded-full blur-[70px] md:blur-[120px] opacity-40 z-0" />
      <div  className="flex flex-col items-center text-center pt-50  md:pt-70">
        
        <div ref={headingRef1} className='max-w-xs  md:max-w-5xl md:w-11/12'>
         <Slide in={showHeading1} direction="up" timeout={800}> 
         <div className=''>
        <h1 className="text-3xl md:text-5xl font-medium text-gray-600">
          Helping teams <span className="text-gradient font-bold">scrape the web </span>
          <br className='hidden md:block' /> 
    without getting blocked
        </h1>
        </div>
        </Slide>
        </div>

 <div ref={textRef1}>
        <Slide in={showText1} direction="up" timeout={800} > 
        <div className='max-w-xs md:max-w-lg'> <p className="mt-4 text-gray-500 text-xl  md:text-xl  mx-auto">
        UNICRAWL is a highly efficient web scraper using real Chrome browsers and high-quality proxies.
        </p> </div> 
        </Slide> </div>


        <button className="mt-6 w-42 primary-gradient text-sm text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Sign Up Today!
        </button>



        <div className="flex justify-center mt-20">
  <motion.div
      className="relative w-[310px] h-[195px] mx-auto cursor-pointer 
                 md:w-[900px] md:h-[500px]" // bigger on desktop
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Desktop stacked */}
      <img
        src="/Rectangle 5.png"
        className="absolute w-6/12 md:bottom-18 md:-left-35 md:z-30 
                   -bottom-1 left-3 z-30" // mobile different
      />
      <img
        src="/Rectangle 4.png"
        className="absolute w-2/12 md:top-20 md:-right-24 md:z-20 
                   -top-8 right-3 z-20" // moved down on mobile
      />
      <img
        src="/Rectangle 3.png"
        className="absolute w-full md:top-4 md:left-4 md:z-10 
                   top-0 left-0 z-10" // even lower on mobile
      />
    </motion.div>




          {/* <img src='/Group63.png' alt="UNICRAWL main" className="mt-8 md:mt-16 " /> */}
        </div>




      </div>

      <div  className="flex justify-center   flex-col items-center text-center pt-30 md:pt-50">
              <div className="absolute top-[1150px]  md:top-[1450px] -right-40 -translate-x-1/2 w-[90px] h-[300px] md:w-[200px] md:h-[300px] bg-[#02FFE6] rounded-l-full blur-[70px] md:blur-[120px] opacity-40 z-0" />
              <div className="absolute top-[900px] md:top-[1450px] -left-40 translate-x-1/2 w-[90px] h-[300px] md:w-[200px] md:h-[300px] bg-[#02FFE6] rounded-l-full blur-[70px] md:blur-[120px] opacity-40 z-0" />

         <div ref={headingRef2} className=''>
        <Slide in={showHeading2} direction="up" timeout={800}> 
          <div className=''>
        <h1 className="text-3xl md:text-5xl font-medium text-gray-600">
          Scale Data Collection <br /> with a <span className="text-gradient font-bold">Simple API</span></h1> </div> 
        </Slide>
</div>
       <div className="relative w-[230px]  h-[150px] md:w-[500px] md:h-[250px] mx-auto">
      {/* Static line */}
      <img
        src="/Vector2.png"
        alt="line"
        className="absolute top-1/2 left-0 w-full -translate-y-1/2"
      />

      {/* Animated circles */}
     {circles.map((circle, index) => (
        <motion.img
          key={index}
          src={circle.src}
          alt={`circle-${index}`}
          className="absolute w-10 h-10 md:w-24 md:h-24 -translate-x-1/2 -translate-y-1/2"
          style={{ left: circle.x, top: "50%" }}
          initial={{ opacity: 0.6, scale: 0.1 }}
          animate={
            index === activeIndex
              ? { opacity: 1, scale: 1.2 }
              : { opacity: 1, scale: 1.0 }
          }
          transition={{ duration: 0.4 }}
        />
      ))}
    </div>


         <div ref={textRef2} className='max-w-xs  md:max-w-7xl'>
 <Slide in={showText2} direction="up" timeout={800}> 
          <div className=''>
        <p className="text-center text-[20px] text-[#5E5E5E]   md:text-xl md:max-w-xl mx-auto">
          Easily grab data from any public website with our web scraping API,
          without worrying about  proxies,
          browsers, or CAPTCHA. Just request, and get results!
        </p>
</div> 
        </Slide></div>



     
        <div className="flex flex-col items-center w-full md:max-w-4xl gap-20 mt-20 md:mt-30">
          <div className="z-2 flex flex-col-reverse justify-between rounded-[25px] shadow-2xl shadow-[#02A6FF]/15 bg-white w-full max-w-xs md:max-w-7xl md:flex-row gap-10 p-6 md:p-10">
            <div className="flex flex-col items-start md:w-6/12">
              <h2 className="text-2xl  md:text-4xl font-medium text-start text-gray-600 mb-6">Scale Data Collection with a <span className="text-gradient">Simple API</span></h2>
              <p className="text-[#878787] text-start leading-snug text-sm max-w-md md:text-xl mb-6">Easily grab data from any public website with our web scraping API, without worrying about proxies, browsers, or CAPTCHA. Just request, and get results!</p>
              <button className="rounded-full primary-gradient w-52 mb-4 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-2 px-10 focus:outline-none focus:shadow-outline">Get a Quote</button>
            </div>
            <div className="bg-gray-100 rounded-lg w-full md:w-4/12 h-60  md:h-auto" />
          </div>
   <div className="absolute top-[1920px] md:top-[2500px] md:top-[2400px] -left-20 md:-left-40  translate-x-1/2 w-[150px] h-[150px] md:w-[200px] md:h-[300px] bg-[#02A6FF] rounded-l-full blur-[70px] md:blur-[120px] opacity-40 z-0" />

          <div className=" z-2 flex flex-col-reverse justify-between rounded-[25px]  shadow-2xl shadow-[#02A6FF]/15 bg-white w-full max-w-xs md:max-w-4xl md:flex-row-reverse gap-10 p-6 md:p-10">
            <div className="flex flex-col items-end ">
              <h2 className="text-2xl md:text-4xl font-medium text-end text-gray-600 mb-6">APIs Never Get <br className='md:block' /> <span className="text-gradient"> Blocked Again</span></h2>
              <p className="text-[#878787] text-end  leading-snug text-sm max-w-sm md:text-xl mb-6 ms-18">We run real Chrome browsers and utilize high-quality roaming proxies to ensure your request is  successful every time. JavaScript rendering is included automatically at no extra charge.</p>
              <button className="rounded-full primary-gradient w-52 mb-4 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-2 px-10 focus:outline-none focus:shadow-outline">Get a Quote</button>
            </div>
            <div className="bg-gray-100 rounded-lg w-full h-60 md:w-96 md:h-80" />
          </div>
          <div className="z-2 flex flex-col-reverse justify-between rounded-[25px]  shadow-2xl shadow-[#02A6FF]/15 bg-white w-full max-w-xs md:max-w-4xl md:flex-row gap-10 p-6 md:p-10">

            <div className="flex flex-col items-start ">
              <h2 className="text-2xl md:text-4xl text-start font-medium text-gray-600 mb-6">Get Localized Data <br className=' block' /> <span className="text-gradient"> with Geotargeting</span></h2>
              <p className="text-[#878787] text-start leading-snug  max-w-md md:text-xl mb-6">Scrape content from any specific country or region worldwide with our geotargeting feature. This  feature is very useful for international data, market research, or local SEO.</p>
              <button className="rounded-full primary-gradient w-52 mb-4 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-2 px-10 focus:outline-none focus:shadow-outline">Get a Quote</button>
            </div>
              <div className="bg-gray-100 rounded-lg w-full h-60 md:w-96 md:h-80" />

          </div>
          <div className="z-2 flex flex-col-reverse justify-between rounded-[25px]  shadow-2xl shadow-[#02A6FF]/15 bg-white w-full max-w-xs md:max-w-4xl md:flex-row-reverse gap-10 p-6 md:p-10">
            <div className="flex flex-col items-end ">
              <h2 className="text-2xl md:text-4xl text-end font-medium text-gray-600 mb-4">Only Pay for <br className=' block' /><span className="text-gradient">Successful Requests</span></h2>
              <p className="text-[#878787] text-end leading-snug  max-w-md md:text-xl mb-6">It is our policy that there is no charge for unsuccessful scraping. No hidden fees. In the annual  plan, your credits are protected for 12 months.</p>
              <button className="rounded-full primary-gradient w-52 mb-4 hover:from-blue-500 hover:to-blue-600 text-white font-medium py-2 px-10 focus:outline-none focus:shadow-outline">Get a Quote</button>
            </div>
                        <div className="bg-gray-100 rounded-lg w-full h-60 md:w-96 md:h-80" />

          </div>   <div className="md:hidden absolute top-[2715px] right-2 translate-x-1/2 w-[150px] h-[150px] bg-[#02FFE6] rounded-l-full blur-[70px] md:blur-[120px] opacity-40 z-0"/>

        </div>   <div className="absolute top-[3715px] md:top-[3450px] left-20 md:left-180 translate-x-1/2 w-[100px] h-[300px] md:w-[200px] md:h-[300px] bg-[#02A6FF] rounded-l-full blur-[70px] md:blur-[120px] opacity-60 z-0" />



      </div>
      <div className="flex max-w-xs md:max-w-5xl justify-center flex-col items-center pt-40  md:pt-70">
<div ref={headingRef3} className=''>
        <Slide in={showHeading3} direction="up" timeout={800}>  
             <div className=''>
        <h2 className="text-3xl md:text-5xl font-bold md:font-medium mb-7"><span className="text-gradient">Simple and Flexible API</span></h2></div> 
        </Slide></div>
        
           <div ref={textRef3} className='max-w-xs md:max-w-5xl md:w-8/12 '>
 <Slide in={showText3} direction="up" timeout={800}> 
          <div className='max-w-5xl'>
        <p className="text-[#5E5E5E] w-full md:text-xl mb-6">Our developer-first API is fast to integrate and easy to scale. It is compatible with Firecrawl-style  requests. Our API integrates quickly and scales easily, ensuring full compatibility with style  requests.</p>
</div> 
        </Slide></div>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 md:w-8/12">
    <button className="relative flex items-center px-6 py-2 rounded-full 
bg-gradient-to-r from-sky-400 to-blue-600  border border-white
text-white text-sm font-medium
before:content-[''] before:absolute before:inset-0 before:rounded-full 
before:bg-gradient-to-r before:from-sky-400 before:to-blue-600 
before:blur-xs before:opacity-90 before:-z-10
hover:before:blur-xs hover:before:opacity-90 transition-all">
  Parse HTML to Markdown
</button>
  <button className="relative flex items-center px-6 py-2 rounded-full 
bg-gradient-to-r from-sky-400 to-blue-600  border border-white
text-white text-sm font-medium
before:content-[''] before:absolute before:inset-0 before:rounded-full 
before:bg-gradient-to-r before:from-sky-400 before:to-blue-600 
before:blur-xs before:opacity-90 before:-z-10
hover:before:blur-xs hover:before:opacity-90 transition-all">            Extract clean, structured main content
          </button>
  <button className="relative flex items-center px-6 py-2 rounded-full 
bg-gradient-to-r from-sky-400 to-blue-600  border border-white
text-white text-sm font-medium
before:content-[''] before:absolute before:inset-0 before:rounded-full 
before:bg-gradient-to-r before:from-sky-400 before:to-blue-600 
before:blur-xs before:opacity-90 before:-z-10
hover:before:blur-xs hover:before:opacity-90 transition-all">            SDKs in TypeScript, Python, and Golang
          </button>
  <button className="relative flex items-center px-6 py-2 rounded-full 
bg-gradient-to-r from-sky-400 to-blue-600  border border-white
text-white text-sm font-medium
before:content-[''] before:absolute before:inset-0 before:rounded-full 
before:bg-gradient-to-r before:from-sky-400 before:to-blue-600 
before:blur-xs before:opacity-90 before:-z-10
hover:before:blur-xs hover:before:opacity-90 transition-all">            Optional PDF extraction
          </button>
        </div>
      </div>

      <div className=" relative flex w-full max-w-xs md:max-w-5xl md:w-9/12 justify-center flex-col items-center pt-40  md:pt-60  ">
        <div className="absolute top-30 md:top-90 w-[1990px] h-[1150px] md:h-[1000px] team-gradient rounded-full blur-[40px] opacity-100 z-0" />
       <div ref={headingRef4} className=''>
        <Slide in={showHeading4} direction="up" timeout={800}>  
             <div className=''>
        <h2 className="text-3xl md:text-5xl text-gray-600 font-medium md:mb-2 ">Built to Scale</h2>
        <h2 className="text-3xl md:text-5xl text-gray-600 font-medium mb-14 md:mb-30">with <span className="text-gradient font-bold">Your Team</span></h2>
        </div> 
        </Slide></div>
        <div className="relative flex w-full  md:w-11/12 md:justify-center items-center flex-col md:flex-row md:items-end z-2">
          <div className="bg-white/24 flex w-10/12 md:w-full max-w-7xl bg-white/20 border items-center shadow shadow-md border-white/50 p-5 md:p-8 rounded-xl flex-col mb-4 md:mb-10" >
            <h2 className="text-xl  md:w-full md:text-3xl text-center md:text-start font-medium text-white mb-5 md:mb-7">Save Developer Time with Automation</h2>
            <p className="text-white w-11/12 text-center md:text-start font-light text-sm  max-w-sm md:text-xl mb-6">Unicrawl eliminates hours of manual scraping logic. No more writing custom CAPTCHA<br className='md:hidden block' /> solvers  or proxy managers —we handle it all in the background.</p>
          </div>
          <img src='/Group81.png' alt="UNICRAWL main" className="w-10/12  md:w-6/12" />

        </div>
        <div className="bg-white/10 relative flex w-10/12 md:w-full  md:max-w-3xl bg-white/20 border border-white px-4 py-6 md:px-16 md:py-10 rounded-xl flex-col z-2" >
          <h2 className="text-xl md:text-3xl text-center font-medium text-white mb-4">Enterprise-Level Capabilities,<br className='hidden md:block' /> Without the Enterprise Price</h2>
          <p className="text-white leading-5  md:leading-8 md:text-center md:font-light tracking-wide text-sm md:text-[18px] mb-1">Handle millions of requests  asynchronously. <br className='hidden md:block' />
Use up to 100 <br className='md:hidden block' /> concurrent browsers.<br className='hidden md:block' />
           Get fast <br className='md:hidden block' /> responses, high success rates, <br className='md:hidden block' />and near-instant onboarding.<br />
          Live chat and dedicated support <br className='md:hidden block' /> on Scale plans.</p>
        </div>


      </div>
      <div className="relative flex w-full max-w-xs md:max-w-5xl md:w-9/12  justify-center flex-col items-center pt-50 ">
        <h2 className="text-3xl md:text-5xl font-semibold mb-7 text-gradient">Frequently Asked Questions</h2>
        <div className="relative z-2 max-w-5xl w-full mt-10 md:mt-20">
          <Accordion className='rounded-full shadow-2xl mb-6' expanded={expandedPanels.includes('panel1')} onChange={handleChange('panel1')}>
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
      color: '#6a7282',
      lineHeight:1  // smaller text on mobile
    }} className="text-start text-[#5E5E5E]">Can Unicrawl scrape data <br className='md:hidden block' /> from every website?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{  fontSize: { xs: '12px', sm: '16px' }, }}    className="text-start text-[#878787] " >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className='shadow-2xl mb-6' expanded={expandedPanels.includes('panel2')} onChange={handleChange('panel2')}>
                    <AccordionSummary 
                     sx={{
    minHeight: '80px', // default is 48px
    '& .MuiAccordionSummary-content': {
      margin: 0, // remove default extra margin
    },
  }} className="rounded-full bg-white px-4 py-2" expandIcon={<GradientAddIcon />}>
              <Typography   sx={{
      fontSize: { xs: '16px', sm: '18px' },
      color: '#6a7282',
      lineHeight:1  // smaller text on mobile
    }}
              className="text-start text-[#5E5E5E]">Will my credit be deducted <br className='md:hidden block' /> if my request is<br className='md:hidden block' /> unsuccessful?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{  fontSize: { xs: '14px', md: '16px' }, }}  className="text-start text-[#878787]" >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='shadow-2xl mb-6' expanded={expandedPanels.includes('panel3')} onChange={handleChange('panel3')}>
                    <AccordionSummary 
                     sx={{
    minHeight: '80px', // default is 48px
    '& .MuiAccordionSummary-content': {
      margin: 0, // remove default extra margin
    },
  }} className="rounded-full bg-white px-4 py-2" expandIcon={<GradientAddIcon />}>
             <Typography   sx={{
      fontSize: { xs: '16px', sm: '18px' },
      color: '#6a7282',
      lineHeight:1  // smaller text on mobile
    }} className="text-start text-[#5E5E5E]">Can I also get country or<br className='md:hidden block' /> city-specific data?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{  fontSize: { xs: '12px', sm: '16px' }, }}    className="text-start text-[#878787]" >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='shadow-2xl mb-6' expanded={expandedPanels.includes('panel4')} onChange={handleChange('panel4')}>
                    <AccordionSummary 
                     sx={{
    minHeight: '80px', // default is 48px
    '& .MuiAccordionSummary-content': {
      margin: 0, // remove default extra margin
    },
  }} className="rounded-full bg-white px-4 py-2" expandIcon={<GradientAddIcon />}>
             <Typography   sx={{
      fontSize: { xs: '16px', sm: '18px' },
      color: '#6a7282',
      lineHeight:1  // smaller text on mobile
    }} className="text-start text-[#5E5E5E]">Is the API complicated to <br className='md:hidden block' /> use?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{  fontSize: { xs: '12px', sm: '16px' }, }}    className="text-start text-[#878787]" >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='shadow-2xl mb-6' expanded={expandedPanels.includes('panel5')} onChange={handleChange('panel5')}>
                    <AccordionSummary 
                     sx={{
    minHeight: '80px', // default is 48px
    '& .MuiAccordionSummary-content': {
      margin: 0, // remove default extra margin
    },
  }} className="rounded-full bg-white px-4 py-2" expandIcon={<GradientAddIcon />}>
                    <Typography   sx={{
      fontSize: { xs: '16px', sm: '18px' },
      color: '#6a7282', 
      lineHeight:1 // smaller text on mobile
    }} className="text-start text-[#5E5E5E]">Can I convert HTML to <br className='md:hidden block' /> Markdown or PDF?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{  fontSize: { xs: '12px', sm: '16px' }, }}    className="text-start text-[#878787]" >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='shadow-2xl mb-6' expanded={expandedPanels.includes('panel6')} onChange={handleChange('panel6')}>
                    <AccordionSummary 
                     sx={{
    minHeight: '80px', // default is 48px
    '& .MuiAccordionSummary-content': {
      margin: 0, // remove default extra margin
    },
  }} className="rounded-full bg-white px-4 py-2" expandIcon={<GradientAddIcon />}>
                      <Typography   sx={{
      fontSize: { xs: '16px', sm: '18px' },
      color: '#6a7282', 
      lineHeight:1 // smaller text on mobile
    }} className="text-start text-[#5E5E5E]">How long do credits<br className='md:hidden block' /> last on Unicrawl?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{  fontSize: { xs: '12px', sm: '16px' }, }}    className="text-start text-[#878787]" >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className='shadow-2xl mb-6' expanded={expandedPanels.includes('panel7')} onChange={handleChange('panel7')}>
                    <AccordionSummary 
                     sx={{
    minHeight: '80px', // default is 48px
    '& .MuiAccordionSummary-content': {
      margin: 0, // remove default extra margin
    },
  }} className="rounded-full bg-white px-4 py-2" expandIcon={<GradientAddIcon />}>
                      <Typography   sx={{
      fontSize: { xs: '16px', sm: '18px' },
      color: '#6a7282',
      lineHeight:1  // smaller text on mobile
    }}  className="text-start text-[#5E5E5E]">Can I use Unicrawl <br className='md:hidden block' /> without the SDK?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{  fontSize: { xs: '12px', sm: '16px' }, }}    className="text-start text-[#878787]" >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='shadow-2xl mb-6' expanded={expandedPanels.includes('panel8')} onChange={handleChange('panel8')}>
                    <AccordionSummary 
                     sx={{
    minHeight: '80px', // default is 48px
    '& .MuiAccordionSummary-content': {
      margin: 0, // remove default extra margin
    },
  }} className="rounded-full bg-white px-4 py-2" expandIcon={<GradientAddIcon />}>
                      <Typography   sx={{
      fontSize: { xs: '16px', sm: '18px' },
      color: '#6a7282',
      lineHeight:1  // smaller text on mobile
    }} className="text-start text-[#5E5E5E]">Does Unicrawl provide <br className='md:hidden block' /> enterprise-level <br className='md:hidden block' /> customer support?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{  fontSize: { xs: '12px', sm: '16px' }, }}    className="text-start text-[#878787]" >
                This is the content of Accordion 1.
              </Typography>
            </AccordionDetails>
          </Accordion>



        </div>

      </div>

    </section>
  );
}
