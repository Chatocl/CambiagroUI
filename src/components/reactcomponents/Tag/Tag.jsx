import React from 'react'
import './Tag.css'

const Tag = ({ size, icon, type, text }) => {
    return (

        <div className={`tag-container 
            ${type === 'creado' || type === 'despachado' || type === 'concluido' || type === 'success' ? 'regular-green' :
                `${type === 'vencido' || type === 'anulado' || type === 'bloqueado' || type === 'error' ? 'regular-red' :
                    `${type === 'pendiente' || type === 'progress' ? 'regular-light-green' :
                        `${type === 'en curso' ? 'regular-grey' :
                            `${type === 'disabled' ? 'disabled' :
                                `${type === 'info' ? 'info' : ''}`
                            }`}`}`}`}`}
            style={{
                height: size === 'L' ? '32px' :
                    (size === 'M' ? '26px' : '18px'),
                width: type === 'error' || type === 'disabled' || type === 'success' || type === 'progress' || type === 'info' ? '93px' : '108px'
            }}
        >
            {icon &&
                (type !== 'error' && type !== 'disabled' && type !== 'success' && type !== 'progress' && type !== 'info')
                &&
                (<svg
                    className='tag-icon-regular'
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"

                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="currentColor" />
                </svg>
                )}

            {icon &&
                (type === 'error' || type === 'disabled' || type === 'success' || type === 'progress' || type === 'info')
                &&
                (size === 'L' || size === 'M')
                &&
                (<svg
                    className='tag-icon-box'
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 2.5H17.5C18.1904 2.5 18.75 3.05964 18.75 3.75V6.25C18.75 6.94036 18.1904 7.5 17.5 7.5V17.5C17.5 18.1904 16.9404 18.75 16.25 18.75H3.75C3.05964 18.75 2.5 18.1904 2.5 17.5V7.5C1.80964 7.5 1.25 6.94036 1.25 6.25V3.75C1.25 3.05964 1.80964 2.5 2.5 2.5ZM12.5 13.125H7.5C6.80964 13.125 6.25 12.5654 6.25 11.875V10.625C6.25 9.93464 6.80964 9.375 7.5 9.375H12.5C13.1904 9.375 13.75 9.93464 13.75 10.625V11.875C13.75 12.5654 13.1904 13.125 12.5 13.125ZM7.5 10.625V11.875H12.5V10.625H7.5ZM16.25 17.5H3.75V7.5H16.25V17.5ZM2.5 6.25H17.5V3.75H2.5V6.25Z"
                        fill="currentColor" />
                </svg>

                )}

            {icon &&
                (type === 'error' || type === 'disabled' || type === 'success' || type === 'progress' || type === 'info')
                &&
                (size === 'S')
                &&
                (<svg
                    className='tag-icon-box' 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M1.75 1.75H12.25C12.7332 1.75 13.125 2.14175 13.125 2.625V4.375C13.125 4.85825 12.7332 5.25 12.25 5.25V12.25C12.25 12.7332 11.8582 13.125 11.375 13.125H2.625C2.14175 13.125 1.75 12.7332 1.75 12.25V5.25C1.26675 5.25 0.875 4.85825 0.875 4.375V2.625C0.875 2.14175 1.26675 1.75 1.75 1.75ZM8.75 9.1875H5.25C4.76675 9.1875 4.375 8.79575 4.375 8.3125V7.4375C4.375 6.95425 4.76675 6.5625 5.25 6.5625H8.75C9.23325 6.5625 9.625 6.95425 9.625 7.4375V8.3125C9.625 8.79575 9.23325 9.1875 8.75 9.1875ZM5.25 7.4375V8.3125H8.75V7.4375H5.25ZM11.375 12.25H2.625V5.25H11.375V12.25ZM1.75 4.375H12.25V2.625H1.75V4.375Z" 
                        fill="currentColor"/>
                </svg>
                )}

            <p> {text} </p>
        </div>
    )
}

export default Tag;