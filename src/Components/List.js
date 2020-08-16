import React from 'react'

const List = (props) => {

    const generateKey = () => {
        return `${props.data.type}_${new Date().getTime()}`;
    }

    return (
        <React.Fragment>
            <li key={generateKey()}>{props.data.type} | {props.data.description} | {props.data.volume}</li>
        </React.Fragment>
    )}

export default List;