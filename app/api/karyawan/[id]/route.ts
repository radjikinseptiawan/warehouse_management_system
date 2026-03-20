import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try{
    const { id } = await params

    const getKaryawanSelected = await prisma.karyawan.findFirst({
        where:{
            id:parseInt(id)
        }
    })


    return NextResponse.json({
        message:"Success get data",
        data:getKaryawanSelected
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
        
        const updateData = await prisma.karyawan.update({
            where:{
                id:parseInt(id)
            },
            data:{
                nama_karyawan : body.nama_karyawan,
                alamat_karyawan : body.alamat_karyawan,
                gaji_karyawan : body.gaji_karyawan,
                mulai_kerja : body.mulai_kerja,
                status : body.status_karyawan
            }
        })

        return NextResponse.json({
            message:"Success edit Data",
            data:updateData
        })
    }catch(e){
        return NextResponse.json({
            message:"Error",
            error:e
        })
    }
}