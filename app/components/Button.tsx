'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

interface ButtonProp{
  saving:string;
  AddPost:string
}

const Button = ({saving, AddPost}:ButtonProp) => {
    const { pending } = useFormStatus()
  return (
    <button className='text-blue-500' type='submit' aria-disabled={pending}>
        {pending ? saving : AddPost}
    </button> 
  )
}
export default Button