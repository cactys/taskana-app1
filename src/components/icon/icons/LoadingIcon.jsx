/**
 * Иконка загрузки (Loading).
 *
 * @param {React.SVGProps<SVGSVGElement>} props - SVG-пропсы для элемента <svg>
 * @returns {JSX.Element} SVG-иконка загрузки
 */
export const LoadingIcon = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M12.07 6A6 6 0 1 0 18 12.07"
      />
    </svg>
  );
};
