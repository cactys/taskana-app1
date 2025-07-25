/**
 * Иконка "Отмена" (крестик).
 *
 * @param {React.SVGProps<SVGSVGElement>} props - SVG-пропсы, передаваемые в элемент <svg>
 * @returns {JSX.Element} SVG-иконка
 */
export const CancelIcon = ({ ...props }) => {
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
        d="M7.05 7.05a1 1 0 0 1 1.414 0L12 10.586l3.536-3.536a1 1 0 1 1 1.414 1.414L13.414 12l3.536 3.536a1 1 0 0 1-1.414 1.414L12 13.414 8.464 16.95a1 1 0 0 1-1.414-1.414L10.586 12 7.05 8.464a1 1 0 0 1 0-1.414Z"
      />
    </svg>
  );
};
