import React from 'react'

export const CloseSquare = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3941 7.59473L7.60211 12.3867" stroke={props?.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.3999 12.3928L7.59991 7.59277" stroke={props?.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0.75 10C0.75 16.937 3.063 19.25 10 19.25C16.937 19.25 19.25 16.937 19.25 10C19.25 3.063 16.937 0.75 10 0.75C3.063 0.75 0.75 3.063 0.75 10Z" stroke={props?.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </>
    )
}
export const Show = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.1643 12.0516C15.1643 13.7976 13.7483 15.2136 12.0023 15.2136C10.2563 15.2136 8.84033 13.7976 8.84033 12.0516C8.84033 10.3046 10.2563 8.88965 12.0023 8.88965C13.7483 8.88965 15.1643 10.3046 15.1643 12.0516Z" stroke={props?.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M2.75031 12.052C2.75031 15.332 6.8923 19.354 12.0023 19.354C17.1113 19.354 21.2543 15.335 21.2543 12.052C21.2543 8.769 17.1113 4.75 12.0023 4.75C6.8923 4.75 2.75031 8.772 2.75031 12.052Z" stroke={props?.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    )
}
export const Hide = ({ ...props }) => {
    return (
        <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.42 17.7298C4.19 16.2698 2.75 14.0698 2.75 12.1398C2.75 8.85984 6.89 4.83984 12 4.83984C14.09 4.83984 16.03 5.50984 17.59 6.54984" stroke="#797882" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.8497 8.61035C20.7407 9.74035 21.2597 10.9904 21.2597 12.1404C21.2597 15.4204 17.1097 19.4404 11.9997 19.4404C11.0897 19.4404 10.2007 19.3104 9.36969 19.0804" stroke="#797882" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.76572 14.3667C9.17072 13.7777 8.83772 12.9747 8.84072 12.1377C8.83672 10.3927 10.2487 8.97469 11.9947 8.97169C12.8347 8.96969 13.6407 9.30269 14.2347 9.89669" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.1095 12.6992C14.8755 13.9912 13.8645 15.0042 12.5725 15.2412" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.8917 4.25L4.11768 20.024" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </>
    )
}
export const Danger = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.6963 19.2341C19.9193 18.0112 20.5002 15.965 20.5002 12.5381C20.5002 9.11119 19.9193 7.06501 18.6963 5.84204C17.4733 4.61907 15.4271 4.03809 12.0002 4.03809C8.57334 4.03809 6.52717 4.61907 5.3042 5.84204C4.08123 7.06501 3.50024 9.11119 3.50024 12.5381C3.50024 15.965 4.08123 18.0112 5.3042 19.2341C6.52717 20.4571 8.57334 21.0381 12.0002 21.0381C15.4271 21.0381 17.4733 20.4571 18.6963 19.2341ZM19.7569 20.2948C18.0892 21.9626 15.5103 22.5381 12.0002 22.5381C8.49015 22.5381 5.91132 21.9626 4.24354 20.2948C2.57576 18.627 2.00024 16.0482 2.00024 12.5381C2.00024 9.02799 2.57576 6.44916 4.24354 4.78138C5.91132 3.1136 8.49015 2.53809 12.0002 2.53809C15.5103 2.53809 18.0892 3.1136 19.7569 4.78138C21.4247 6.44916 22.0002 9.02799 22.0002 12.5381C22.0002 16.0482 21.4247 18.627 19.7569 20.2948Z" fill={props?.color} />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.0002 17.1836C11.586 17.1836 11.2502 16.8478 11.2502 16.4336V12.5386C11.2502 12.1244 11.586 11.7886 12.0002 11.7886C12.4145 11.7886 12.7502 12.1244 12.7502 12.5386V16.4336C12.7502 16.8478 12.4145 17.1836 12.0002 17.1836Z" fill={props?.color} />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7545 9.03809C12.7545 9.4523 12.4187 9.78809 12.0045 9.78809H11.9955C11.5813 9.78809 11.2455 9.4523 11.2455 9.03809C11.2455 8.62387 11.5813 8.28809 11.9955 8.28809H12.0045C12.4187 8.28809 12.7545 8.62387 12.7545 9.03809Z" fill={props?.color} />
            </svg>
        </>
    )
}
export const Lock = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4709 9.40335V7.25435C16.4399 4.73535 14.3719 2.71935 11.8539 2.75035C9.38691 2.78135 7.39191 4.76735 7.34991 7.23435V9.40335" stroke={props?.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.9103 14.1562V16.3773" stroke={props?.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M11.9103 8.82422C6.16531 8.82422 4.25031 10.3922 4.25031 15.0952C4.25031 19.7992 6.16531 21.3672 11.9103 21.3672C17.6553 21.3672 19.5713 19.7992 19.5713 15.0952C19.5713 10.3922 17.6553 8.82422 11.9103 8.82422Z" stroke={props?.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    )
}
export const Back = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.37109 13.0108L18.7461 13.0108" stroke={props?.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.1694 19.0353C10.1694 19.0353 4.37152 15.7743 4.37152 13.0123C4.37152 10.2483 10.1694 6.98625 10.1694 6.98625" stroke={props?.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </>
    )
}

