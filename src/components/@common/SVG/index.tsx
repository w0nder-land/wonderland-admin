import React from 'react';

export interface ISVG extends React.SVGProps<SVGSVGElement> {
  title: string;
  width: string;
  height: string;
  weight?: string;
}

function SVG({ title, width, height, children, ...rest }: ISVG) {
  return (
    <svg width={width} height={height} {...rest}>
      <title>{title}</title>
      {children}
    </svg>
  );
}

export default SVG;
