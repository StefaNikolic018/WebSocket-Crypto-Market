import React from 'react'

export default function Header() {
  return (
    <thead>
      <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
        <th className="py-3 px-2 text-left md:px-6">Symbol</th>
        <th className="py-3 px-2 text-left md:px-6">Last</th>
        <th className="py-3 px-2 text-center md:px-6">Change</th>
        <th className="py-3 px-2 text-center md:px-6">Change Percent</th>
        <th className="py-3 px-2 text-center md:px-6">High</th>
        <th className="py-3 px-2 text-center md:px-6">Low</th>
      </tr>
    </thead>
  )
}
