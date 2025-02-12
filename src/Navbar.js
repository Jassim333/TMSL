import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'

// Navigation links
const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Standings', to: '/standings' },
  { name: 'Schedule', to: '/schedule' },
]

// Utility to handle dynamic class names
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation(); // Current route path

  return (
    <Disclosure as="nav" className="bg-red-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Title - Centered on Mobile, Left-Aligned on Desktop */}
          <div className="flex-1 flex justify-center sm:justify-start">
            <h1 className="text-white text-lg sm:text-xl font-bold whitespace-nowrap">
              Tampa Muslim Soccer League
            </h1>
          </div>

          {/* Desktop Menu - Right-Aligned */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={classNames(
                  location.pathname === item.to
                    ? 'bg-gray-900 text-white' // Active tab style
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white', // Inactive tab style
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.to}
              className={classNames(
                location.pathname === item.to
                  ? 'bg-gray-900 text-white' // Active tab style
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white', // Inactive tab style
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
