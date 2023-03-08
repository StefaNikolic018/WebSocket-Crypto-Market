/* eslint-disable no-extra-boolean-cast */
import React, { useState, useEffect, useMemo } from 'react'
import { storageInsert, storageSelect } from '../utils/storage'

export default function useFavorites() {
  const favs: any = useMemo(
    () =>
      !!storageSelect('favorites')
        ? JSON.parse(storageSelect('favorites')!)
        : [],
    [storageSelect('favorites')]
  )
  const [favorites, setFavorites] = useState<string[] | any[]>(favs)

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
