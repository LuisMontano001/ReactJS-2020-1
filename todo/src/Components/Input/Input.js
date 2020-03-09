import React from 'react'

export default function Input(props) {
    const { content, onChange, name, type } = props;
    return (
        <div>
            <input type='text' value={content} onChange={onChange} name={name} type={type} ></input>
        </div>
    )
}
