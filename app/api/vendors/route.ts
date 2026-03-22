import { prisma } from "@/lib/prisma";
import { VendorType } from "@/lib/type";
import { NextRequest, NextResponse } from "next/server";
import { SetStateAction, Dispatch } from "react";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


// Menambahkan vendor/supplier baru
export async function POST(req:NextRequest){
   // Mengecek Session untuk mencegah kebocorand ata
       const session = await getServerSession(authOptions)
       if(!session){
           return NextResponse.redirect(new URL("/unauthorized",req.url))
       }
   
    try{
    const rawData :VendorType | any =await req.json()

    const data = await prisma.vendors.create({
        data:{
            alamat_vendor:rawData.alamat_vendor,
            nama_vendor: rawData.nama_vendor,
            warna_vendor:rawData.warna_vendor
        }
    })

    return NextResponse.json({
        message:"Success add data",
        data
    })
    }catch(e){
        return NextResponse.json({
            error:e
        })
    }
}

// Mengambil data vendor/supplier
export async function GET(req:NextRequest){
   // Mengecek Session untuk mencegah kebocorand ata
       const session = await getServerSession(authOptions)
       if(!session){
           return NextResponse.redirect(new URL("/unauthorized",req.url))
       }
   
    try{
        const data = await prisma.vendors.findMany()

        return NextResponse.json({
            data
        })
    }catch(e){
        return NextResponse.json({
            error:e
        })
    }
}
