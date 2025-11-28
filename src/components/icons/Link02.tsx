import * as React from "react";
import type { SVGProps } from "react";
const SvgLink02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17H7A5 5 0 0 1 7 7h2m6 10h2a5 5 0 0 0 0-10h-2m-8 5h10"
    />
  </svg>
);
export default SvgLink02;
