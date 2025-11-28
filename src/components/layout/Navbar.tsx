import { Link } from 'react-router'

import { paths } from '@/config/paths'

function Navbar() {
  const links = [
    {
      id: 2,
      label: 'Products',
      href: paths.app.dashboard.path,
    },
    {
      id: 3,
      label: 'About',
      href: '#',
    },
  ]

  return (
    <nav className='flex h-16 items-center bg-white'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link to={paths.home.path}>
          <h2 className='text-2xl font-bold'>Manggaleh Shop</h2>
        </Link>

        <div className='flex items-center gap-5 text-sm font-medium'>
          {links.map((item) => (
            <Link
              key={item.id}
              className='flex items-center gap-1.5 px-2 py-1 hover:cursor-pointer'
              to={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
