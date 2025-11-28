import { Outlet } from 'react-router'

import { Toaster } from '../ui/sonner'

import Footer from './Footer'
import Navbar from './Navbar'

const AppLayout = () => (
  <div className='flex min-h-[100dvh] flex-col bg-[#FCEEE3]'>
    <div
      id='main-container'
      className='container mx-auto my-24 rounded-3xl border-3 border-black bg-[#F9F5F2] p-12 drop-shadow-[6px_4px_0px_#000000]'
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    <Toaster position='top-right' expand={true} />
  </div>
)

export default AppLayout
