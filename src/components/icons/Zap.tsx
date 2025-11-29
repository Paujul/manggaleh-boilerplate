import * as React from 'react'
import type { SVGProps } from 'react'
const SvgZap = (props: SVGProps<SVGSVGElement>) => (
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
      d='M13 2 4.094 12.688c-.35.418-.524.628-.526.804a.5.5 0 0 0 .185.397c.138.111.41.111.955.111H12l-1 8 8.907-10.688c.349-.418.523-.628.526-.804a.5.5 0 0 0-.186-.397c-.138-.111-.41-.111-.955-.111H12z'
    />
  </svg>
)
export default SvgZap
