import { prisma } from "@/lib/prisma";
import { CategoryType, VendorType } from "@/lib/type";
import { NextRequest, NextResponse } from "next/server";


// Menambahkan vendor/supplier baru
export async function POST(req:NextRequest){
    try{
    const rawData :CategoryType | any = await req.json()

    const data = await prisma.category.create({
        data:{
            nama_kategori:rawData.nama_category,
            warna_category: rawData.warna_category,
        }
    })

    return NextResponse.json({
        message:"Success add data",
        data
    },{status:200})
    }catch(e){
        return NextResponse.json({
            error:e
        },{status:400})
    }
}

// Mengambil data vendor/supplier
export async function GET(){
    try{
        const data = await prisma.category.findMany()

        return NextResponse.json({
            data
        })
    }catch(e){
        return NextResponse.json({
            error:e
        })
    }
}