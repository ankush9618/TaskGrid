import Image from "next/image";
import UserDetails from "./components/UserDetails";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
    <div className=" w-full h-full">
      <UserDetails/>
      Hello Buddy! welcome to TaskGrid...
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
    </>
  );
}
