import { Outlet } from 'react-router'

import { Toaster } from '../ui/sonner'

import Navbar from './Navbar'

const AppLayout = () => (
  <div className='app-layout'>
    <div
      id='main-container'
      className='container m-auto mt-12 rounded-3xl border-3 border-black bg-[#F9F5F2] p-12 drop-shadow-[6px_4px_0px_#000000]'
    >
      <Navbar />
      <Outlet />
    </div>
    <Toaster position='top-right' expand={true} />
  </div>
)

export default AppLayout
