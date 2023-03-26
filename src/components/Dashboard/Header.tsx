import React, { memo } from 'react'

const itemsArr = ['Symbol', 'Last', 'Change', 'Change Percent', 'High', 'Low']

const items = itemsArr.map((item, index) => (
  <th
    className={`py-3 px-2 md:px-6 ${
      index === 0 || index === 1 ? 'text-left' : 'text-center'
    }`}
  >
    Symbol
  </th>
))

const Header = () => {
  return (
    <thead>
      <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
        {items}
      </tr>
    </thead>
  )
}

export default memo(Header)
