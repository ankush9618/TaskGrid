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
      <div className=" w-full h-full">
        <UserDetails />
        <MobileMenuBar />

        <div className="w-9/10 mx-auto h-[90vh] mt-35">
          <div className='flex justify-center items-center text-4xl gap-2 font-bold mb-10'>
            <FaTasks className='text-red-500 text-5xl' />
            <h1 className='text-yellow-500'>TaskGrid</h1>
          </div>
          <div className="text-5xl bg-gradient-to-r from-pink-600 via-red-500 to bg-yellow-500 bg-clip-text text-transparent font-bold text-center leading-16"><TypeWriterText /></div>
        </div>
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </>
  );
}
