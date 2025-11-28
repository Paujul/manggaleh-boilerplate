import * as React from "react";
import type { SVGProps } from "react";
const SvgEqualNot = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 9h14M5 15h14m0-10L5 19"
    />
  </svg>
);
export default SvgEqualNot;
