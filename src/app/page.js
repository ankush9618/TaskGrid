import Image from "next/image";
import UserDetails from "../components/UserDetails";
import { ToastContainer } from "react-toastify";
import MobileMenuBar from "../components/MobileMenuBar";
import TypeWriterText from "../components/TypeWriterText";
import Link from "next/link";
import { FaTasks } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className=" w-full h-300">
        <UserDetails />
        <MobileMenuBar />
        <div className="w-9/10 mx-auto mt-35">
          <div className='flex justify-center items-center text-4xl gap-2 font-bold mb-10'>
            <FaTasks className='text-red-500 text-5xl' />
            <h1 className='text-yellow-500'>TaskGrid</h1>
          </div>
          <div className="2xl:text-5xl md:text-4xl bg-gradient-to-r from-pink-600 via-red-500 to to-yellow-500 bg-clip-text text-transparent font-bold text-center leading-16">Your tasks, your rules - plan it, track it, crush it. TaskGrid got your back.</div>
          <div className="w-full mt-5 flex justify-center"><Link href="/add-task"><button className="border-2 px-5 py-2 text-center text-2xl rounded-3xl cursor-pointer hover:scale-105 duration-300">Get Started...</button></Link></div>
        </div>
      </div>
    </>
  );
}
