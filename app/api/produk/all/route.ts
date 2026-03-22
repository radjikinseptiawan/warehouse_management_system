import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function GET(){
        // Mengecek Session untuk mencegah kebocorand ata
        const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.json({
                message:"Unauthorize",
            },{status:401})
        }
    
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