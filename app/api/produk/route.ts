import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

// Menambahkan produk baru
export async function POST(req:NextRequest){
    try{
    const rawData : any =await req.json()

    const data = await prisma.produk.create({
        data:{
            jumlah:rawData.jumlah,
            nama_produk: rawData.nama_produk,
            kategoriId:rawData.kategoriId,
            lokasiId:rawData.lokasiId,
            vendorsId:rawData.vendorId
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
            include:{
                vendors:true,
                lokasi:true,
                kategori:true
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