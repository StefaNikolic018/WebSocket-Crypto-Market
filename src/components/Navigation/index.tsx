import React, { useMemo } from 'react'

import Item from './Item'
import useUserContext from '../../context/User/useUserContext'

import logo from '../../assets/favicon.ico'

const navItems = [
  { name: 'Home', url: '/' },
  { name: 'Favorites', url: '/favorites' }
]

export default function index() {
  const { isLoggedIn, setIsLoggedIn } = useUserContext()

  const login = () => {
    setIsLoggedIn(true)
  }

  const navItemsArr = useMemo(() => {
    return isLoggedIn ? (
      navItems.map((item) => <Item key={item.name} {...item} />)
    ) : (
      <Item name="Home" url="/" />
    )
  }, [isLoggedIn])

  return (
    <nav className="flex flex-wrap items-center justify-between bg-sky-600 p-6 px-[8%]">
      <div className="flex-no-shrink mr-6 flex items-center text-white">
        <img src={logo} className="h-10 w-10" />
      </div>
      <div className="flex w-auto flex-grow items-center justify-center">
        <div className="text-md mx-2 md:text-xl lg:flex-grow">
          {navItemsArr}
        </div>
        {!isLoggedIn && (
          <button
            type="button"
            className="inline-block rounded border bg-white px-4 py-2 text-sm leading-none text-sky-700 transition-all duration-300 hover:bg-sky-100 hover:text-sky-900 hover:shadow-xl"
            onClick={login}
          >
            LOGIN
          </button>
        )}
      </div>
    </nav>
  )
}
