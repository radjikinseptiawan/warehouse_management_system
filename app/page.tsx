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
  }

  return (
  <div className="mt-20 w-full h-full">
    <div className="flex items-center justify-center">
    
      <div className="bg-white shadow-xl p-3 
      rounded-md md:w-1/2 w-xl md:h-1/2 text-center">
        <h1 className="text-green-500 text-xl font-bold">Login</h1>
        <p className="text-gray-500">Sistem Informasi Logistik Badan Usaha Milik <a target="_blank" href="https://maps.app.goo.gl/1eHCAJTjfRGiTiFAA"><i>Desa Setiadarma</i></a></p>
        <div className="flex items-center justify-center">
               <p className="text-gray-500">Sistem Informasi Badan Usaha Milik <a target="_blank" href="#"><i>Himpunan Mahasiswa Teknik Informatika Pelita Bangsa</i></a></p> </div>
        <div className="flex text-black gap-5 my-5 flex-col justify-center items-center">
          <Input.Basic
          mind={"email"}
          types="text"
          value={email}
          change={(e:any)=>setEmail(e.target.value)}
          title="Email"
          />
          <Input.Basic 
          change={(e:any)=>setPassword(e.target.value)}
          value={password}
          mind={"Password"}
          types="password" 
          title="Password"/>

          <div className="font-bold text-white">
          <ButtonLayer.Button text="Login" clicker={loginPages}/>
          </div>
          <p className="text-gray-400 italic">Powered By <a target="_blank" className="hover:underline transition-all" href="https://www.instagram.com/sistemika.id/">SISTEMIKA</a></p>
        </div>
      </div>


    </div>
  </div> 
  );
}
