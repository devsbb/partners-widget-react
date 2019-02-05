import React from 'react';
import PropTypes from 'prop-types';

const GroverIcon = ({ className }) => (
    <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M23.411 4.95058C23.1095 3.86005 22.6608 2.85493 21.9185 2.08171C21.1446 1.33871 20.1395 0.890673 19.049 0.58848C16.2032 -0.19985 12.9159 -0.161091 10.0491 0.495851C7.14614 1.15345 5.04068 3.04019 3.33267 5.39927C1.7475 7.5882 0.245101 10.3106 0.0230592 13.0566C-0.200954 15.9419 1.23049 18.701 3.30245 20.6975C5.2982 22.7701 8.05927 24.201 10.9438 23.9769C13.6891 23.7523 16.4115 22.2518 18.6003 20.6666C20.9594 18.9586 22.8467 16.8563 23.5037 13.9533C24.1613 11.0805 24.2 7.79579 23.411 4.95058ZM12.4554 18.9277C10.9952 18.9278 9.56767 18.4949 8.35343 17.6837C7.13919 16.8725 6.19276 15.7195 5.63382 14.3704C5.07488 13.0213 4.92854 11.5368 5.2133 10.1045C5.49805 8.67226 6.20112 7.35661 7.23359 6.32394C8.26606 5.29126 9.58156 4.58795 11.0137 4.30293C12.4459 4.01791 13.9305 4.164 15.2796 4.72271C16.6288 5.28142 17.782 6.22766 18.5933 7.44178C19.4047 8.65589 19.8379 10.0834 19.838 11.5436C19.8381 12.5132 19.6472 13.4734 19.2762 14.3692C18.9053 15.265 18.3615 16.079 17.676 16.7647C16.9904 17.4503 16.1766 17.9943 15.2808 18.3654C14.3851 18.7365 13.425 18.9276 12.4554 18.9277Z"
            fill="url(#paint0_linear)"
        />
        <defs>
            <linearGradient
                id="paint0_linear"
                x1="3.30113"
                y1="20.6988"
                x2="21.9189"
                y2="2.08208"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0.05" stopColor="#3D02FF" />
                <stop offset="0.95" stopColor="#FE1251" />
            </linearGradient>
        </defs>
    </svg>
);

GroverIcon.propTypes = {
    className: PropTypes.string,
};

GroverIcon.defaultProps = {
    className: null,
};

export default GroverIcon;
