import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


// Menghapus Category
export async function DELETE(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try{
    const {id} = await params

    const deleteCategory = await prisma.satuan.delete({
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

export async function GET(_req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try{
        const { id } = await params

        const data = await prisma.satuan.findFirst({
            where:{
                id:parseInt(id)
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

export async function PATCH(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try{
        const { id } = await params
        const body = await req.json()
        const updateVendors = await prisma.satuan.update({
            where:{
                id: parseInt(id)
            },
            data:{
                nama_satuan:body.nama_satuan
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