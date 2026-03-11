"use client"
import Image from "next/image";
import Button, { ButtonLayer } from "./component/ui/Button";
import Input from "./component/ui/Input";
import Sliders from "./component/ux/Sliders";

export default function Home() {
  return (
  <div className="mt-20 w-full h-full">
    <div className="flex items-center justify-center">
    
      <div className="bg-white shadow-xl p-3 
      rounded-md w-1/2 h-1/2 text-center">
        <h1 className="text-green-500 text-xl font-bold">Login</h1>
        <div className="flex text-black gap-5 flex-col justify-center items-center">
          <Input.Basic
          mind={"Username"}
          types="text"
          title="Username"
          />
          <Input.Basic 
          mind={"Password"}
          types="text" 
          title="Password"/>

          <ButtonLayer.Button text="Login"/>
        </div>
      </div>


    </div>
  </div> 
  );
}
