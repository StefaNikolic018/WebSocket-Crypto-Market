/* eslint-disable no-extra-boolean-cast */
import React, { useMemo } from 'react'

import Item from './Item'
import useFavorites from '../../hooks/useFavorites'

export default function Body({
  pairs,
  isFavorites
}: {
  pairs: string
  isFavorites: boolean
}) {
  const { favorites } = useFavorites()
  // If home/favorites page is opened
  const items = useMemo(() => {
    const parsedPairs = JSON.parse(pairs)
    const keys = !!parsedPairs
      ? Object.keys(parsedPairs).filter((key) =>
          isFavorites ? favorites.includes(parsedPairs[key].pair) : true
        )
      : []

    console.log('favoriti: ', parsedPairs)
    return keys.map((key: string) => <Item key={key} pair={parsedPairs[key]} />)
  }, [pairs, favorites, isFavorites])

  return <tbody className="text-gray-600 text-sm font-light">{items}</tbody>
}
