// import { data } from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom';
const GameCard = props => {
    const data = props.game
    return (
        <Link style={{ textDecoration: 'none' }} to={"/gameinfo/" + data.Name}>
            <div className="p-3 mb-3 card text-dark">
                <div className="row no-gutters">
                    <div className="no-gutters">
                        <div className="rank-card">
                            <div>{data.name}</div>
                        </div>
                    </div>
                    <div className="no-gutters col-sm-3">
                    <div className="rank-card2">
                            <div>{data.icon_url}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GameCard;