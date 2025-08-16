import Svg, { G, Path } from "react-native-svg";

export const SvgRun = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="run_svg__icon run_svg__icon-tabler run_svg__icons-tabler-outline run_svg__icon-tabler-run"
    {...props}
  >
    {/* Layer 1 */}
    <G stroke="#450a0a" strokeWidth={2}>
      <Path stroke="none" d="M0 0h24v24H0z" />
      <Path d="M12 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 17l5 1 .75-1.5M15 21v-4l-4-3 1-6" />
      <Path d="M7 12V9l5-1 3 3 3 1" />
    </G>

    {/* Layer 2 */}
    <G stroke="#7f1d1d" strokeWidth={2}>
      <Path stroke="none" d="M0 0h24v24H0z" />
      <Path d="M12 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 17l5 1 .75-1.5M15 21v-4l-4-3 1-6" />
      <Path d="M7 12V9l5-1 3 3 3 1" />
    </G>

    {/* Layer 3 */}
    <G stroke="#b91c1c" strokeWidth={2}>
      <Path stroke="none" d="M0 0h24v24H0z" />
      <Path d="M12 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 17l5 1 .75-1.5M15 21v-4l-4-3 1-6" />
      <Path d="M7 12V9l5-1 3 3 3 1" />
    </G>
  </Svg>
);
export default SvgRun;
