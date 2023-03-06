import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type DataT = {
  [key: string]: {
    text: string
    img: string
  }
}

const data: DataT = {
  '404': {
    text: "This page doesn't exist!",
    img: 'https://media.tenor.com/MNaVjxau80sAAAAd/imagination-mayor-of-imaginationland.gif'
  },
  auth: {
    text: 'You need to login first!',
    img: 'https://y.yarn.co/8205d0bb-7b7e-4c0c-ae43-32161bddd35a_text.gif'
  }
}

export default function Fallback({ type }: { type: string }) {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 8000)

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="w-screen flex flex-col justify-center items-center gap-5 mt-5">
      <h1 className="text-2xl animate-pulse font-bold">{data[type].text}</h1>
      <img
        src={data[type].img}
        alt="Cover"
        className="max-w-screen max-h-screen"
      />
    </div>
  )
}
