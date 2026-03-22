import { prisma } from "@/lib/prisma";
import { GudangType, VendorType } from "@/lib/type";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";


// Menambahkan vendor/supplier baru
export async function POST(req:NextRequest){
        // Mengecek Session untuk mencegah kebocorand ata
        const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.json({
                message:"Unauthorize",
            },{status:401})
        }
    
    try{
    const rawData : GudangType | any =await req.json()

    const data = await prisma.satuan.create({
        data:{
            nama_satuan: rawData.nama_satuan
        }
    })

    return NextResponse.json({
        message:"Success add data",
        data
    },{status:200,statusText:"Success"})
    }catch(e){
        return NextResponse.json({
            error:e
        },{status:500,statusText:"Internal Server Error"})
    }
}

// Mengambil data vendor/supplier
export async function GET(){
    // Mengecek Session untuk mencegah kebocorand ata
    const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({
            message:"Unauthorize",
        },{status:401})
    }

    try{
        const data = await prisma.satuan.findMany()

        return NextResponse.json({
            data
        })
    }catch(e){
        return NextResponse.json({
            error:e
        })
    }
}