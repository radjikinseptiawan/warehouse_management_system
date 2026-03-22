import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req:NextRequest){
        // Mengecek Session untuk mencegah kebocorand ata
      const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }

    try{
        const getOperasional = await prisma.operasional.findMany()

        if(!getOperasional) return NextResponse.json({
            message:"Failed to get data, data not found!"
        },{status:400})

        return NextResponse.json({
            message:"Success catch data",
            data: getOperasional,
        },{status:200})
    }catch(e){
        return NextResponse.json({
            message:"Failed to catch data",
            error:e
        },{status:500})
    } 
}

export async function POST(req:NextRequest){
        // Mengecek Session untuk mencegah kebocorand ata
         const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }
    try{
        const body = await req.json()
        const sendOperationalData = await prisma.operasional.create({
            data:{
                biaya_operasional : body.biaya_operasional,
                nama_operasional: body.nama_operasional
            }
        })

        return NextResponse.json({
            message:"Success to send the data below",
            data:sendOperationalData
        })
    }catch(e){
        return NextResponse.json({
            message:"Failed to send the data",
            error:e
        })
    }
}