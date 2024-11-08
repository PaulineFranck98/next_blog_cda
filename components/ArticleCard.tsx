import React from 'react'
import { formatDate } from '@/lib/utils'
// import Button from './Button'
import Tag from './Tag'

interface ArticleCardProps {
    article: ArticleWithTagsAndComments
}

const ArticleCard:React.FC<ArticleCardProps> = ( { article }) => {


  return (
        <div className='group border border-slate-500 p-6 rounded-md hover:bg-slate-700 cursor-pointer hover:-translate-y-1 duration-300' key={ article.id }>
            <h2 className='text-xl font-bold text-emerald-300'>{ article.title }</h2>
            <p className='text-sm text-slate-300'>{ formatDate(article.createdAt)}</p>
            <div className='flex fex-wrap gap-2 my-4'>
                {article.tags.map((tagArticle) => (
                    <Tag key={tagArticle.tag.id} text={tagArticle.tag.name }/>
                ))}
            </div>
            {/* texte de l'article */}
            <p className='line-clamp-4'>{ article.text }</p>

        </div>
    )
}

export default ArticleCard
