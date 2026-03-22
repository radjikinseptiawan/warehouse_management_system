import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route"

// Menambahkan produk baru
export async function POST(req:NextRequest){
    const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({
            message:"Unauthorize",
        },{status:401})
    }
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
        const session = await getServerSession(authOptions)
    if(!session){
        return NextResponse.json({
            message:"Unauthorize",
        },{status:401})
    }

    try{
        const data = await prisma.barang_keluar.findMany({
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