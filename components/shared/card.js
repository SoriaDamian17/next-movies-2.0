import React from 'react';

import '../../styles/main.scss';

class CardComponent extends React.Component {

    constructor(props) {
        super();
        this.state = {title: props.Title, poster: props.Poster};
    }

    render() {
        return(
            <div className="card" style={{ 'width': '12rem'}}>
                <img src={this.state.poster} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-title">{this.state.title}</div>
                </div>
            </div>
        );
    }
}

export default CardComponent;