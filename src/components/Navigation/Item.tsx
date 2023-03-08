import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({ name, url }: { name: string; url: string }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
    >
      {name}
    </NavLink>
  )
}

export default memo(Item)
