import React from 'react'

const HeadTitle = (props) => {
    document.title = props.title

    return (
        <div>{props.children}</div>
    )
}

export default HeadTitle