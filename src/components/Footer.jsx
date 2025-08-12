import CopyrightIcon from '@mui/icons-material/Copyright';
import { Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';

export default function Footer({ currentPath }) {

    const { ref: imgRef1, inView: showImg1 } = useInView({ triggerOnce: true, threshold: 0.2 });
        const { ref: imgRef2, inView: showImg2 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const navLinkss = [
    { label: 'Home', href: '/' },
 { label: 'Pricing',href:'https://unicrawl.vercel.app/price/'},
    { label: 'Blogs',href:'https://unicrawl.vercel.app/blog/'},
    { label: 'Sign Up', href: '#' },
  ];

  const isActive = (href) => href === currentPath;



  const { ref: headingRef1, inView: showHeading1 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textRef1, inView: showText1 } = useInView({ triggerOnce: true, threshold: 0.2 });



  return (
    <div className="relative w-full flex-col flex items-center justify-center mx-auto mt-16 md:mt-50">
    <div className="relative  w-full  ">
        <div className="absolute bottom-90 bg-gradient-to-b to-[#02A6FF]/23  from-[#ffffff00] w-full h-[700px] z-0"> </div>
      {/* Large faded background text */}
<div ref={imgRef2} className="relative flex justify-center w-full z-2">
  
        <Slide in={showImg2} direction="up" timeout={800}>  
           <img src="/Logo.png"    className="w-full select-none pointer-events-none" />  
            </Slide>
        
  </div>

      {/* Foreground panel */}
      <div className="relative   overflow-hidden flex flex-col md:flex-row gap-8  z-2 bg-[#02A6FF] text-white px-16 py-8 rounded-none shadow-lg  md:justify-around items-center">
    <div className="flex flex-col justify-center gap-1 md:ms-35 pt-3">
        <div ref={headingRef1} className=''>
        <Slide in={showHeading1} direction="up" timeout={800}> 
          <div className=''> <h2 className="text-xl md:text-3xl font-medium text-center md:text-start mb-1">
          Ready to Improve your workflow?
        </h2></div> 
        </Slide> </div>


        <div ref={textRef1} className=''>
        <Slide in={showText1} direction="up" timeout={800}> 
          <div className=''> <p className="text-xs md:text-base w-11/12 md:w-full text-white md:max-w-xl mx-auto text-center md:text-start">
          Unicrawl is providing the best deal! The smartest teams are already streamlining their workflow with the best solution available.
        </p> </div> 
        </Slide> </div>         
    </div>
     
                 <img src="/Group4.png" className="absolute w-8/12 md:w-4/12 select-none pointer-events-none z-0 -bottom-34 md:-bottom-74 md:-right-20 "/>  
        
        {/* Buttons */}
        <div className="relative flex flex-col sm:flex-row items-center gap-4 md:me-35">
          <button className="rounded-full  md:w-52 primary-gradient border-1 border-white hover:from-blue-500 hover:to-blue-600 text-white font-medium py-1 md:py-2 px-8 focus:outline-none focus:shadow-outline">
            Get a Quote
          </button>
          <button className="rounded-full md:w-52 primary-gradient border-1 border-white hover:from-blue-500 hover:to-blue-600 text-white font-medium py-1 md:py-2 px-8 focus:outline-none focus:shadow-outline">
            Sign Up Today!
          </button>
        </div>
      </div>
    <div className="flex flex-col z-4 bg-[linear-gradient(180deg,_#3C54DF_45.37%,_#202E79_176.23%)] text-white px-8 pt-22 pb-14 gap-8 rounded-none shadow-lg md:justify-center  items-center">
      
      <h2 className="text-white font-extrabold text-3xl  md:text-6xl"> UNICRAWL </h2>

      <ul className="flex flex-col md:flex-row items-center justify-center space-x-10 gap-3 md:gap-6">
       
        {navLinkss.map(({ label, href }) => (
          <li key={`footer-${href}`} className="m-0">
            <a
              href={href}
              className={`text-white font-medium hover:text-blue-00 transition duration-200 ${isActive(href) ? 'text-blue-200' : ''}`}
            >
              {label}
            </a>
           
          </li>
        ))}
      </ul>
      </div>  
    </div>
<div className="relative w-full flex justify-center items-center py-6 bg-[#3C54DF]">
  
<p className="text-[#C5CEFF] text-sm"><CopyrightIcon sx={{ fontSize: 17 }}/>  2025 UNICRAWL. All Rights Reserved</p>
</div>

    </div>
  );
}
