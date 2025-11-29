import SvgFile06 from '@/components/icons/File06'
import SvgMail01 from '@/components/icons/Mail01'

function Home() {
  return (
    <div className='archivo flex flex-col'>
      <span className='text-[#464646]'>Hi, my name is Fauzul Ashari</span>
      <h1 className='poppins my-6 w-[50%] text-6xl font-extrabold'>
        I AM A FRONT-END DEVELOPER
      </h1>
      <p className='text-2xl'>
        I build apps using modern stacks & libraries, integrate arrays of
        objects, translating business requirements into codes, turn ideas into
        products, solve problems, and do some CodeWars or an easy to medium
        LeetCode.
      </p>

      <div className='mt-7 flex gap-4'>
        <a
          href='mailto:p4ujul@gmail.com'
          target='_blank'
          rel='noreferrer'
          className='hover:neu-shadow flex w-[300px] items-center justify-center gap-4 rounded-full border-2 border-black bg-[#F4D738] p-3 text-center text-xl font-semibold transition hover:cursor-pointer'
        >
          <SvgMail01 /> Get in touch!
        </a>
        <a
          href='/assets/Muhammad%20Fauzul%20Ashari-Frontend.pdf'
          target='_blank'
          rel='noreferrer'
          className='hover:neu-shadow flex w-[300px] items-center justify-center gap-4 rounded-full border-2 border-black bg-[#90EE90] p-3 text-center text-xl font-semibold transition hover:cursor-pointer'
        >
          <SvgFile06 /> Resume
        </a>
      </div>
    </div>
  )
}

export default Home
