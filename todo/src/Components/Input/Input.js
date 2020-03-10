import React from 'react'

export default function Input(props) {
    const { content, onChange, name, type } = props;
    return (
        <div>
            <h1 className="title">TO DO LIST</h1>
            <input type='text' value={content} onChange={onChange} name={name} type={type} ></input>
        </div>
    )
}
