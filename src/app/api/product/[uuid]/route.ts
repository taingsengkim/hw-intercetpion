import { error } from "console"
import { NextRequest, NextResponse } from "next/server"

export async function GET(  request: NextRequest,
{params}:{params:Promise<{uuid:string}>}){
    const {uuid} = await params
    const res = await fetch(`${process.env.BASE_ISHOP_API_URL}/products/${uuid}`)
    const data = await res.json()
    console.log("DATA DETAIL : ",data)
    if(res?.ok){
        return NextResponse.json({
            success:true,
            data
        })
    }
    return NextResponse.json({
        error:"Failed to fetching product detail",
        status:500
    })
}