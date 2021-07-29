import { CSSProperties } from "react";


interface GridProps {
  width: number,
  height: number,
  className?: string,
  n: number,
  color: string,
  style?: CSSProperties
}
export function GridThing(props: GridProps) {
  return (
    <svg className={props.className} style={props.style} width={props.width} height={props.height} fill={props.color}>
      {new Array(props.n).fill(0).map((_, i) =>
        (new Array(props.n).fill(0).map((__, j) => <circle cx={(i + 1) * (props.width / (props.n + 1))} cy={(j + 1) * (props.height / (props.n + 1))} r={1 + 3 * Math.sin(i * Math.PI / props.n) * Math.sin(j * Math.PI / props.n)} />))
      )}
    </svg>
  )
}