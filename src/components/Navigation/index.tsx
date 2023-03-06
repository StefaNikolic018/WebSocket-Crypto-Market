import React, { useCallback } from 'react'

import Item from './Item'
import useUserContext from '../../context/User/useUserContext'

import logo from '../../assets/favicon.ico'

const navItems = [
  { name: 'Home', url: '/' },
  { name: 'Favorites', url: '/favorites' }
]

const renderNavItems = (isLoggedIn: boolean) =>
  isLoggedIn ? (
    navItems.map((item) => <Item key={item.name} {...item} />)
  ) : (
    <Item name="Home" url="/" />
  )

export default function index() {
  const { isLoggedIn, setIsLoggedIn } = useUserContext()

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, [setIsLoggedIn])

  return (
    <nav className="flex items-center justify-between flex-wrap bg-sky-600 p-6 px-[8%]">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <img src={logo} className="w-10 h-10" />
      </div>
      <div className="flex-grow flex items-center justify-center w-auto">
        <div className="text-md md:text-xl mx-2 lg:flex-grow">
          {renderNavItems(isLoggedIn)}
        </div>
        {!isLoggedIn && (
          <button
            type="button"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-sky-700 hover:shadow-xl hover:text-sky-900 transition-all duration-300 hover:bg-sky-100 bg-white"
            onClick={login}
          >
            LOGIN
          </button>
        )}
      </div>
    </nav>
  )
}
