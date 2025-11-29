import { Link } from 'react-router'

function NotFound() {
  return (
    <div className='neu-shadow archivo mx-auto mb-12 w-[300px] rounded-xs border-[1.5px] border-black bg-inherit p-4 pb-6'>
      <span className='poppins ml-auto font-bold'>Page not found</span>
      <p>
        The page is either still in development or not found
      </p>
      <Link
        to='/'
        className='neu-shadow mt-2 block border-2 border-black bg-[#90EE90] p-3 font-semibold transition hover:drop-shadow-[3px_2px_0px_#000000] active:drop-shadow-none'
      >
        Click me or my username
      </Link>

      <span className='absolute -top-3 right-5 -rotate-10 rounded-full bg-[#FF4911] px-2 font-medium text-white'>
        ERROR!
      </span>
    </div>
  )
}

export default NotFound
