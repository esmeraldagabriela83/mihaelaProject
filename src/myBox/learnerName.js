
import React, { useState } from "react";

export function CoursantName() {
    const [isOn, setOn] = useState(false);

    function handleOnClick() {
        setOn((oldState) => !oldState)
    }

    return (
            <button
                style={{ backgroundColor:"mediumspringgreen" ,
                    border:"5px solid indianred",
                    borderRadius:"0.5em",
                    fontSize:"0.9em",
                    marginBottom:"1.5em",
                    padding:"0.7em"}}
                onClick={handleOnClick}>
                    {isOn ? 'Mihaela Gabriela Acornicesei': 'Coursant name'}
            </button>
    )
}





