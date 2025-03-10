import React from 'react'
import {Html, useProgress} from "@react-three/drei";

const CanvasLoader = () => {
    const {progress} = useProgress();
    return (
        <Html
        as ="div"
        center
        style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <span className="canvas-loader"></span>
            <p
            style={{
                fontSize:14,
                color:"white",
                marginTop:40,
                fontWeight:800,
                textAlign:"center"
            }}
            > Loading {progress.toFixed(2)}%
            </p>
        </Html>
    )
}
export default CanvasLoader
