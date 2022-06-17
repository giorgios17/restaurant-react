import React, { Component } from 'react';



class Menu extends Component {
    render() {
        return (
            <div className="mt-5 col">
                <div className="card border border-5 border-primary" style={{ width: '18rem' }}>
                    <img src={this.props.image} className="height-250 " alt={this.props.name} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">€ {this.props.price}</p>
                        <button className="btn btn-primary">Aggiungi al carrello</button>
                    </div>
                </div>
            </div >
        )
    }
}
export default Menu;