import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Item({ name, url }: { name: string; url: string }) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
    >
      {name}
    </NavLink>
  )
}
