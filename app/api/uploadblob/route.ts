import  {blobstorage} from "@/actions/azureActions"
import { NextRequest, NextResponse } from "next/server";
export async function  POST (req:NextRequest){
    try {
        const body=await req.json();
        const {file}=body;
        if(!file){
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }
        const buffer=Buffer.from(file.data,"base64");
        const uploadBlobResponse=await blobstorage(new File([buffer],file.name))
        return NextResponse.json({ uploadBlobResponse }, { status: 200 });
    } catch (error) {
        return NextResponse.json({error:"Failed to upload file"});
    }
}