import React, { useState } from 'react';

function Note() {
    
    const [text, setText] = useState('');
    let arr = [];
    const addNote = (text) => {
        arr.push(text)
    }
    console.log(text);
    console.log(arr);
    return (
        <div>
            <input
                className="border-4"
                type="text"
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addNote(text)}>Add</button>
        </div>
    );
}

export default Note;
