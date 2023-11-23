"use client";

import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        className={
          "min-h-screen md:flex items-center justify-between py-24 px-24 md:px-64 bg-green-200"
        }
      >
        <div className="basis-1/2">carousel</div>
        <div className="px-16 basis-1/2">
          <div className="bg-white text-center flex flex-col p-6">
            <div className="py-6 text-center m-auto">
              <Image src="/logoNew.png" alt="logo" width={150} height={100} />
            </div>
            <div className="w-full border-b-2 mb-6"></div>
            <input
              className="border-b-2 border-gray-200 rounded px-2 py-1 mb-6 text-gray-500 focus:outline-none"
              placeholder="User name or email"
            />
            <input
              className="border-b-2 border-gray-200 rounded px-2 py-1 mb-6 text-gray-500 focus:outline-none"
              placeholder="Password"
            />
            <div className="w-full text-end text-sm mb-6">
              <button>Forgot password?</button>
            </div>
            <button className="w-full bg-orange-500 text-white p-2 mb-2">
              Log in
            </button>
            <h6 className="mb-2">or</h6>
            <button className="w-full bg-blue-500 text-white p-2 mb-2">
              Continue with Microsoft
            </button>
            <button className="w-full bg-blue-500 text-white p-2 mb-2">
              Continue with LinkedIn
            </button>
            <button className="w-full bg-red-400 text-white p-2 mb-2">
              Continue with Google
            </button>
            <button className="w-full bg-white-400 border-2 border-black p-2 mb-2">
              Continue with Apple
            </button>
            <button className="w-full bg-red-400 text-white p-2 mb-2">
              Continue with Magnet
            </button>
            <h6 className="w-full text-center text-sm">
              Don't have an account?{" "}
              <button className="text-green-600">Sign up</button>
            </h6>
          </div>
        </div>
      </section>
    </main>
  );
}
