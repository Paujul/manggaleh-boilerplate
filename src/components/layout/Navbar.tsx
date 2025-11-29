import { Link } from 'react-router'

import { paths } from '@/config/paths'
import SvgBuilding05 from '../icons/Building05'
import SvgMessageQuestionCircle from '../icons/MessageQuestionCircle'

function Navbar() {
  const links = [
    {
      id: 1,
      label: 'About',
      icon: <SvgMessageQuestionCircle />,
      href: paths.app.about.path,
    },
    {
      id: 2,
      label: 'What I Do',
      icon: <SvgBuilding05 />,
      href: paths.app.myServices.path,
    },
  ]

  return (
    <nav className='archivo mb-12 flex h-16 items-center'>
      <Link to='/'>
        <h3 className='poppins text-2xl font-bold'>@paujul</h3>
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
