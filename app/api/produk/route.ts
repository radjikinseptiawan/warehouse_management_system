import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

// Menambahkan produk baru
export async function POST(req:NextRequest){
    try{
    const formData : any =await req.formData()

        const jumlah = parseInt(formData.get("jumlah") as string)
        const nama_produk = formData.get("nama_produk") as string
        const kategoriId = parseInt(formData.get("kategoriId") as string)
        const lokasiId = parseInt(formData.get("lokasiId") as string)
        const vendorId = parseInt(formData.get("vendorId") as string)
        const gambarProduk = formData.get("gambar_produk") as string
        const publicId= formData.get("public_id")
    const data = await prisma.produk.create({
        data:{
            jumlah:jumlah,
            gambar_produk:gambarProduk,
            nama_produk:nama_produk,
            kategoriId:kategoriId,
            lokasiId:lokasiId,
            vendorsId:vendorId,
            public_id:publicId
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