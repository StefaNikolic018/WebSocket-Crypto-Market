import React from 'react'

export default function Header({ isSpecific = false }) {
  return (
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-6 text-left">Name</th>
        <th className="py-3 px-6 text-left">Last</th>
        {!isSpecific && (
          <>
            <th className="py-3 px-6 text-center">Change</th>
            <th className="py-3 px-6 text-center">Change Percent</th>
          </>
        )}
        <th className="py-3 px-6 text-center">High</th>
        <th className="py-3 px-6 text-center">Low</th>{' '}
      </tr>
    </thead>
  )
}
