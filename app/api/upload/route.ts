import cloudinary from "@/lib/cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const  formData = await req.formData()
    const file = formData.get("file") as File

    if(!file) return NextResponse.json({error:"No File"},{status:400})

   const bytes = await file.arrayBuffer()
   const buffer = Buffer.from(bytes)
   
    const result:any = await new Promise((resolve,reject)=>{
        cloudinary.uploader.upload_stream(
            {folder:"products"},(error,result)=>{
                if(error) reject(error)
                    resolve(result)
            }).end(buffer)
    })

    return NextResponse.json({
        url:result.secure_url,
        public_id: result.public_id
    })
}