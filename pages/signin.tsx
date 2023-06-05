import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SignInProps {}

const SignIn: FunctionComponent<SignInProps> = () => {
  const [isChecked, setIsChecked] = useState(false);

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
          <Link href="/signup">
            <button className="hover:bg-black hover:text-white font-league-spartan border-2 border-gray-400 rounded-md p-2 m-2">
              Sign Up
            </button>
          </Link>
          <p className="font-league-spartan text-xl"> Or </p>
          <button className="hover:bg-black hover:text-white border-2 border-gray-400 rounded-md p-2 m-2">
            Log In as a Guest
          </button>
        </div>
        <div className="font-league-spartan border-l-0 md:border-l-2 border-black border-t-2 md:border-t-0 bg-[#E6FCFF] px-5 py-5 flex flex-col justify-center items-center my-auto mx-auto space-x-2 w-max">
          <h1 className="font-league-spartan text-4xl font-bold text-center">
            Sign In
          </h1>
          <p className="text-xl font-league-spartan text-center">
            Sign in to your account
          </p>
          <form className="flex flex-col my-5 w-auto">
            <p className="text-sm font-league-spartan items-start mx-2">
              Email or Phone Number
            </p>
            <input
              className="border-2 border-gray-400 rounded-md p-2 m-2 w-64"
              type="text"
              placeholder="Email or Phone Number"
            />
            <p className="text-sm font-league-spartan items-start mx-2">
              Password
            </p>
            <input
              className="border-2 border-gray-400 rounded-md p-2 m-2 w-64"
              type="password"
              placeholder="Password"
            />
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

export default SignIn;
