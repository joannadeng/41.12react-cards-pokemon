import React, { useState } from "react";

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const toggleFlip = () => {
        setIsFacingUp(front => !front)
    }
    return [isFacingUp, toggleFlip]
}

export default useFlip;