import Link from 'next/link';
import React from 'react'

interface ButtonProps {
    label: string;
    href: string;
}

const Button:React.FC<ButtonProps> = ({ label, href }) => {
    return (
         <Link className='px-5 py-2 mt-3 bg-cyan-900 hover:bg-cyan-800 cursor-pointer rounded-lg'
            href={href}>
            { label }
         </Link>
    )
}

export default Button
