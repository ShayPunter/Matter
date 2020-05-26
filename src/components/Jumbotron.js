import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return <div className="grey darken-3 jumbotron white-text">
            <div className="container">
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
                {this.props.children}
            </div>
        </div>
    }
}

export default Jumbotron;