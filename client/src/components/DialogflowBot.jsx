import React, { useState } from "react";
import "./Dialogflowbotcss.css"; // Import the custom CSS file

const DialogflowBot = () => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };

    return (
        visible && (
            <div className="iframe-container">
                <button className="close-btn" onClick={handleClose}>×</button>
                <iframe
                    height="430"
                    width="350"
                    src="https://bot.dialogflow.com/e403623e-b7d3-4d89-95b2-c470257e3df4"
                    title="Dialogflow Bot"
                ></iframe>
            </div>
        )
    );
};

export default DialogflowBot;
