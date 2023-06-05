import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

interface SignUpProps {}

const SignUp: FunctionComponent<SignUpProps> = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState<string | undefined>();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="min-h-screen flex justify-center items-center scroll-smooth">
      <div className="w-max bg-[#E6FCFF] px-5 py-5 flex flex-col md:flex-row rounded-2xl items-center">
        <div className="px-5 py-5 flex flex-col justify-center items-center space-x-2">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="my-3"
          />
          <h3 className="font-league-spartan text-3xl font-bold text-center">
            Welcome to FoundHub
          </h3>
          <h3 className="font-league-spartan text-xl items-center">
            Dont have an account?{" "}
          </h3>
          <Link href="/signin">
            <button className="hover:bg-black hover:text-white font-league-spartan border-2 border-gray-400 rounded-md p-2 m-2">
              Sign In
            </button>
          </Link>
          <p className="font-league-spartan text-xl"> Or </p>
          <button className="hover:bg-black hover:text-white border-2 border-gray-400 rounded-md p-2 m-2">
            Log In as a Guest
          </button>
        </div>
        <div className="w-max font-league-spartan border-l-0 md:border-l-2 border-black border-t-2 md:border-t-0 bg-[#E6FCFF] py-3 px-5 flex flex-col justify-center items-center mx-auto space-x-2">
          <h1 className="font-league-spartan text-4xl font-bold text-center">
            Sign Up
          </h1>
          <p className="text-xl font-league-spartan text-center">
            Sign up to continue to FoundHub
          </p>
          <form className="flex flex-col my-5 w-auto">
            <p className="text-sm font-league-spartan items-start mx-2">
              Email
            </p>
            <input
              className="border-2 border-gray-400 rounded-md p-2 m-2 w-full"
              type="email"
              placeholder="Email"
            />
            <p className="text-sm font-league-spartan items-start mx-2">
              Phone Number
            </p>
            <div className="flex items-center border-2 bg-white border-gray-400 rounded-md p-2 m-2 w-full">
              <PhoneInput
                className="flex-1  outline-none text-sm font-league-spartan "
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                defaultCountry="KH"
                international
                countryCallingCodeEditable={false}
              />
              {/* <Select
                options={countryOptions}
                defaultValue={defaultCountry}
                className="w-fit mr-2 text-sm font-league-spartan "
                placeholder="Select Country"
              />
              <input
                className="flex-1 outline-none text-sm font-league-spartan"
                type="tel"
                placeholder="Phone Number"
              /> */}
            </div>

            <p className="text-sm font-league-spartan items-start mx-2">
              Password
            </p>
            <input
              className="border-2 border-gray-400 rounded-md p-2 m-2 w-full"
              type="password"
              placeholder="Password"
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="border-2 border-gray-400 rounded-md p-2 m-2"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="terms" className="text-sm font-league-spartan">
                I have read and agree to the{" "}
                <a href="/termsandcondition" className="underline">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button
              className={`border-2 border-gray-400 rounded-md p-2 m-2 ${
                !isChecked
                  ? "disabled opacity-20"
                  : "hover:bg-black hover:text-white"
              }`}
              disabled={!isChecked}
            >
              Sign In
            </button>
            <p className="font-league-spartan text-xl text-center "> Or </p>
            <button className="border-2 border-gray-400 rounded-md p-2 m-2 hover:bg-black hover:text-white">
              Sign In with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
