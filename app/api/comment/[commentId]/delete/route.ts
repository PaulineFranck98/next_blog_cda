import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: {commentId: string }})
{
     const { commentId } = params;
     // = const commentId = params.commentId;

     if(!commentId){
        return NextResponse.json({message : "Comment ID is required"}, { status : 400 })
     }

     try{

        // supprimer un commentaire spécifique
        const deletedComment = await db.comment.delete({
            where : {
                id: commentId
            }
        })

        // Retourne une réponse au format JSON
        return NextResponse.json(
            { message : "Comment deleted successfully", deletedComment},
            { status : 200 }
        )

    } catch (error) {
        console.log("[DELETED COMMENT]", error)
        return new NextResponse("Internal Error", { status: 500})
    }
}