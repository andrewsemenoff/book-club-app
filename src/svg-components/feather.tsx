import { AnimatedSvg } from "./feather.styles";

interface FeatherSvgProps {
  color?: string;
  size?: string;
  isAnimated?: boolean;
}

const FeatherSvg = ({
  color = "grey",
  size = "1.5em",
  isAnimated = false,
}: FeatherSvgProps) => {
  const svgAttributes = {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    cursor: "pointer",
  };

  const path = (
    <path d="M18.111 15.792c0.069-0.053 0.13-0.115 0.183-0.184l2.653-2.661c1.367-1.367 2.051-3.161 2.051-4.952s-0.684-3.585-2.051-4.952-3.161-2.051-4.952-2.051-3.585 0.684-4.952 2.051l-6.75 6.75c-0.195 0.195-0.293 0.451-0.293 0.707v8.086l-2.707 2.707c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.707-2.707h8.086c0.277 0 0.527-0.112 0.708-0.294zM9.414 16h5.665l-1.994 2h-5.671zM17.073 14h-5.659l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-9.293 9.293v-5.672l6.457-6.457c0.977-0.977 2.256-1.465 3.538-1.465s2.561 0.488 3.538 1.465 1.465 2.256 1.465 3.538-0.488 2.561-1.465 3.538z"></path>
  );

  return isAnimated ? (
    <AnimatedSvg {...svgAttributes}>{path}</AnimatedSvg>
  ) : (
    <svg {...svgAttributes}>{path}</svg>
  );
};
export default FeatherSvg;
