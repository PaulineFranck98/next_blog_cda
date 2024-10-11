import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: {articleId: string }})
{
     const { articleId } = params;
     // = const articleId = params.articleId;

     if(!articleId){
        return NextResponse.json({message : "Article ID is required"}, { status : 400 })
     }

     try{
        // supprimer les commentaires associés
        await db.comment.deleteMany({
            where:{
                articleId: articleId,
            }
        })

        // supprimer un article spécifique
        const deletedArticle = await db.article.delete({
            where : {
                id: articleId
            }
        })

        // Retourne une réponse au format JSON
        return NextResponse.json(
            { message : "Article deleted successfully", deletedArticle},
            { status : 200 }
        )

    } catch (error) {
        console.log("[DELETED ARTICLE]", error)
        return new NextResponse("Internal Error", { status: 500})
    }
}