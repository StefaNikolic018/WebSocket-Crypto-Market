import React from 'react'
import { RiAddBoxFill, RiDeleteBinFill } from 'react-icons/ri'

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
      {isAddition ? (
        <>
          <RiAddBoxFill className="text-green-500 text-lg inline-block mb-1 mr-2" />
          Add to{' '}
        </>
      ) : (
        <>
          <RiDeleteBinFill className="text-red-500 text-lg inline-block mb-1 mr-2" />
          Remove from{' '}
        </>
      )}
      favorites
    </button>
  )
}
