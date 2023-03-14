/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom'

import Button from './Button'
import useFavorites from '../../hooks/useFavorites'
import useFetchSpecific from '../../hooks/useFetchSpecific'
import useUserContext from '../../context/User/useUserContext'

type ItemT = {
  ask: string
  bid: string
  high: string
  last_price: string
  low: string
  mid: string
  timestamp: string
  volume: string
}

export default function index() {
  const { symbol } = useParams()
  const { isLoggedIn } = useUserContext()

  const item: ItemT | undefined = useFetchSpecific(symbol)

  const { favorites, setFavorites } = useFavorites()

  // Callback function for handling favorite pairs
  const handleClick = useCallback(
    (isAddition) => {
      if (symbol) {
        setFavorites((fav: string[]) =>
          isAddition ? [...fav, symbol] : fav.filter((f) => f !== symbol)
        )
      }
    },
    [favorites.length, symbol]
  )

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-screen flex min-h-screen items-start justify-center overflow-scroll bg-gray-100 font-sans">
        <div className="lg:w-5/6">
          <div className="my-6 rounded bg-white shadow-md">
            <table className="w-full min-w-max table-auto overflow-scroll">
              <thead>
                <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                  <th className="py-3 px-6 text-left">Symbol</th>
                  <th className="py-3 px-6 text-left">Last</th>
                  <th className="py-3 px-6 text-center">High</th>
                  <th className="py-3 px-6 text-center">Low</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-md border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left font-bold ">{symbol!}</td>
                  <td className="py-3 px-6 text-left font-semibold">
                    {item?.last_price!}
                  </td>
                  <td className="py-3 px-6 text-center font-semibold">
                    {item?.low!}
                  </td>
                  <td className="py-3 px-6 text-center font-semibold">
                    {item?.high!}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-5 flex w-full items-center justify-center bg-transparent">
            {isLoggedIn && (
              <Button
                isAddition={!favorites.includes(symbol! as never)}
                handle={handleClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
