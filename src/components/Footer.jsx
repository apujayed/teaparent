import logo from "../assets/img/ttab-logo.png"
import bd from "../assets/footer/bdlogo.png"
import bt from "../assets/footer/bt.png"
import itp from "../assets/footer/itp.png"
const Footer = () => {
    return (
     
    <footer className="bg-aliceblue dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a  className="flex items-center">
            <img src={logo} className="h-10 mr-3" alt="FlowBite Logo" />
            <span className="self-center  text-sm font-semibold whitespace-nowrap dark:text-white">Small Tea Garden Owners & <br/>Tea Traders Association Of Bangladesh</span>
          
            </a>
            <p>মোবাইল : +88 01712-509068</p>
            <p>ই-মেইল : mail@teaauctionpanchagarh.com</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
           
            <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">গুরুত্বপূর্ণ লিংক</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                <a href="http://www.teaboard.gov.bd" className="hover:underline ">বাংলাদেশ চা বোর্ড </a>
                </li>
                <li>
                <a href="https://tealicense.com.bd" className="hover:underline">লাইসেন্স আবেদন </a>
                </li>
            </ul>
            </div>
            <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">প্রধান কার্যালয় </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                <a href="#" className="hover:underline">স্টেশন রোড ,ধাক্কামারা,পুরাতন পঞ্চগড়</a>
                </li>
                <li>
                <a href="#" className="hover:underline">পঞ্চগড় - ৫০০০</a>
                </li>
            </ul>
            </div>
        </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex-col  ">
        <p className="text-gray-500 text-sm text-center" >কারিগরি সহযোগিতায়  </p>
        <div className="flex justify-center items-center mt-2 space-x-5 sm:justify-center sm:mt-0 mb-5">
            
       
            <a href="https://ittechpointbd.comS" className="flex text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <img src={itp} className="h-10 mr-4" alt="FlowBite Logo" />
            <div className="flex-col p-0">
            <span className="text-black">IT TECH POINT BD</span>
                
            <p className="mt-0 pt-0 text-black">ittechpointbd@gmail.com</p>
            </div>
           
            </a>
            
            
            </div>
        </div>

        <div className="flex-col ">
        <p className="text-gray-500 text-sm text-center" >পরিকল্পনা ও বাস্তবায়নে </p>
        <div className="flex justify-center items-center  mt-4 space-x-5 sm:justify-center sm:mt-0">
            
       
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <img src={bd} className="h-10" alt="FlowBite Logo" />
            <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <img src={bt} className="h-10" alt="FlowBite Logo" />
            <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <img src={logo} className="h-10" alt="FlowBite Logo" />
            <span className="sr-only">Twitter page</span>
            </a>
            
            </div>
        </div>
        </div>
    </div>
    
    </footer>


    );
}

export default Footer;
