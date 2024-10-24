import { useState, useEffect } from "react";
import "./display.css";
import image from "../../assets/wsi.png";

function Display() {
    const [zoomLevel, setZoomLevel] = useState(100); // Start with 100% zoom
    const minZoomLevel = 100; // Set minimum zoom level to 50%

    // Function to handle zoom in
    const handleZoomIn = () => {
        setZoomLevel((prevZoom) => prevZoom + 10); // Increase zoom by 10%
    };

    // Function to handle zoom out with limit
    const handleZoomOut = () => {
        setZoomLevel((prevZoom) => (prevZoom > minZoomLevel ? prevZoom - 10 : prevZoom)); // Don't go below minZoomLevel
    };

    // Update body background size when zoomLevel changes
    useEffect(() => {
        document.body.style.backgroundSize = `${zoomLevel}%`; // Apply zoom level to body background
        document.body.style.transition = "background-size 0.5s ease"; 
    }, [zoomLevel]);

    return (
        <div className="display">
            <div className="mini-display">
                <div className="img-box">
                    <img src={image} alt="WSI" />
                </div>
                <div className="pat-details">
                    <p>Patient ID</p>
                    <p>Blood</p>
                </div>
            </div>
            <div className="report-btn">
                <button>Report</button>
            </div>
            <div className="zoom-pairs">
                <div className="zoom-in" onClick={handleZoomIn}>
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
                <div className="zoom-out" onClick={handleZoomOut}>
                    <i className="fa-solid fa-magnifying-glass-minus"></i>
                </div>
            </div>
        </div>
    );
}

export default Display;
