import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: {articleId: string }})
{
     const { articleId } = params;
     // = const articleId = params.articleId;

     

}