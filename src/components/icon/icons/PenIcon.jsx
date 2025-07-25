/**
 * Иконка "Ручка" (PenIcon).
 *
 * @param {React.SVGProps<SVGSVGElement>} props - Свойства SVG, например className, style, aria-атрибуты и т.п.
 * @returns {JSX.Element} SVG-иконка
 */
export const PenIcon = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 24}
      height={props.height ?? 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M15.347 4.587 13.832 6.1l4.067 4.066 1.514-1.514a2.001 2.001 0 0 0 0-2.83l-1.232-1.236a2.002 2.002 0 0 0-2.831 0h-.003Zm-2.222 2.22-7.292 7.295a2.774 2.774 0 0 0-.694 1.17L4.03 19.035a.75.75 0 0 0 .93.936l3.763-1.108c.44-.13.844-.369 1.17-.694l7.298-7.295-4.067-4.066Z" />
    </svg>
  );
};
