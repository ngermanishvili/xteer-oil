import React from "react";

export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Lock = ({ fill, size, height, width, ...props }) => {
  const color = fill;

  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(3.5 2)">
        <path
          d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(3.85 0.75)"
        />
        <path
          d="M.5,0V2.221"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(7.91 12.156)"
        />
        <path
          d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(0.75 6.824)"
        />
      </g>
    </svg>
  );
};

export const Activity = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      height={size || 24}
      viewBox="0 0 512 512"
      width={size || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M265.751 16.17c60.021 0 108.862 48.846 108.862 108.867 0 60.016-48.849 108.853-108.862 108.853s-108.862-48.836-108.862-108.853C156.888 65.015 205.73 16.17 265.751 16.17zm4.842 147.519c0 15.122 12.322 27.42 27.424 27.42 15.15 0 27.424-12.298 27.424-27.42 0-15.117-12.274-27.424-27.424-27.424-15.102 0-27.424 12.307-27.424 27.424zm38.595 0c0-6.151-4.986-11.161-11.171-11.161-6.137 0-11.171 5.01-11.171 11.161s5.034 11.162 11.171 11.162c6.185 0 11.171-5.011 11.171-11.162zm-91.046 13.233c-2.829 3.893-1.918 9.311 1.966 12.106 3.883 2.805 9.301 1.923 12.082-1.97l81.266-113.086c2.781-3.879 1.918-9.311-1.966-12.106-3.883-2.805-9.301-1.923-12.13 1.975l-81.218 113.081zm15.342-63.129c15.102 0 27.424-12.298 27.424-27.419 0-15.117-12.322-27.424-27.424-27.424-15.103 0-27.424 12.307-27.424 27.424 0 15.122 12.322 27.419 27.424 27.419zm0-38.58c-6.137 0-11.171 5.01-11.171 11.161 0 6.146 5.034 11.157 11.171 11.157s11.171-5.01 11.171-11.157c0-6.151-5.034-11.161-11.171-11.161zM131.422 475.297c-.457 1.601-1.473 2.937-2.896 3.745l-28.253 15.987c-2.947 1.681-6.758.635-8.435-2.348L8.806 345.963c-1.677-2.973-.66-6.768 2.338-8.461l28.253-15.981a6.037 6.037 0 0 1 2.998-.788c.559 0 1.118.077 1.677.224 1.626.452 2.948 1.479 3.76 2.912l83.031 146.717a6.094 6.094 0 0 1 .559 4.711zm364.193-130.57c8.486-5.204 11.077-20.479 5.234-30.26-8.486-14.167-30.946-12.495-60.113 4.482l-79.631 46.381c-15.346 8.964-31.912 11.865-50.560 8.878a339.242 339.242 0 0 1-10.061-1.769c-.711-.051-62.756-16.179-69.87-18.095-4.624-1.23-7.368-5.955-6.098-10.544 1.22-4.604 5.946-7.327 10.519-6.098 7.266 1.946 51.272 14.421 67.787 17.633 8.435.539 18.242-1.809 21.596-14.228 2.744-10.184-3.252-20.524-13.974-24.239-30.133-5.518-59.25-16.032-82.625-24.497-8.181-2.953-15.244-5.503-21.342-7.485-19.208-6.23-37.451 1.946-54.270 11.707L76.9 340.223l50.103 88.55 20.427-11.789a8.602 8.602 0 0 1 6.555-.859l132.474 35.505c16.972 4.538 32.928 2.297 47.512-6.667l161.644-100.236zm-449.562 2.476c-.763-5.508-5.895-9.319-11.434-8.521-5.488.808-9.299 5.935-8.486 11.438.813 5.513 5.895 9.329 11.433 8.521 5.489-.807 9.3-5.924 8.487-11.438z"
        clipRule="evenodd"
        fill="#b5b7b9"
        className="color000000 svgShape"
      />
    </svg>
  );
};

export const Flash = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <>
      <svg
        fill="none"
        height={size || height}
        viewBox="0 0 24 24"
        width={size || width}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
      </svg>
    </>
  );
};

export const Server = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TagUser = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Scale = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      id="oil"
      {...props}
    >
      <path
        fill="#34485c"
        fillRule="evenodd"
        d="M24.532 2.5v29h-17v-29z"
      ></path>
      <path
        fill="#2b4255"
        fillRule="evenodd"
        d="M-992.023 1437.633a.5.5 0 1 0 0 1h17.05a.5.5 0 1 0 0-1h-17.05z"
      ></path>
      <path
        fill="#4bc0eb"
        fillOpacity=".976"
        d="M12.251 18.116c0-1.869 3.5-5.616 3.5-5.616s3.5 3.747 3.5 5.616c0 1.869-1.567 3.384-3.5 3.384s-3.5-1.515-3.5-3.384z"
      ></path>
      <path fill="#f05542" d="M-980.254 1407.14h3v2h-3z"></path>
      <path
        fill="#576d7e"
        d="M7.532 7h17a.499.499 0 1 1 0 1h-17a.499.499 0 1 1 0-1z"
      ></path>
      <path
        fill="#2b4255"
        fillRule="evenodd"
        d="M-992.023 1408.633a.5.5 0 1 0 0 1h17.05a.5.5 0 1 0 0-1h-17.05z"
      ></path>
      <path
        fill="#576d7e"
        d="M7.532 9h17a.499.499 0 1 1 0 1h-17a.499.499 0 1 1 0-1zm0 15h17a.499.499 0 1 1 0 1h-17a.499.499 0 1 1 0-1zm0 2h17a.499.499 0 1 1 0 1h-17a.499.499 0 1 1 0-1z"
      ></path>
    </svg>
  );
};
