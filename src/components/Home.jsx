
import Carousel from "./Carousel";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegCheckCircle, FaPlayCircle } from 'react-icons/fa';
import { Typewriter } from "react-simple-typewriter";
export const Home = () => {
  return (
    <div name='home' className='mt-28 w-full h-full  flex-col justify-between' 
    style={{
          backgroundImage:
             "url('https://learnwithsumit.com/_next/static/media/pattern.afd33a3d.svg')",
        }}
    >

    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
        <h1 className="text-center md:text-left font-semibold text-[#0f172a]">
          অনলাইন অকশনে অংশগ্রহণ করতে{" "}
          <span className="text-[#6d28d9] ">রেজিস্ট্রেশন</span>{" "}
          <Typewriter
            words={["করুন"]}
            loop={5}
            cursor
            cursorStyle=" ।"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />{" "}
        </h1>
        <div className="mt-10 flex justify-center items-center">
      <button className="bg-[#0f172a] rounded-full text-white flex items-center space-x-2 px-4 py-2 mr-2">
        <FaRegCheckCircle size={20} className="mr-3" />
        রেজিস্ট্রেশন
      </button>
      <button className="bg-[#6d28d9] rounded-full text-white flex items-center space-x-2 px-4 py-2">
        <FaPlayCircle size={20}  className="mr-3" />
        ভিডিও টিউটোরিয়াল
      </button>
    </div>

        <p className="flex flex-row text-[#748397] text-center font-bold md:text-left mt-4">
        <AiOutlineInfoCircle className='mr-2' size={20} color="gray" />
           অনলাইন রেজিস্ট্রেশন এখনো চালু হয়নি ,আপনি রেজিস্ট্রেশন করতে চাইলে
          স্ব-শরীরে এসোসিয়েশন থেকে সদস্য হতে হবে{" "}
        </p>
        </div>
        <div>
        <div className="w-[350px] md:w-[500px] mx-auto  justify-center items-center">
      <Carousel/>
      </div>
        </div>
       
    </div>
</div>
    
    // <div
    //   className=" justify-center items-center h-[730px] relative  w-full grid gap-2 md:grid-cols-2"
    //   style={{
    //     backgroundImage:
    //       "url('https://learnwithsumit.com/_next/static/media/pattern.afd33a3d.svg')",
    //   }}
    // >
    //   <div className=" p-10 opacity-100 h-[450px] items-center ">
    //     <h1 className="text-left text-[#0f172a]">
    //       অনলাইন অকশনে অংশগ্রহণ করতে{" "}
    //       <span className="text-[#6d28d9]">রেজিস্ট্রেশন</span>{" "}
    //       <Typewriter
    //         words={["করুন"]}
    //         loop={5}
    //         cursor
    //         cursorStyle=" ।"
    //         typeSpeed={100}
    //         deleteSpeed={50}
    //         delaySpeed={1000}
    //       />{" "}
    //     </h1>
    //     <div className="mt-10">
    //       <button className="bg-[#0f172a] rounded-full text-white mr-4">
    //         রেজিস্ট্রেশন{" "}
    //       </button>
    //       <button className="bg-[#6d28d9] rounded-full text-white ">
    //         ভিডিও টিউটোরিয়াল{" "}
    //       </button>
    //     </div>

    //     <p className="text-[#748397] text-left mt-2">
    //       অনলাইন রেজিস্ট্রেশন এখনো চালু হয়নি ,আপনি রেজিস্ট্রেশন করতে চাইলে
    //       স্ব-শরীরে এসোসিয়েশন থেকে সদস্য হতে হবে{" "}
    //     </p>
    //   </div>
    //   <div className="flex justify-center items-center h-screen">
    //     <Carousel />
    //   </div>
    // </div>
  );
};
