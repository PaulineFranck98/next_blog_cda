import React from 'react'
import { formatDate } from '@/lib/utils'
import { Trash2Icon, User2Icon, CalendarDaysIcon } from 'lucide-react';


interface CommentProps {
    comment: CommentType;
    onDelete: () => void;
}

const Comment:React.FC<CommentProps> = ( {comment, onDelete }) => {


  return (
    
      <div className='border border-slate-700 p-6 rounded-md flex justify-between bg-slate-700 '>
          <div>
            <p className='flex items-baseline gap-1'><User2Icon size={14} />User : {comment.userId}</p>
            <p className='text-sm text-slate-300 flex items-baseline gap-1'><CalendarDaysIcon size={14} />{ formatDate(comment.createdAt)}</p>
            <p>{comment.text}</p>
          </div>
          <div>
            <button onClick={onDelete} className='bg-red-500 px-5 py-1 rounded-md text-sm flex gap-2 items-center'><Trash2Icon size={15} />Delete</button>
          </div>
     </div>
    
  )
}

export default Comment
