import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const ItemLink = ({ pair, symbol }: { pair: string; symbol: string }) => {
  return (
    <Link
      to={`/details/${pair}`}
      className="text-sky-700 transition-all duration-200 hover:text-sky-900"
    >
      {/* SYMBOL */}
      {symbol}
    </Link>
  )
}

export default memo(ItemLink)
