import React from 'react'

export default function Header() {
  return (
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th className="py-3 px-2 md:px-6 text-left">Symbol</th>
        <th className="py-3 px-2 md:px-6 text-left">Last</th>
        <th className="py-3 px-2 md:px-6 text-center">Change</th>
        <th className="py-3 px-2 md:px-6 text-center">Change Percent</th>
        <th className="py-3 px-2 md:px-6 text-center">High</th>
        <th className="py-3 px-2 md:px-6 text-center">Low</th>
      </tr>
    </thead>
  )
}
