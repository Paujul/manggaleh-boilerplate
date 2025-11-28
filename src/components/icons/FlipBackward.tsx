import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipBackward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 9h13.5a4.5 4.5 0 1 1 0 9H12M3 9l4-4M3 9l4 4"
    />
  </svg>
);
export default SvgFlipBackward;
