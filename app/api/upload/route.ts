import cloudinary from "@/lib/cloudinary";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req:NextRequest){
    // Mengecek Session untuk mencegah kebocorand ata
    const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({
            message:"Unauthorize",
        },{status:401})
    }

    try{
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
   }catch(e){
        return NextResponse.json({
            message:"Failed to upload data",
            error:e
        })
   }
}