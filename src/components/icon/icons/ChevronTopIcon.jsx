/**
 * Иконка "Chevron вверх".
 *
 * @param {React.SVGProps<SVGSVGElement>} props - SVG-пропсы, передаваемые элементу <svg>
 * @returns {JSX.Element} SVG-иконка стрелки вверх
 */
export const ChevronTopIcon = ({ ...props }) => {
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
        d="M18.576 14.98a.75.75 0 0 1-1.056.096L12 10.052l-5.52 5.024a.75.75 0 1 1-.96-1.152l6-5.424a.75.75 0 0 1 .96 0l6 5.424a.75.75 0 0 1 .096 1.056Z"
      />
    </svg>
  );
};
