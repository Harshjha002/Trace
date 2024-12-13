import { patchIssueSchema } from "@/app/createIssueSchema";
import { auth } from "@/auth";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest,
    { params }: { params: Promise<{ id: string }> }) {

    // const session = await auth();

    // if (!session) {
    //     return NextResponse.json({}, { status: 401 })
    // }

    const { id } = await params;

    const body = await request.json();
    const validation = patchIssueSchema.safeParse(body)
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
    }

    const { assignedToUserId, title, description } = body

    if (assignedToUserId) {
        const user = await prisma.user.findUnique({ where: { id: assignedToUserId } })

        if (!user) {
            return NextResponse.json({ error: 'Invalid user' }, { status: 400 })
        }
    }

    const issue = await prisma.issue.findUnique({
        where: { id: parseInt(id, 10) }
    })

    if (!issue) return NextResponse.json({ error: 'Invalid issue' }, { status: 404 })

    const updatedIssue = await prisma.issue.update({
        where: { id: issue.id },
        data: {
            title,
            description,
            assignedToUserId
        }
    })

    return NextResponse.json(updatedIssue, { status: 201 })
}

export async function DELETE(request: NextRequest,
    { params }: { params: Promise<{ id: string }> }) {

    const session = await auth();

    if (!session) {
        return NextResponse.json({}, { status: 401 })
    }

    const { id } = await params;
    const issue = await prisma.issue.findUnique({
        where: { id: parseInt(id, 10) }
    })
    if (!issue) return NextResponse.json({ error: 'Invalid issue' }, { status: 404 })

    await prisma.issue.delete({
        where: { id: issue.id }
    });

    return NextResponse.json({})
}