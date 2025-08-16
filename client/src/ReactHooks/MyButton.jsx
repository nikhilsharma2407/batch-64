import React, { memo } from 'react'

const MyButton = ({ onClick, text, setResult, result }) => {
    console.log("🚀 ~ MyButton ~ result:", result)
    console.log('Rendering MyButton');

    setResult('123');

    return (
        <button onClick={onClick}>{text}</button>
    )
}

// export default MyButton;
export default memo(MyButton);