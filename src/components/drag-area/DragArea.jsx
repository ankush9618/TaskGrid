import React, { useState } from 'react';
import "./drag-area.css"

function DragArea() {
    const [showDrag, setShowDrag] = useState(false);

    return (
        <div className={showDrag ? "drag_area":"drag_area_hidden"} onDragEnter={() => setShowDrag(true)} onDragLeave={() => setShowDrag(false)} >Drag your task here..</div>
    )
}

export default DragArea