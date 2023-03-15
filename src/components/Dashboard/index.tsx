import React from 'react'

import Body from './Body'
import Header from './Header'
import { WebSocketContextProvider } from '../../context/WebSocket/WebSocketContextProvider'

export default function index({ isFavorites = false }) {
  return (
    <WebSocketContextProvider>
      <div className="w-full overflow-x-auto">
        <div className="min-w-screen flex min-h-[80vh] items-start justify-center overflow-scroll font-sans lg:overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="my-6 rounded">
              <table className="w-full min-w-max table-auto">
                <Header />
                <Body isFavorites={isFavorites} />
              </table>
            </div>
          </div>
        </div>
      </div>
    </WebSocketContextProvider>
  )
}
