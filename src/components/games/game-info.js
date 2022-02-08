import { data } from 'jquery';
import React, { Component } from 'react';

class GameInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {}
        }
    }

    componentDidMount() {
        var games = JSON.parse(localStorage.getItem('games'));
        const filteredGame = games.filter(game => data.Name === this.props.match.data.name);
        const game = filteredGame[0];
        this.setState({ data: game });
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="name-info">{this.state.data.name}</div>
                <div><span className="sec-info-text">Name :</span><span>{this.state.data.name}</span></div>
            </div>
        );
    }
}


export default GameInfo;