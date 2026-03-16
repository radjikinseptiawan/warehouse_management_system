import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
export async function POST(req:NextRequest){
    try{
   const body = await req.json()
    const {email, name, password, role} = body

    const hashPassword = await bcrypt.hash(password,10)

    const data = await prisma.user.create({
        data:{
            email,
            password:hashPassword,
            name,
            role,
        }    
    })

    return NextResponse.json({
        data:data
    })
    }catch(e){
        return NextResponse.json({
            error:"error",
            message:e
        })
    }
 
}