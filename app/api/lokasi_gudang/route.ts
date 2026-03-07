import { prisma } from "@/lib/prisma";
import { GudangType, VendorType } from "@/lib/type";
import { NextRequest, NextResponse } from "next/server";


// Menambahkan vendor/supplier baru
export async function POST(req:NextRequest){
    try{
    const rawData : GudangType | any =await req.json()

    const data = await prisma.lokasi_gudang.create({
        data:{
            alamat_gudang:rawData.alamat_gudang,
            nama_gudang: rawData.nama_gudang,
            warna_gudang:rawData.warna_gudang
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
    try{
        const data = await prisma.lokasi_gudang.findMany()

        return NextResponse.json({
            data
        })
    }catch(e){
        return NextResponse.json({
            error:e
        })
    }
}