import React, {useRef, useState} from 'react';
import useBoundingclientrect from "@rooks/use-boundingclientrect"

function Demo() {
    const myRef = useRef();
    const getBoundingClientRect = useBoundingclientrect(myRef);
    const [XOffset, setXOffset] = useState(0);
    const [YOffset, setYOffset] = useState(300);
    const displayString = JSON.stringify(getBoundingClientRect, null, 2);
    return (
    <>
        <div
        style={{
            width: 300,
            background: "lightblue",
            padding: "10px",
            position: "absolute",
            left: XOffset,
            top: YOffset
        }}
        ref={myRef}
        >
        <div
            style={{
            resize: "both",
            overflow: "auto",
            background: "white",
            color: "blue",
            maxWidth: "100%"
            }}
        >
            <p>
            Resize this div as you see fit. To demonstrate that it also updates
            on child dom nodes resize
            </p>
        </div>
        <h2>Bounds</h2>
        <p>
            <button onMouseEnter={() => setXOffset(XOffset - 200)}> Move Left </button>
            <button onMouseEnter={() => setXOffset(XOffset + 200)}> Move Right </button>
        </p>
        <p>
            <button onClick={() => setYOffset(YOffset - 200)}> Move Up </button>
            <button onClick={() => setYOffset(YOffset + 200)}> Move Down </button>
        </p>
        </div>
        <div style={{ height: 500 }}>
        <pre>{displayString}</pre>
        </div>
    </>
    );
}

export default Demo