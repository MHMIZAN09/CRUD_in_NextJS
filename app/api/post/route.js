import { NextResponse } from "next/server";
import prisma from "../../../libs/prismadb.js";

export const POST = async (req) => {
    try {
        const body = await req.json();
        const { title, description} = body;
        const newPost = await prisma.post.create({
            data: {
                title,
                description
            },
        });
        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "POST Error", err }, { status: 500 });
    }
}

export const GET = async (req) => {
    try {
        const posts = await prisma.post.findMany()
        return NextResponse.json(posts,{
            status:201
        })
        
    } catch (error) {
        return NextResponse.json({ message: "GET Error", err }, { status: 500 });
    }
}