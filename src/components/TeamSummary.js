import React from 'react';
import { Link } from 'react-router-dom';

const TeamSummary = () => {
    return (
        <div className="page-header">
            <div className="content-container">
                <div className="page-header__title">
                    <h1>Wins: <span>3</span></h1>
                    <h1>Losses: <span>3</span></h1>
                </div>
            </div>
        </div>
    );
};

export default TeamSummary;
