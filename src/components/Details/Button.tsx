import React from 'react'

export default function Button({
  handle,
  isAddition
}: {
  handle: any
  isAddition: boolean
}) {
  const handleClick = () => {
    handle(isAddition)
  }
  return (
    <button
      onClick={handleClick}
      className={`py-2 px-4 rounded-md hover:shadow-xl transition-all duration-200 ${
        isAddition
          ? 'bg-green-300 hover:bg-green-200'
          : 'bg-red-300 hover:bg-red-200'
      }`}
    >
      {isAddition ? 'Add to ' : 'Remove from '}favorites
    </button>
  )
}
