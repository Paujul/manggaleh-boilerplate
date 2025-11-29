import type { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  title: string
  desc: string
}

function Card({ icon, title, desc }: Props) {
  return (
    <div className='service-card'>
      {icon}

      <h4 className='text-2xl font-bold'>{title}</h4>

      <p>{desc}</p>
    </div>
  )
}

export default Card
