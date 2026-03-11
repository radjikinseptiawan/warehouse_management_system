import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Melihat Detail Produk
export async function GET(_req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try{
        const { id } = await params

        const data = await prisma.barang_keluar.findFirst({
            where:{
                id:parseInt(id)
            },
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

        if(data == null || !data){
            return NextResponse.json({
                message:"Data Not Found"
            },{status:404,statusText:"Not Found"})
        }

        return NextResponse.json({
            message:"success get data",
            data
        },{status:200,statusText:"success"})
    }catch(e){
        return NextResponse.json({
            error:e
        },{status:400,statusText:"Bad Request"})
    }
}

export async function DELETE(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try{
        const { id } = await params
        console.log(id)
        const data = await prisma.barang_keluar.delete({
            where:{
                id:parseInt(id)
            }
        })

        return NextResponse.json({
            message:"Success delete data",
            dataDihapus:data
        })
    }catch(e){
        console.error(e)
        return NextResponse.json({
            message:"ERROR"
        })
    }
}

// Mengedit Vendors
export async function PATCH(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try{
        const { id } = await params
        const body = await req.json()
        console.log(body)
        const updateVendors = await prisma.barang_keluar.update({
            where:{
                id: parseInt(id)
            },
            data:{
            id:Number(id),
            jumlah_barang_keluar: Number(body.jumlahBarangMasuk),
            nominal_modal:Number(body.nominal_produk),
            tanggal_keluar:new Date(body.tanggal_masuk)            
            }
        })

        return NextResponse.json({
            message:"Success update",
            data:updateVendors
        })
    }catch(e){
        return NextResponse.json({
            message:"Error",
            error:e
        },{status:500})
    }
}