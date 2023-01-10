import React, { useState } from 'react';

function EditTood(props) {
    const [text,setText] =useState(props.text)
    return (
        <>
            <div className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
                </div>
                <div>
                    <button type="button" className="btn btn-info btn-sm "  onClick={()=>props.editText(text)}>edit</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default EditTood;