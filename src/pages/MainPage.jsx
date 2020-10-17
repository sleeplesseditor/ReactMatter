import React from 'react';
import './PageStyles.scss';
import MatterCanvas from '../components/Matter/matterCanvas';

const MainPage = () => {
    return (
        <div className="page-container" id="canvas-container">
            <MatterCanvas />
        </div>
    )
}

export default MainPage;