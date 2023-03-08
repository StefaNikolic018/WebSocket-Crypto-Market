/* eslint-disable no-extra-boolean-cast */
import React, { useMemo } from 'react'
import Item from './Item'

export default function Body({
  pairs,
  item
}: {
  pairs: string
  item: undefined | any
}) {
  // If home/favorites page is opened
  const items = useMemo(() => {
    const parsedPairs = JSON.parse(pairs)
    const keys = !!parsedPairs ? Object.keys(parsedPairs) : []
    console.log(parsedPairs)
    return keys.map((key: string) => <Item key={key} pair={parsedPairs[key]} />)
  }, [pairs])

  // If detailed page is opened
  const detailedItem = useMemo(
    () =>
      !!item ? (
        <tr className="border-b border-gray-200 hover:bg-gray-100 text-md">
          <td className="py-3 px-6 text-left font-bold ">{item.symbol}</td>
          <td className="py-3 font-semibold px-6 text-left">
            {item.last_price}
          </td>
          <td className="py-3 font-semibold px-6 text-center">{item.low}</td>
          <td className="py-3 font-semibold px-6 text-center">
            {item.high}
          </td>{' '}
        </tr>
      ) : (
        <tr></tr>
      ),
    [item]
  )

  return (
    <tbody className="text-gray-600 text-sm font-light">
      {item ? detailedItem : items}
    </tbody>
  )
}
