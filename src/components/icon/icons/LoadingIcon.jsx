const LoadingIcon = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
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

export default LoadingIcon;
