import { prisma } from "@/lib/prisma";
import { CategoryType, VendorType } from "@/lib/type";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";


// Menambahkan vendor/supplier baru
export async function POST(req:NextRequest){
        // Mengecek Session untuk mencegah kebocorand ata
        const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }
    
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
export async function GET(req:NextRequest){
        // Mengecek Session untuk mencegah kebocorand ata
        const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }
    
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

export async function DELETE(req:NextRequest){
        // Mengecek Session untuk mencegah kebocorand ata
       const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }
    try{
        const body = await req.json()
        const dataDelete = await prisma.category.deleteMany({
            where:{
                id:{
                    in:body.category_id
                }
            }
        })
        return NextResponse.json({
            id:body,
            data:dataDelete
        })
    }catch(e){
        return NextResponse.json({
            message:e
        })
    }
}