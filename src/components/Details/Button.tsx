import React from 'react'
import { RiAddBoxFill, RiDeleteBinFill } from 'react-icons/ri'

export default function Button({
  handle,
  isAddition
}: {
  handle: (isAddition: boolean) => void
  isAddition: boolean
}) {
  // Handle adding or removing from favorites based on flag
  const handleClick = () => {
    handle(isAddition)
  }

  const icon = isAddition ? (
    <>
      <RiAddBoxFill className="mb-1 mr-2 inline-block text-lg text-green-500" />
      Add to{' '}
    </>
  ) : (
    <>
      <RiDeleteBinFill className="mb-1 mr-2 inline-block text-lg text-red-500" />
      Remove from{' '}
    </>
  )

  return (
    <button
      onClick={handleClick}
      className={`rounded-md py-2 px-4 transition-all duration-200 hover:shadow-xl ${
        isAddition
          ? 'bg-green-300 hover:bg-green-200'
          : 'bg-red-300 hover:bg-red-200'
      }`}
    >
      {icon}
      favorites
    </button>
  )
}
