/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-extra-boolean-cast */
import React, { useMemo } from 'react'

import Item from './Item'
import useFavorites from '../../hooks/useFavorites'
import useWebSocketContext from '../../context/WebSocket/useWebSocketContext'

export default function Body({ isFavorites }: { isFavorites: boolean }) {
  const { favorites } = useFavorites()
  const { isReady, pairs } = useWebSocketContext()

  const items = useMemo(() => {
    // Parsing pairs object because of the dependency array
    const parsedPairs = pairs ? JSON.parse(String(pairs)) : {}
    const keys = !!parsedPairs
      ? Object.keys(parsedPairs).filter((key) =>
          isFavorites
            ? favorites.includes(parsedPairs[key].pair! as never)
            : true
        )
      : []

    return !!!keys.length ? (
      // If there is no data
      <tr>
        <td
          className="text-center font-bold py-3 text-xl animate-pulse"
          colSpan={6}
        >
          No data...
        </td>
      </tr>
    ) : (
      // If there is data
      keys.map((key: string) => <Item key={key} pair={parsedPairs[key]} />)
    )
  }, [pairs, favorites, isFavorites])

  return (
    <tbody className="text-gray-600 text-sm font-light bg-white shadow-md ">
      {isReady && items}
    </tbody>
  )
}
