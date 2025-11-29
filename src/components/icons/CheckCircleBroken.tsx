import * as React from 'react'
import type { SVGProps } from 'react'
const SvgCheckCircleBroken = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M22 11.086v.92a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3'
    />
  </svg>
)
export default SvgCheckCircleBroken
