import React from 'react'
import './Response.css'
type Props = {
    responseColor:string;
}

const Response:React.FC<Props> = (props) => {
    const activeClass = props.responseColor
    return (
        <div className={activeClass}>
            {activeClass}
        </div>
    )
}

export default Response