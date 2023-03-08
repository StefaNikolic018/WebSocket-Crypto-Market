import React from 'react'

import Body from './Body'
import Header from './Header'

export default function index({ isFavorites = false }) {
  return (
    <div className="overflow-x-auto w-full">
      <div className="min-w-screen min-h-[80vh] flex items-start justify-center font-sans overflow-scroll lg:overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="rounded my-6">
            <table className="min-w-max w-full table-auto">
              <Header />
              <Body isFavorites={isFavorites} />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
