'use client'


import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ArticlePage = () => {

    // récupérer la liste des articles SANS hooks
    // const articles = await db.article.findMany({
    //     orderBy: {
    //         createdAt: 'desc',
    //     },
    //     include: {
    //         tags: {
    //             include: {
    //                 tag: true
    //             }
    //         }
    //     }
    // })

    // récupérer la liste des articles AVEC hooks
    const [articles, setArticles] = useState<ArticleWithTagsAndComments[]>([])

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('api/article')
            const data: ArticleWithTagsAndComments[] = await response.json()
            setArticles(data)
        }

        fetchArticles()
    }, [])

     
    // const handleDelete = async (articleId : string) => {

    //     try{
    //        await fetch(`/api/article?articleId=${articleId}`, {
    //         method: 'DELETE',
    //     });
    //     setArticles((prev) => prev.filter((article) => article.id !== articleId ))
    //     } catch(error) {
    //         console.error('Error deleting article',  error)
    //     }

    //   }

    return (
        <>
            <h1 className='text-3xl mb-3 font-bold'>Blog</h1> 

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* Liste des articles */}
                {articles.map((article) => (
                    <Link key={article.id} href={`/article/${article.id}`}>
                        <ArticleCard article={ article }/>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default ArticlePage
