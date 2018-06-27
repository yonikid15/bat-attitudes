import React from 'react';
import GameItem from './GameItem';
import games from '../database/data';

const GameList = () => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-desktop">Game</div>
                <div class="show-for-desktop">Address</div>
            </div>
            <div className="list-body">
                {
                    games.length === 0 ? (
                        <div className="list-item list-item--meassage">
                            <span>No expenses</span>
                        </div>
                    ) : (
                        games.map( (game, index) => {
                            return <GameItem key={game.id} index={game.id} {...game} />
                        })
                    )
                }
            </div>         
        </div>
    );
};

export default GameList ;