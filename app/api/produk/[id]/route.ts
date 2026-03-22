import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";


// Menghapus Produk
export async function DELETE(req:NextRequest,{params}:{params:Promise<{id:string}>}){
       // Mengecek Session untuk mencegah kebocorand ata
        const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }
           
    try{
    const {id} = await params

    const deleteVendor = await prisma.produk.update({
        where:{
            id:parseInt(id)
        },
        data:{
            is_delete:true
        }
    })    

    if(deleteVendor?.public_id){
        await cloudinary.uploader.destroy(deleteVendor.public_id)
    }

    return NextResponse.json({
        message:"Produk berhasil dihapus",
        data:deleteVendor
    })
    }catch(e){
        return NextResponse.json({
            error:e
        },{status:400})
    }
}

// Melihat Detail Produk
export async function GET(req:NextRequest,{params}:{params:Promise<{id:string}>}){
        // Mengecek Session untuk mencegah kebocorand ata
        const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }    
    try{
        const { id } = await params

        const data = await prisma.produk.findFirst({
            where:{
                id:parseInt(id)
            },
            include:{
                lokasi:true,
                kategori:true,
                vendors:true
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
        console.log(body)
        const updateVendors = await prisma.produk.update({
            where:{
                id: parseInt(id)
            },
            data:{
            nama_produk: body.nama_produk,
            kategoriId:body.kategoriId,
            lokasiId:body.lokasiId,
            vendorsId:body.vendorId
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