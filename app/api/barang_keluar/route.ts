import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

// Menambahkan produk baru
export async function POST(req:NextRequest){
    try{
    const body =await req.json()
    console.log(body)

    
    const data = await prisma.barang_keluar.create({
        data:{
            jumlah_barang_keluar:parseInt(body.jumlahBarangKeluar),
            nominal_modal:parseInt(body.nominalModal),
            produkId:parseInt(body.produkId),
            tanggal_keluar:new Date(body.tanggalKeluar)
        }
    })

    if(!data){
        return NextResponse.json({
            message:"Error",
            data
        })
    }

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
        const data = await prisma.barang_keluar.findMany({
            include:{
                produk:{
                    include:{
                        vendors:true,
                        kategori:true,
                        lokasi:true
                    }
                }
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