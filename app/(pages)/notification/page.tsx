"use client"
import Button from "@/app/component/ui/Button";
import Input from "@/app/component/ui/Input";

export default function Page(){
    return(
        <div>
            <Input.Basic types="text" mind="Nama Vendor" title="Nama Vendor"/>
            <Input.Basic types="text" mind="Alamat Vendor" title="Alamat Vendor"/>
            <Input.Color title="Warna" />
            <Input.Image title="Gambar"/>
            <Button clicker={
                ()=>console.log("test")
            } text={"Tambah"}/>
        </div>
    )
}