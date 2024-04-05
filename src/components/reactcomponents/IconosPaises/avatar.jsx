// components/Icon.js
import React from 'react';
import styles from './icono.module.css';

const Avatar = ({ size }) => {
    // Determina el tamaño del icono
    const iconSizeClass = styles[size] || styles.icon; // Si el tamaño no está definido, usa el tamaño base
    //cambiar tamaño el icono <Avatar size="xl"/> tamaños (xl, l, m, s xs)

    return (
        <svg className={`${iconSizeClass}`} xmlns="http://www.w3.org/2000/svg" width="90" height="80" viewBox="0 0 90 80" fill="none">
            <g clipPath="url(#clip0_34678_35836)">
                {/* Parte gris  del avatar */}
                <path d="M73.8248 8.08266L69.6999 12.3388C53.7554 -4.11293 27.9028 -4.11293 11.9583 12.3388C-3.98611 28.7905 -3.98611 55.4656 11.9583 71.9174L22.2671 61.2807C12.0146 50.702 12.0146 33.5542 22.2671 22.9827C32.5196 12.404 49.1386 12.404 59.3841 22.9827L63.509 18.7266C73.7616 29.3053 73.7616 46.4531 63.509 57.0245C53.2565 67.6032 36.6375 67.6032 26.392 57.0245L16.0832 67.6612C32.0277 84.1129 57.8803 84.1129 73.8248 67.6612C89.7692 51.2095 89.7692 24.5344 73.8248 8.08266Z" fill="#CACACA" transform="translate(3 0)"/>
                {/* Parte verde  del avatar */}
                <path d="M73.8248 8.08266L69.6999 12.3388C53.7554 -4.11293 27.9028 -4.11293 11.9583 12.3388C-3.98611 28.7905 -3.98611 55.4656 11.9583 71.9174L22.2671 61.2807C12.0146 50.702 12.0146 33.5542 22.2671 22.9827C32.5196 12.404 49.1386 12.404 59.3841 22.9827L63.509 18.7266C73.7616 29.3053 73.7616 46.4531 63.509 57.0245C53.2565 67.6032 36.6375 67.6032 26.392 57.0245L16.0832 67.6612C32.0277 84.1129 57.8803 84.1129 73.8248 67.6612C89.7692 51.2095 89.7692 24.5344 73.8248 8.08266Z" fill="#20B200" transform="translate(3 0)"/>
                
                {/* Parte superior  amarilla del avatar */}
                <path opacity="0.75" d="M65.6714 12.3021C50.8654 -2.93873 26.8819 -2.92424 12.0899 12.3384C-2.71617 27.6155 -2.71617 52.3837 12.0899 67.6608L18.2737 61.2802C15.1326 58.0392 12.9613 54.1818 11.7456 50.0852C11.8088 50.3027 11.8721 50.5203 11.9423 50.7378C6.14499 37.2443 7.92284 21.786 17.6764 11.7221C30.0863 -1.08258 50.9637 -0.560533 65.6152 12.4254L65.6995 12.3384C65.6925 12.3239 65.6784 12.3166 65.6714 12.3021Z" fill="url(#paint0_linear_34610_3321)" transform="translate(7 0)"/>
                {/* Parte inferior amarilla del avatar */}
                <path opacity="0.75" d="M65.8473 29.2617C68.9041 38.6948 66.7959 49.5128 59.5159 57.0245C49.2634 67.6031 32.6443 67.6031 22.3988 57.0245L18.2739 61.2806C8.02141 50.7019 8.02141 33.5541 18.2739 22.9827C28.5264 12.404 45.1455 12.404 55.391 22.9827L65.6997 12.346C65.6857 12.3315 65.6786 12.3242 65.6646 12.3097C50.8585 -2.93115 26.8751 -2.91663 12.0831 12.346C-2.723 27.6231 -2.723 52.3913 12.0831 67.6684L12.1674 67.5814C26.8189 80.5673 47.6893 81.0966 60.1062 68.2847C69.8668 58.2136 71.6376 42.7552 65.8473 29.2617Z" fill="url(#paint0_linear_34610_3319)" transform="translate(6.6 0)"/>
               

            </g>
            <defs>
                <clipPath id="clip0_34678_35836">
                    <rect width="90" height="80" fill="none"/>
                </clipPath>

                <linearGradient id="paint0_linear_34610_3321" x1="-11.2979" y1="5.0121" x2="18.3385" y2="24.1604" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D2D600"/>
                        <stop offset="1" stop-color="#D2D600" stop-opacity="50"/>  {/* opacidad color */}
                </linearGradient>

                <linearGradient id="paint0_linear_34610_3319" x1="75.4415" y1="-17.8522" x2="-2.57952" y2="90.2816" gradientUnits="userSpaceOnUse">
                    <stop offset="0.5574" stop-color="#D2D600" stop-opacity="50"/>  {/* opacidad color */}
                    <stop offset="0.7695" stop-color="#D2D600"/>
                </linearGradient>

            </defs>
        </svg>
    );
};

export default Avatar;
