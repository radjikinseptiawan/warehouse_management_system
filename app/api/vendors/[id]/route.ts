import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";


// Menghapus Vendor
export async function DELETE(req:NextRequest,{params}:{params:Promise<{id:string}>}){
   // Mengecek Session untuk mencegah kebocorand ata
       const session = await getServerSession(authOptions)
       if(!session){
           return NextResponse.redirect(new URL("/unauthorized",req.url))
        }
   
    try{
    const {id} = await params

    const deleteVendor = await prisma.vendors.delete({
        where:{
            id:parseInt(id)
        }
    })    

    return NextResponse.json({
        message:"Vendor berhasil dihapus",
        data:deleteVendor
    })
    }catch(e){
        return NextResponse.json({
            error:e
        },{status:400})
    }
}

// Melihat Detail Vendors
export async function GET(req:NextRequest,{params}:{params:Promise<{id:string}>}){
   // Mengecek Session untuk mencegah kebocorand ata
       const session = await getServerSession(authOptions)
       if(!session){
           return NextResponse.redirect(new URL("/unauthorized",req.url))
       }
   
    try{
        const { id } = await params

        const data = await prisma.vendors.findFirst({
            where:{
                id:parseInt(id)
            },
            include:{
                produk:true
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

// Mengedit Vendors
export async function PATCH(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    // Mengecek Session untuk mencegah kebocorand ata
        const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }
    
    try{
        const { id } = await params
        const body = await req.json()
        const updateVendors = await prisma.vendors.update({
            where:{
                id: parseInt(id)
            },
            data:{
                nama_vendor:body.nama_vendor,
                alamat_vendor:body.alamat_vendor,
                warna_vendor:body.warna_vendor
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