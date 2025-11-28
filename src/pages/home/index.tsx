function Home() {
  return (
    <div className='flex flex-col font-["Archivo",_sans-serif]'>
      <span className='text-[#464646]'>Hi, my name is Fauzul Ashari</span>
      <h1 className='my-6 w-[50%] font-["Poppins",_sans-serif] text-6xl font-extrabold'>
        I AM A FRONT-END DEVELOPER
      </h1>
      <p>
        I build apps with modern stacks & libraries, integrate arrays of
        objects, translating business requirements into codes, turn ideas into
        products, solve problems, and do some CodeWars or an easy to medium
        LeetCode.
      </p>

      <a
        href='mailto:p4ujul@gmail.com'
        className='mt-7 w-[300px] rounded-full border-2 border-black bg-[#F4D738] p-3 text-center text-xl font-semibold transition hover:cursor-pointer hover:drop-shadow-[6px_4px_0px_#000000]'
      >
        Get in touch!
      </a>
    </div>
  )
}

export default Home
