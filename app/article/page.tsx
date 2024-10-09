'use client'


import ArticleCard from '@/components/ArticleCard'
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
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('api/article')
            const data = await response.json()
            setArticles(data)
        }

        fetchArticles()
    }, [])

    return (
        <>
            <h1 className='text-3xl mb-3 font-bold'>Blog</h1> 

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* Liste des articles */}
                {articles.map((article: any) => (
                   <ArticleCard key={article.id} article={ article }/>
                ))}
            </div>
        </>
    )
}

export default ArticlePage
