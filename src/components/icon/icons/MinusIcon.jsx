/**
 * Иконка "Минус".
 *
 * @param {React.SVGProps<SVGSVGElement>} props - SVG-пропсы для элемента <svg>
 * @returns {JSX.Element} SVG-иконка минус
 */
export const MinusIcon = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.75 12a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75Z"
      />
    </svg>
  );
};
