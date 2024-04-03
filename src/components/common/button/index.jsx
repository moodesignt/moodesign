import React from 'react'

import './style.css'

export function Button({ children, ...props }) {
    return <button {...props} onClick={props.onClick} className="ui-button">{children}</button>
}