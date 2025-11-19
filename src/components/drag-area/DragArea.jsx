import React, { useState } from 'react';
import "./drag-area.css"

function DragArea({onDrop}) {
    const [showDrag, setShowDrag] = useState(false);

    return (
        <div className={showDrag ? "drag_area":"drag_area_hidden"} onDragEnter={() => setShowDrag(true)} onDragLeave={() => setShowDrag(false)}  
        onDrop={()=>
        {
            onDrop();
            setShowDrag(false);
        }}
        onDragOver={(e=>e.preventDefault())}
        >Drag your task here..</div>
    )
}

export default DragArea