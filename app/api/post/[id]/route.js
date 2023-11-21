import { NextResponse } from "next/server";
import prisma from "../../../../libs/prismadb.js";

export const GET = async (req, { params }) => {
    try {
        const { id } = params;

        const post = await prisma.post.findUnique({
            where: {
                id
            }
        });
        if (!post) {
            return NextResponse.json(
                { message: 'Post not Found', err },
                { status: 404 }
            )
        }
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({ message: 'GET Error', error }, { status: 500 })
    }
}

export const PATCH = async (req, { params }) => {
    try {
        const body = await req.json();
        const { title, description } = body;
        const { id } = params;
        const updatePost = await prisma.post.update(
            {
                where: {
                    id
                },
                data: {
                    title,
                    description
                }
            }
        )

        if (!updatePost) {
            return NextResponse.json(
                { messgae: 'POST not Found', err },
                { status: 404 }
            )
        }
    } catch (error) {
        return NextResponse.json({ message: 'GET Error', error }, { status: 500 })
    }
}

export const DELETE = async (req, { params }) => {
    try {
        const { id } = params;
        await prisma.post.delete({
            where: {
                id
            }
        })
        return NextResponse.json("POST has been Deleted")
    } catch (error) {
        return NextResponse.json({ message: 'Delete Error', err }, { status: 500 })
    }
}