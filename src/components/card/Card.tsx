import type { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  title: string
  desc: string
}

function Card({ icon, title, desc }: Props) {
  return (
    <div className='neu-shadow flex flex-1 grow flex-col gap-3 rounded-2xl border-2 border-black bg-white px-4 py-6 font-["Archivo",_sans-serif]'>
      {icon}

      <h4 className='text-2xl font-bold'>{title}</h4>

      <p>{desc}</p>
    </div>
  )
}

export default Card
