"use client"
import Image from "next/image";
import { ButtonLayer } from "./component/ui/Button";
import Input from "./component/ui/Input";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginPages = async()=>{
    const res = await signIn("credentials",{
      email,
      password,
      redirect:true,
      callbackUrl:"/home"
    })

    console.log(res)
  }

  return (
  <div className="mt-20 w-full h-full">
    <div className="flex items-center justify-center">
    
      <div className="bg-white shadow-xl p-3 
      rounded-md md:w-1/2 w-xl md:h-1/2 text-center">
        <h1 className="text-green-500 text-xl font-bold">Login</h1>
        <div className="flex text-black gap-5 flex-col justify-center items-center">
          <Input.Basic
          mind={"email"}
          types="text"
          value={email}
          change={(e:any)=>setEmail(e.target.value)}
          title="email"
          />
          <Input.Basic 
          change={(e:any)=>setPassword(e.target.value)}
          value={password}
          mind={"Password"}
          types="password" 
          title="password"/>

          <div className="font-bold text-white">
          <ButtonLayer.Button text="Login" clicker={loginPages}/>
          </div>
        </div>
      </div>


    </div>
  </div> 
  );
}
