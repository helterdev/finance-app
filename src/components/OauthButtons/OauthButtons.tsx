"use client";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import React from "react";
const OauthButtons = () => {

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const value = e.currentTarget.value;

      if (value === "apple") {
        console.log("Authenticated with apple")
      }

      if (value === "google") {
        window.location.href = "http://localhost:8080/api/v1/auth/google"
      }

      if (value === "github") {
        console.log("Authenticated with github");

      }

    } catch (error) {

    }
  }

  return (
    <div className='flex flex-col gap-1 w-11/12 box-border'>
      <div className='w-full'>
        <Button
          className='w-full flex items-center gap-1 bg-black hover:bg-[#444648] active:bg-[#444648]'
          type='button'
          onClick={onSubmit}
          value={"apple"}
        >
          Apple <IoLogoApple className=' text-xl' />
        </Button>
      </div>
      <div className='w-full'>
        <Button
          className='w-full flex items-center gap-1 bg-white hover:bg-[#e0e0e0] active:bg-[#e0e0e0] text-black'
          type='button'
          onClick={onSubmit}
          value={"google"}
        >
          Google <FcGoogle className='text-xl' />
        </Button>
      </div>
      <div className='w-full'>
        <Button
          className='w-full flex items-center gap-1 bg-black hover:bg-[#444648] active:bg-[#444648]'
          type='button'
          onClick={onSubmit}
          value={"github"}
        >
          Github <FaGithub className='text-xl' />
          {/* <Send /> */}
        </Button>
      </div>
    </div>
  );
};

export default OauthButtons;
