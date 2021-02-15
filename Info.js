import React from "react"


export default props => {
    return (
        <div className={"info " + props.type}>
            <p>{props.message}</p>
        </div>
    )
}