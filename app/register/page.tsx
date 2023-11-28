"use client";

import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const userTypes = [
    "Learner",
    "Job Seeker / Applicant",
    "Employee",
    "Founder",
    "Educator",
    "Mentor",
  ];
  const languages = ["English", "French"];

  return (
    <main>
      <section
        className={
          "min-h-screen lg:flex items-center justify-between py-24 px-2 md:px-64 bg-green-200"
        }
      >
        <div className="basis-1/2">
          <Image
            src="/login/Splash_1.png"
            alt="splash"
            width={1000}
            height={100}
          />
        </div>
        <div className="px-0 md:px-16 basis-1/2">
          <div className="bg-white text-center flex flex-col p-6">
            <div className="py-6 text-center m-auto">
              <Image src="/logoNew.png" alt="logo" width={150} height={100} />
            </div>
            <div className="w-full border-b-2 mb-6"></div>
            <input
              className="border-b-2 border-gray-200 rounded px-2 py-1 mb-6 text-gray-500 focus:outline-none"
              placeholder="First name"
            />
            <input
              className="border-b-2 border-gray-200 rounded px-2 py-1 mb-6 text-gray-500 focus:outline-none"
              placeholder="Last name"
            />
            <input
              className="border-b-2 border-gray-200 rounded px-2 py-1 mb-6 text-gray-500 focus:outline-none"
              placeholder="Username"
            />
            <input
              className="border-b-2 border-gray-200 rounded px-2 py-1 mb-6 text-gray-500 focus:outline-none"
              placeholder="Password"
              type="password"
            />
            <input
              className="border-b-2 border-gray-200 rounded px-2 py-1 mb-6 text-gray-500 focus:outline-none"
              placeholder="Confirm password"
              type="password"
            />
            <input
              className="border-b-2 border-gray-200 rounded px-2 py-1 mb-6 text-gray-500 focus:outline-none"
              placeholder="Email"
            />
            <select className="border-2 p-2 mb-6">
              <option>User type</option>
              {userTypes.map((u) => (
                <option key={u}>{u}</option>
              ))}
            </select>

            <h6 className="text-end">
              <i>Optional</i>
            </h6>
            <select className="border-2 p-2 mb-6">
              <option>Select Language</option>
              {languages.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
            <Link href={`/login`}>
              <button className="w-full bg-orange-500 text-white p-2 mb-2">
                Register
              </button>
            </Link>
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
            <button className="w-full bg-red-400 text-white p-2 mb-2">
              Continue with Apple
            </button>
            <button className="w-full bg-red-400 text-white p-2 mb-2">
              Continue with Magnet
            </button>

            <h6 className="w-full text-center text-sm">
              Already have an account?{" "}
              <Link href={`/login`}>
                <button className="text-green-600">Log in</button>
              </Link>
            </h6>

            <h6 className="w-full text-center text-sm">
              Are you an organization?{" "}
              <button className="text-green-600">Organization register</button>
            </h6>
          </div>
        </div>
      </section>
    </main>
  );
}
