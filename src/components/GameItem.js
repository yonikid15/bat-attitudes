import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const GameItem = ( { id, date, time, address, parkName, index, url } ) => {
    return (
        <div className="list-item">
            <div>
                <h3 className="list-item__title">
                    { ( typeof index === 'string' ) ?  
                        index 
                        : 
                        `Game ${index}`     
                    }
                </h3>
                <span className="list-item__sub-title">{moment(date).format('MMMM Do, YYYY')} | {time}</span>
            </div>
            <div className="list-item__data">
                <h3 className="list-item__title">{parkName}</h3>
                { url ? 
                    <a className="list-item__sub-title" href={url}>{address}</a>
                    :
                    undefined
                }
                
            </div>
        </div>
    );
};

export default GameItem;