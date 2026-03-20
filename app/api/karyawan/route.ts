import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){
    try{

    const body = await req.json()

    const insert = await prisma.karyawan.create({
        data:{
            nama_karyawan : body.nama_karyawan,
            alamat_karyawan:body.alamat_karyawan,
            gaji_karyawan:body.gaji_karyawan,
            status:body.status_karyawan,
            mulai_kerja:body.mulai_kerja
        }
    })
        return NextResponse.json({
            message:"Success add data",
            data:insert
        })
    }catch(e){
        return NextResponse.json({
            message:"Failed to add data",
            error:e
        })
    }
}

export async function GET(){
    try{
        const syncData = await prisma.karyawan.findMany()

        if(!syncData) NextResponse.json({message:"Table not found!"},{status:404})

        if(syncData.length < 0) NextResponse.json({message:"data is empty"},{status:404})    

        return NextResponse.json({
            message:"success get data",
            data: syncData
        })    
        }catch(e){
        return NextResponse.json({
            message:"Failed to add data",
            error:e
        })
    }
}