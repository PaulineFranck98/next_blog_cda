import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET () {
    try{
        // récupérer la liste des articles 
        const articles = await db.article.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                tags: {
                    include: {
                        tag: true
                    }
                }
            }
        })

        // Retourne une réponse au format JSON
        return NextResponse.json(articles)

    } catch (error) {
        console.log("[ARTICLES]", error)
        return new NextResponse("Internal Error", { status: 500})
    }
}


// export async function DELETE(req: NextRequest)
// {
//      // extract the articleId from the query parameters
//     const { searchParams } = new URL(req.url);
//     const articleId = searchParams.get('articleId');

//     if(!articleId){
//         return NextResponse.json({ message: 'Article ID is required' }, { status : 400 });
//     }

//     try{
//         // supprimer un article spécifique
//         const deletedArticle = await db.article.delete({
//             where : {
//                 id: articleId
//             },
//         });

//         if(!deletedArticle) {
//             return NextResponse.json({ message: "Article not found" }, { status: 400 })
//         }
//         // Retourne une réponse au format JSON
//         return NextResponse.json(
//             { message : "Article deleted successfully", deletedArticle},
//             { status : 200 }
//         )

//     } catch (error) {
//         console.log("[DELETED ARTICLE]", error)
//         return new NextResponse("Internal Error", { status: 500})
//     }
// }