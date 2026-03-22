import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route"

// Menambahkan produk baru
export async function POST(req:NextRequest){
    // Mengecek Session untuk mencegah kebocorand ata
   const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }

    try{
    const body =await req.json()
    console.log(body)

    
    const data = await prisma.barang_masuk.create({
        data:{
            jumlah_barang_masuk:parseInt(body.jumlahBarangMasuk),
            nominal_modal:parseInt(body.nominalModal),
            produkId:parseInt(body.produkId),
            tanggal_masuk: new Date(body.tanggalMasuk)
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
export async function GET(req:NextRequest){
   const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }
    try{
        const data = await prisma.barang_masuk.findMany({
            include:{
                produk:{
                    include:{
                        vendors:true,
                        kategori:true,
                        lokasi:true,
                        unit:true
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