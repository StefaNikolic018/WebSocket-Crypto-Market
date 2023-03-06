import React, { useMemo } from 'react'
import Header from './Header'
import Item from './Item'

export default function index({ isSpecific = false }) {
  const items = useMemo(
    () => [1, 2, 3].map((i, ind) => <Item key={ind} data={undefined} />),
    []
  )

  return (
    <div className="overflow-x-auto w-full">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-start justify-center font-sans overflow-scroll">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto overflow-scroll">
              <Header />
              <tbody className="text-gray-600 text-sm font-light">
                {items}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
