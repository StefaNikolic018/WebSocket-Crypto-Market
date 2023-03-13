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
          className="animate-pulse py-3 text-center text-xl font-bold"
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
    <tbody className="bg-white text-sm font-light text-gray-600 shadow-md ">
      {isReady && items}
    </tbody>
  )
}
