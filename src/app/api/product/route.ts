import { NextResponse } from "next/server";

export async function GET(){
    //logic on fetching data
    const response = await fetch(`${process.env.BASE_ISHOP_API_URL}/products?size=36`);
    const data = await response.json();
    // console.log("GET DATA : ",data)
    if(response?.ok){
        return NextResponse.json({
            success:true,
            data
        })
    }
    return NextResponse.json({error:"Failed to fetch product data."},{status:500})
}