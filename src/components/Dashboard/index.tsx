/* eslint-disable no-extra-boolean-cast */
import React from 'react'

import Body from './Body'
import Header from './Header'
import useWebSocketContext from '../../context/WebSocket/useWebSocketContext'

export default function index({ isFavorites = false }) {
  const { isReady, pairs } = useWebSocketContext()

  return (
    <div className="overflow-x-auto w-full">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-start justify-center font-sans overflow-scroll">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto overflow-scroll">
              <Header />
              {isReady ? (
                <Body pairs={pairs} isFavorites={isFavorites} />
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
