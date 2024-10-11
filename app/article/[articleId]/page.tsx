'use client'

import Comment from '@/components/Comment'
import Tag from '@/components/Tag'
import { useRouter } from 'next/navigation'
// import { formatDate } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

const ArticleDetailPage = ({ params }: { params: {articleId: string } }) => {
  
  const [article, setArticle] = useState<ArticleWithTagsAndComments | null>(null)
  const router = useRouter();

  useEffect(() => {
    const fetchArticle = async () => {
        const response  = await fetch(`/api/article/${params.articleId}`) 
        const data: ArticleWithTagsAndComments = await response.json()
        setArticle(data)
    }
    fetchArticle()
  }, [params.articleId])

    // suppression de l'article
    const handleDelete = async (articleId : string) => {
        const confirmed = window.confirm('Are you sure you want to delete this?')
        if(!confirmed){
            return;
        }
        try{
           const response = await fetch(`/api/article/${articleId}/delete`, {
            method: 'DELETE',
        });

        if(response.ok){
            
        // redirection vers la liste des articles
        router.push('/article');
        }
        
        } catch(error) {
            console.error('Error deleting article',  error)
        }
    }


    const handleCommentDelete = async (commentId: string) => {

        const confirmed = window.confirm('Are you sure you want to delete this?')
        if(!confirmed){
            return;
        }

        try {
            await fetch(`/api/comment/${commentId}/delete`, {
                method: 'DELETE',
            });
            setArticle({
                ...article!,
                comments: article!.comments.filter((comment) => comment.id !== commentId)
            });
        } catch(error) {
            console.error('Error deleting comment', error);
        }
    }
      
    return (
        
        <div>
            {article && (
                <div className='border border-slate-700 p-6 rounded-md'>
                    <h1 className='text-2xl font-bold mb-5'>{ article.title }</h1>
                    <div className='my-5 flex flex-wrap gap-3'>
                        { article.tags.map((tagArticle: TagArticleType) => (
                            <Tag key={tagArticle.tag.id} text={tagArticle.tag.name} />
                        ))}
                    </div>
                    <p className='text-justify'>{ article.text }</p>
                    <button onClick={() => handleDelete(article.id)}>Supprimer</button>

                    <h2 className='text-xl font-bold my-5'>Comments ({article.comments.length})</h2>
                    {article.comments && article.comments.length > 0 ? (
                        <div className='flex flex-col gap-5'>
                            { article.comments.map((comment: CommentType) => (
                                <Comment key={comment.id} comment={comment} onDelete={() => handleCommentDelete(comment.id)}/>
                            ))}
                        </div>
                    ) : (
                        <p>No comments</p>
                    )}
                </div>
            )}
        </div>
    )

}

export default ArticleDetailPage
