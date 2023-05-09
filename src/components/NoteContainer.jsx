import React, { useState } from 'react';

function NoteContainer() {
    const [text, setText] = useState('');
    console.log(text)
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>
    );
}

export default NoteContainer;
