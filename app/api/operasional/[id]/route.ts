import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try{
        const { id } = await params
        const getById = await prisma.operasional.findFirst({
            where:{
                id:parseInt(id)
            }
        })

        return NextResponse.json({
            message:"Success get data",
            data:getById
        })
    }catch(e){
        return NextResponse.json({
            message:"Error",
            error:e
        })
    }
}

export async function PATCH(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try{
        const { id } = await params
        const body = await req.json()
        const updateOperasional = await prisma.operasional.update({
            where:{
                id: parseInt(id)
            },
            data:{
            biaya_operasional : body.biaya_operasional,
            nama_operasional: body.nama_operasional
             }
        })

        return NextResponse.json({
            message:"Success update",
            data:updateOperasional
        })
    }catch(e){
        return NextResponse.json({
            message:"Error",
            error:e
        },{status:500})
    }
}