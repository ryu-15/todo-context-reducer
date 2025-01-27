import React from "react";

type CheckboxIconProps = {
  status: boolean;
};

const CheckboxIcon: React.FunctionComponent<CheckboxIconProps> = ({ status }) => {
  return (
    <svg
      width='30px'
      height='30px'
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h48v48H0z" fill="none" />
      <g id="Shopicon">
        <polygon points="31.048,12 31.048,8 8,8 8,40 40,40 40,20.655 36,20.655 36,36 12,36 12,12" />
        {status ? (
          <polygon
            points="24,24.172 17,17.172 14.171,20 21.172,27 21.171,27 24,29.828 26.828,27 43.828,10 41,7.172"
          />
        ) : null}
      </g>
    </svg>
  );
};

export default CheckboxIcon;
