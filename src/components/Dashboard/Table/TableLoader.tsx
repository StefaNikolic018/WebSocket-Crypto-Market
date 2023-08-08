import React from 'react'
import Loader from '../../Loader'

const TableLoader = () => {
  return (
    <tr>
      <td
        className="animate-pulse py-3 text-center text-xl font-bold"
        colSpan={6}
      >
        <Loader />
      </td>
    </tr>
  )
}

export default TableLoader
