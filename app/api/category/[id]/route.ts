import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";


// Menghapus Category
export async function DELETE(req:NextRequest,{params}:{params:Promise<{id:string}>}){
        // Mengecek Session untuk mencegah kebocorand ata
       const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }
    
    try{
    const {id} = await params

    const deleteCategory = await prisma.category.delete({
        where:{
            id:parseInt(id)
        }
    })    

    if(deleteCategory == null){
            return NextResponse.json({
                message:"Data Not Found"
            },{status:404,statusText:"Not Found"})
    }

    return NextResponse.json({
        message:"Kategori berhasil dihapus",
        data:deleteCategory
    })
    }catch(e){
        return NextResponse.json({
            error:e
        },{status:400})
    }
}

// Melihat Detail Category
export async function GET(req:NextRequest,{params}:{params:Promise<{id:string}>}){
        // Mengecek Session untuk mencegah kebocorand ata
   const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }

    try{
        const { id } = await params

        const data = await prisma.category.findFirst({
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

// Mengedit lokasi gudang
export async function PATCH(req:NextRequest,{params}:{params:Promise<{id:string}>}){
      // Mengecek Session untuk mencegah kebocorand ata
    const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.redirect(new URL("/unauthorized",req.url))
        }

    try{
        const { id } = await params
        const body = await req.json()
        const updateVendors = await prisma.category.update({
            where:{
                id: parseInt(id)
            },
            data:{
                nama_kategori:body.nama_category,
                warna_category:body.warna_category,
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