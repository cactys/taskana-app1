/**
 * Иконка "Галочка" (подтверждение).
 *
 * @param {React.SVGProps<SVGSVGElement>} props - SVG-пропсы, передаваемые элементу <svg>
 * @returns {JSX.Element} SVG-иконка галочки
 */
export const CheckIcon = ({ ...props }) => {
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
        d="M18.564 7.506a.75.75 0 0 1-.07 1.058l-8 7a.75.75 0 0 1-.982.005l-3.5-3a.75.75 0 0 1 .976-1.138l3.007 2.577 7.511-6.572a.75.75 0 0 1 1.058.07Z"
      />
    </svg>
  );
};
