/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-extra-boolean-cast */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect, useMemo } from 'react'
import { storageInsert, storageSelect } from '../utils/storage'

export default function useFavorites() {
  const favs: string[] = useMemo(
    () => JSON.parse(storageSelect('favorites')!) || [],
    [storageSelect('favorites')]
  )
  const [favorites, setFavorites] = useState<string[] | []>(favs)

  useEffect(() => {
    if (favorites) {
      storageInsert(
        'favorites',
        typeof favorites === 'string'
          ? favorites
          : JSON.stringify([...favorites])
      )
    }
  }, [favorites.length])

  return { favorites, setFavorites }
}
