'use client'


import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ArticlePage = () => {

    const [articles, setArticles] = useState<ArticleWithTagsAndComments[]>([])

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('api/article')
            const data: ArticleWithTagsAndComments[] = await response.json()
            setArticles(data)
        }

        fetchArticles()
    }, [])


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
