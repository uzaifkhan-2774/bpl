"use client";
import React, { useState } from "react";
import Image from "next/image";

const Inquire = () => {
  return(
    <div className="relative group mt-6 mb-16 lg:mx-48 sm:mx-12 sm:mt-12 2xl:mx-32 2xl:my-24 flex justify-center ">
   
    <Image src="\assets\Property 1=Frame 1000002158.svg"
      height={0}
      width={0}
      alt="frame 1"
      className="opacity-100 group-hover:opacity-0 h-full w-full transition duration-500 "/>

    
      
       <Image src="\assets\Property 1=Frame 1000002303.svg"
      height={0}
      width={0}
      alt="frame 2"
      className=" absolute top-0 left-0 opacity-0 group-hover:opacity-100  w-full h-full   transition duration-700 "/>
    </div>
 
  );
};

export default Inquire;
