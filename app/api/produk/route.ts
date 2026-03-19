import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

// Menambahkan produk baru
export async function POST(req:NextRequest){
    try{
        const body = await req.json()
        console.log(body)
        const data = await prisma.produk.create({
            data:{
                nama_produk:body.nama_produk,
                gambar_produk:body.gambar_produk,
                lokasiId:body.lokasiId,
                kategoriId:body.kategoriId,
                unitId:body.unitId,
                vendorsId:body.vendorId
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

// Mengambil data produk
export async function GET(){
    try{
        const data = await prisma.produk.findMany({
            where:{
                is_delete: false
            },
            include:{
                vendors:true,
                lokasi:true,
                kategori:true,
                unit:true
            }
        })

        return NextResponse.json({
            data
        })
    }catch(e){
        return NextResponse.json({
            error:e
        })
    }
}