"use client";
import Image from 'next/image';
import React from 'react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Middle = () => {
  const coin1 = useRef(null);
  const coin2 = useRef(null);
  const coin3 = useRef(null);
  const coin4 = useRef(null);
  const coin5 = useRef(null);
  const coin6 = useRef(null);

  const coin7 = useRef(null);
  const coin8 = useRef(null);
  const coin9 = useRef(null);
  const coin10 = useRef(null);
  const coin11 = useRef(null);
  const coin12 = useRef(null);
 
  const coin13 = useRef(null);
  const coin14 = useRef(null);
  const coin15 = useRef(null);
  const coin16 = useRef(null);
  const coin17= useRef(null);
  const coin18 = useRef(null);

  const coin19=useRef(null);
  const coin20=useRef(null);
  const coin21=useRef(null);
  const coin22=useRef(null);
  const coin23=useRef(null);
  const coin24=useRef(null);

  const blueball = useRef(null);
  const whiteball = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, ease: "power1.out" });

    timeline
      .to(coin1.current, { duration: 1, x: '220%', delay: 1.5 })
      .to(coin2.current, { duration: 1, x: '440%' }, '<')
      .to(coin3.current, { duration: 1, x: '110%' }, '<')
      .to(coin4.current, { duration: 1, x: '-330%' }, '<')
      .to(coin5.current, { duration: 1, x: '-330%' }, '<')
      .to(coin6.current, { duration: 1, x: '-110%' }, '<')
      .to(coin1.current, { duration: 1, x: '0%', delay: 1.5 })
      .to(coin2.current, { duration: 1, x: '0%' }, '<')
      .to(coin3.current, { duration: 1, x: '0%' }, '<')
      .to(coin4.current, { duration: 1, x: '0%' }, '<')
      .to(coin5.current, { duration: 1, x: '0%' }, '<')
      .to(coin6.current, { duration: 1, x: '0%' }, '<');

      const smtime = gsap.timeline({repeat:-1, ease:"power1.out"});
      smtime
      .to(coin7.current, { duration: 1, x: '240%', delay: 1.5 })
      .to(coin8.current, { duration: 1, x: '480%' }, '<')
      .to(coin9.current, { duration: 1, x: '120%' }, '<')
      .to(coin10.current, { duration: 1, x: '-360%' }, '<')
      .to(coin11.current, { duration: 1, x: '-360%' }, '<')
      .to(coin12.current, { duration: 1, x: '-120%' }, '<')
      .to(coin7.current, { duration: 1, x: '0%', delay: 1.5 })
      .to(coin8.current, { duration: 1, x: '0%' }, '<')
      .to(coin9.current, { duration: 1, x: '0%' }, '<')
      .to(coin10.current, { duration: 1, x: '0%' }, '<')
      .to(coin11.current, { duration: 1, x: '0%' }, '<')
      .to(coin12.current, { duration: 1, x: '0%' }, '<');

      const mdtime = gsap.timeline({repeat: -1, ease:"power1.out"});
      mdtime
      .to(coin13.current, { duration: 1, x: '230%', delay: 1.5 })
      .to(coin14.current, { duration: 1, x: '450%' }, '<')
      .to(coin15.current, { duration: 1, x: '115%' }, '<')
      .to(coin16.current, { duration: 1, x: '-345%' }, '<')
      .to(coin17.current, { duration: 1, x: '-345%' }, '<')
      .to(coin18.current, { duration: 1, x: '-120%' }, '<')
      .to(coin13.current, { duration: 1, x: '0%', delay: 1.5 })
      .to(coin14.current, { duration: 1, x: '0%' }, '<')
      .to(coin15.current, { duration: 1, x: '0%' }, '<')
      .to(coin16.current, { duration: 1, x: '0%' }, '<')
      .to(coin17.current, { duration: 1, x: '0%' }, '<')
      .to(coin18.current, { duration: 1, x: '0%' }, '<');


      const xstime =gsap.timeline({ repeat: -1, ease: "power1.out"});
      xstime
      .to(coin19.current, { duration: 1, y: '235%', delay: 1.5 })
      .to(coin20.current, { duration: 1, y: '440%' }, '<')
      .to(coin21.current, { duration: 1, y: '110%' }, '<')
      .to(coin22.current, { duration: 1, y: '-330%' }, '<')
      .to(coin23.current, { duration: 1, y: '-330%' }, '<')
      .to(coin24.current, { duration: 1, y: '-120%' }, '<')
      .to(coin19.current, { duration: 1, y: '0%', delay: 1.5 })
      .to(coin20.current, { duration: 1, y: '0%' }, '<')
      .to(coin21.current, { duration: 1, y: '0%' }, '<')
      .to(coin22.current, { duration: 1, y: '0%' }, '<')
      .to(coin23.current, { duration: 1, y: '0%' }, '<')
      .to(coin24.current, { duration: 1, y: '0%' }, '<');


    const tl2 = gsap.timeline({ repeat: -1, ease: "power1.out" });

    tl2.to(blueball.current, { duration: 1, x: '180%', delay: 1.5 });
    tl2.to(whiteball.current, { duration: 1, x: '-180%' }, '<');
    tl2.to(blueball.current, { duration: 1, x: '0%', delay: 1.5 });
    tl2.to(whiteball.current, { duration: 1, x: '0%' }, '<');
  }, []);

  return (
    <div className="m-4 md:m-8 lg:m-12 border-y-2 py-16 md:py-24 border-sky-400"> 
      <div className="flex flex-wrap justify-between gap-6 md:gap-12 px-4 md:px-8">
        <div className="flex-1 min-w-[280px]">
          <p className="text-sm md:text-base leading-6 md:leading-8 tracking-wide  text-gray-500">
            Achievements
          </p>
          <h1 className="font-medium text-xl md:text-3xl lg:text-4xl leading-12  Font-Roboto md:leading-12 lg:leading-tight w-1/2">
            Product Innovation AWARDS in Medical Devices
          </h1>
        </div>
        <div className="w-full md:w-auto  grid content-center">
          <p className="text-sm md:text-base leading-6 md:leading-8  text-gray-500 py-2 md:py-4">
            Having Any Enquiries / Want to reach us?
          </p>
          <div className='relative'>
            <button className="border border-black rounded-2xl px-4 py-2 md:px-6 text-sm sm:px-4 md:text-base font-bold transition duration-500 opacity-100 hover:opacity-0">
              Learn More
            </button>
            <Image src="/assets/Learn more arrow bt.svg"
              alt="Learn More"
              height={50}
              width={140}
              className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition duration-500"/>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 p-4  sm:py-8 px-4 xl:px-4 md:px-4">
         {/* coin 1*/}
       <div ref={coin1} className="flex-shrink-0 w-[120px] hidden sm:hidden md:hidden lg:block xl:block  lg:w-[120px] xl:w-[170px] ">
          <Image
            src="/assets/Item ⏵ radiology-imaging-excellence-awards-pic.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*coin 2*/}
        <div ref={coin2} className="flex-shrink-0 w-[120px] hidden sm:hidden md:hidden lg:block xl:block   lg:w-[120px] xl:w-[170px] ">
          <Image
            src="/assets/Item ⏵ customer-value-leadership-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*coin 3*/}
        <div ref={coin3} className="flex-shrink-0 w-[120px] hidden sm:hidden md:hidden lg:block xl:block     lg:w-[120px] xl:w-[170px] ">
          <Image
            src="/assets/Item ⏵ brand-trust-report-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*coin 4*/}
        <div ref={coin4} className="flex-shrink-0 w-[120px]  hidden sm:hidden md:hidden lg:block xl:block   lg:w-[120px] xl:w-[170px] ">
          <Image
            src="/assets/Item ⏵ most-attractive-brands-report-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*coin 5*/}
        <div ref={coin5} className="flex-shrink-0 w-[120px]  hidden sm:hidden md:hidden lg:block xl:block    lg:w-[120px] xl:w-[170px] ">
          <Image
            src="/assets/Item ⏵ south-asia-e-health-summit-award.png.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*coin 6*/}
          <div ref={coin6} className="flex-shrink-0 w-[120px] hidden sm:hidden md:hidden lg:block xl:block  lg:w-[120px] xl:w-[170px]">
            <Image
    src="/assets/Item ⏵ iot-next-summit-award.svg"
    alt=""
    height={0}
    width={0}
    className="w-full h-auto object-contain hover:opacity-70 transition"
  />
</div>

   
           {/*smcoin 1*/}
           <div ref={coin7} className="flex-shrink-0  hidden sm:block md:hidden lg:hidden xl:hidden w-[80px]  ">
          <Image
            src="/assets/Item ⏵ radiology-imaging-excellence-awards-pic.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*smcoin 2*/}
        <div ref={coin8} className="flex-shrink-0  hidden sm:block md:hidden lg:hidden xl:hidden w-[80px]  ">
          <Image
            src="/assets/Item ⏵ customer-value-leadership-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*smcoin 3*/}
        <div ref={coin9} className="flex-shrink-0   hidden sm:block md:hidden lg:hidden xl:hidden w-[80px]  ">
          <Image
            src="/assets/Item ⏵ brand-trust-report-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*smcoin 4*/}
        <div ref={coin10} className="flex-shrink-0 hidden sm:block md:hidden lg:hidden xl:hidden  w-[80px] ">
          <Image
            src="/assets/Item ⏵ most-attractive-brands-report-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*smcoin 5*/}
        <div ref={coin11} className="flex-shrink-0  hidden sm:block md:hidden lg:hidden xl:hidden w-[80px] ">
          <Image
            src="/assets/Item ⏵ south-asia-e-health-summit-award.png.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*smcoin 6*/}
        <div ref={coin12} className="flex-shrink-0  hidden sm:block md:hidden lg:hidden xl:hidden w-[80px] ">
          <Image
            src="/assets/Item ⏵ iot-next-summit-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
      
            {/*mdcoin 1*/}
            <div ref={coin13} className="flex-shrink-0  hidden sm:hidden md:block  lg:hidden xl:hidden w-[95px]  ">
          <Image
            src="/assets/Item ⏵ radiology-imaging-excellence-awards-pic.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*mdcoin 2*/}
        <div ref={coin14} className="flex-shrink-0  hidden sm:hidden md:block  lg:hidden xl:hidden w-[95px] ">
          <Image
            src="/assets/Item ⏵ customer-value-leadership-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*mdcoin 3*/}
        <div ref={coin15} className="flex-shrink-0   hidden sm:hidden md:block  lg:hidden xl:hidden w-[95px] ">
          <Image
            src="/assets/Item ⏵ brand-trust-report-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*mdcoin 4*/}
        <div ref={coin16} className="flex-shrink-0 hidden sm:hidden md:block  lg:hidden xl:hidden  w-[95px]">
          <Image
            src="/assets/Item ⏵ most-attractive-brands-report-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*mdcoin 5*/}
        <div ref={coin17} className="flex-shrink-0  hidden sm:hidden md:block lg:hidden xl:hidden w-[95px]">
          <Image
            src="/assets/Item ⏵ south-asia-e-health-summit-award.png.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*mdcoin 6*/}
        <div ref={coin18} className="flex-shrink-0  hidden sm:hidden md:block lg:hidden xl:hidden w-[95px]">
          <Image
            src="/assets/Item ⏵ iot-next-summit-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
         {/*xscoin 1*/}
         <div ref={coin19} className=" grid grid-cols-1  gap-4  sm:hidden md:hidden lg:hidden xl:hidden w-[120px]  ">
          <Image
            src="/assets/Item ⏵ radiology-imaging-excellence-awards-pic.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*xscoin 2*/}
        <div ref={coin20} className=" grid grid-cols-1 gap-4  sm:hidden md:hidden lg:hidden xl:hidden w-[120px]  ">
          <Image
            src="/assets/Item ⏵ customer-value-leadership-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*xscoin 3*/}
        <div ref={coin21} className=" grid grid-cols-1  gap-4   sm:hidden md:hidden lg:hidden xl:hidden w-[120px]  ">
          <Image
            src="/assets/Item ⏵ brand-trust-report-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*xscoin 4*/}
        <div ref={coin22} className=" grid grid-cols-1 gap-4   sm:hidden md:hidden lg:hidden xl:hidden w-[120px] ">
          <Image
            src="/assets/Item ⏵ most-attractive-brands-report-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*xscoin 5*/}
        <div ref={coin23} className=" grid grid-cols-1 gap-4   sm:hidden md:hidden lg:hidden xl:hidden w-[120px] ">
          <Image
            src="/assets/Item ⏵ south-asia-e-health-summit-award.png.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>
          {/*xscoin 6*/}
        <div ref={coin24} className=" grid grid-cols-1  gap-4  sm:hidden md:hidden lg:hidden xl:hidden w-[120px] ">
          <Image
            src="/assets/Item ⏵ iot-next-summit-award.svg"
            alt=""
            height={0}
            width={0}
            className="w-full h-auto object-contain hover:opacity-70 transition"
          />
        </div>

      
      </div>

      <div className="flex justify-center items-center gap-2">
        <div ref={blueball} className="w-[10px] h-[10px] rounded-full bg-slate-300 shadow-md transition hover:bg-white"></div>
        <div ref={whiteball} className="w-[10px] h-[10px] rounded-full bg-sky-400 shadow-md transition hover:bg-white"></div>
      </div>
    </div>
  );
}

export default Middle;