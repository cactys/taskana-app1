/**
 * Иконка "Chevron вниз".
 *
 * @param {React.SVGProps<SVGSVGElement>} props - SVG-пропсы, передаваемые элементу <svg>
 * @returns {JSX.Element} SVG-иконка стрелки вниз
 */
export const ChevronBottomIcon = ({ ...props }) => {
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
        d="M5.424 9.02a.75.75 0 0 1 1.056-.096l5.5 5.024 5.54-5.024a.75.75 0 0 1 .96 1.152L12.46 15.5a.75.75 0 0 1-.96 0l-5.98-5.424a.75.75 0 0 1-.096-1.056Z"
      />
    </svg>
  );
};
