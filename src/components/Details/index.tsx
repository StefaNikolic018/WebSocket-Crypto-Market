/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import useUserContext from '../../context/User/useUserContext'
import useFavorites from '../../hooks/useFavorites'

import useFetchSpecific from '../../hooks/useFetchSpecific'
import Button from './Button'

export default function index() {
  const { symbol } = useParams()
  const { isLoggedIn } = useUserContext()

  const item: any = useFetchSpecific(symbol)

  const { favorites, setFavorites } = useFavorites()

  const handleClick = useCallback(
    (isAddition) => {
      setFavorites((fav: string[]) =>
        isAddition ? [...fav, symbol] : fav.filter((f) => f !== symbol)
      )
    },
    [favorites.length, symbol]
  )

  return (
    <div className="overflow-x-auto w-full">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-start justify-center font-sans overflow-scroll">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto overflow-scroll">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Symbol</th>
                  <th className="py-3 px-6 text-left">Last</th>
                  <th className="py-3 px-6 text-center">High</th>
                  <th className="py-3 px-6 text-center">Low</th>{' '}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-100 text-md">
                  <td className="py-3 px-6 text-left font-bold ">{symbol!}</td>
                  <td className="py-3 font-semibold px-6 text-left">
                    {item?.last_price!}
                  </td>
                  <td className="py-3 font-semibold px-6 text-center">
                    {item?.low!}
                  </td>
                  <td className="py-3 font-semibold px-6 text-center">
                    {item?.high!}
                  </td>{' '}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full flex justify-center items-center my-5 bg-transparent">
            {isLoggedIn && (
              <Button
                isAddition={!favorites.includes(symbol!)}
                handle={handleClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
