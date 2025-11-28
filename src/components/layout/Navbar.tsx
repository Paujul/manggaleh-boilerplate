import { HelpCircle } from 'lucide-react'
import { Link } from 'react-router'

import { paths } from '@/config/paths'

function Navbar() {
  const links = [
    {
      id: 1,
      label: 'About',
      icon: <HelpCircle />,
      href: paths.app.about.path,
    },
    {
      id: 2,
      label: 'What I Do',
      icon: <HelpCircle />,
      href: '#',
    },
  ]

  return (
    <nav className='mb-12 flex h-16 items-center font-["Archivo",_sans-serif]'>
      <Link to='/'>
        <h3 className='font-["Poppins",_sans-serif] text-2xl font-bold'>
          @paujul
        </h3>
      </Link>

      <div className='ml-auto flex items-center gap-5 text-sm font-medium'>
        {links.map((item) => (
          <Link
            key={item.id}
            className='flex items-center gap-1.5 px-2 py-1 hover:cursor-pointer'
            to={item.href}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
