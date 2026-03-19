import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(){
    try{
        const data = await prisma.produk.findMany({
            include:{
                vendors:true,
                lokasi:true,
                kategori:true,
                unit:true
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