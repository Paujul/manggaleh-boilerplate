import { Link } from 'react-router'

function NotFound() {
  return (
    <div className='mx-auto mb-12 w-[300px] rounded-xs border-[1.5px] border-black bg-inherit p-4 pb-6 font-["Archivo",_sans-serif] drop-shadow-[6px_4px_0px_#000000]'>
      <span className='ml-auto font-["Poppins",_sans-serif] font-bold'>
        Page not found
      </span>
      <p>
        Not sure if you typed something on the URL or just testing out, I only
        have 3 routes here :/
      </p>
      <Link
        to='/'
        className='mt-2 block border-2 border-black bg-[#90EE90] p-3 font-semibold drop-shadow-[6px_4px_0px_#000000] transition hover:drop-shadow-[3px_2px_0px_#000000] active:drop-shadow-none'
      >
        Click me or my username
      </Link>

      <span className='absolute -top-3 right-5 -rotate-[10deg] rounded-full bg-[#FF4911] px-2 font-medium text-white'>
        ERROR!
      </span>
    </div>
  )
}

export default NotFound
