import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export default function ReactFlowIcon(props) {
    return (
        <SvgIcon {...props}>
            <rect width="40" height="40" fill="white" />
            <rect x="23" y="23" width="14" height="14" rx="2" fill="white" stroke="#1A192B" strokeWidth="2" />
            <rect x="23" y="3" width="14" height="14" rx="2" fill="white" stroke="#FF0072" strokeWidth="2" />
            <rect x="3" y="23" width="14" height="14" rx="2" fill="white" stroke="#1A192B" strokeWidth="2" />
            <rect x="3" y="3" width="14" height="14" rx="2" fill="white" stroke="#1A192B" strokeWidth="2" />
            <circle cx="17" cy="10" r="3" fill="white" />
            <circle cx="23" cy="10" r="3" fill="white" />
            <circle cx="30" cy="17" r="3" fill="white" />
            <circle cx="30" cy="23" r="3" fill="white" />
            <circle cx="17" cy="30" r="3" fill="white" />
            <circle cx="23" cy="30" r="3" fill="white" />
            <circle cx="30" cy="23" r="2" fill="#1A192B" />
            <circle cx="17" cy="30" r="2" fill="#1A192B" />
            <circle cx="23" cy="30" r="2" fill="#1A192B" />
            <rect opacity="0.35" x="18" y="9.5" width="4" height="1" fill="#1A192B" />
            <rect opacity="0.35" x="29.5" y="21.5" width="4" height="1" transform="rotate(-90 29.5 21.5)" fill="#1A192B" />
            <rect opacity="0.35" x="18" y="29.5" width="4" height="1" fill="#1A192B" />
            <circle cx="17" cy="10" r="2" fill="#1A192B" />
            <circle cx="23" cy="10" r="2" fill="#FF0072" />
            <circle cx="30" cy="17" r="2" fill="#FF0072" />
        </SvgIcon>
    );
}