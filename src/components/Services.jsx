import srvicesgif from "../assets/img/services.gif"
export default function Services() {
  return (
    <div name='home' className='mt-10 w-full h-screen flex flex-col '>
        <h1 className="text-center">ধাপ সমূহ  </h1>
        <div className='grid md:grid-cols-2 max-w-[1240px] '>
        <div className="flex justify-center items-center">
                <img className='w-full' src={srvicesgif} alt="/" />
            </div>
          
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                

<ol className="relative border-l border-gray-200 dark:border-gray-700">                  
  <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Step 1</time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ফাইনাল ক্যাটালগ এন্ট্রি করা। </h3>
   
  </li>
  <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Step 2</time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">নির্ধারিত তারিখ ও সময়ে নিলামে অংশগ্রহণ করা। </h3>
     </li>
  <li className="ml-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Step 3</time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">রিপোর্ট বের করা। </h3>
    </li>
</ol>



            </div>
           
        </div>
    </div>
  )
}
