/* eslint-disable no-extra-boolean-cast */
import React from 'react'
import { useParams } from 'react-router-dom'

import Body from './Body'
import Header from './Header'
import useWebSocketContext from '../../context/WebSocket/useWebSocketContext'
import useFetchSpecific from '../../hooks/useFetchSpecific'

export default function index({ isSpecific = false }) {
  const { symbol } = useParams()
  console.log('simbol: ', symbol)

  const { isReady, pairs } = useWebSocketContext()
  const item = useFetchSpecific(symbol)

  return (
    <div className="overflow-x-auto w-full">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-start justify-center font-sans overflow-scroll">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto overflow-scroll">
              <Header isSpecific={isSpecific} />
              {isReady ? (
                <Body pairs={pairs} item={item} />
              ) : (
                <tbody>
                  <tr className="text-center">
                    <td>Loading...</td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
