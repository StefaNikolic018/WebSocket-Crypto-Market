import React, { memo } from 'react'
import Header from './Header'

const TableWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-screen flex min-h-[80vh] items-start justify-center overflow-scroll font-sans lg:overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="my-6 rounded">
            <table className="w-full min-w-max table-auto">
              <Header />
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(TableWrapper)
