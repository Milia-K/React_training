import React, { Component } from 'react'

export class ComponentTariff extends Component {
    render() {
        const {title, price, description, text, color} = this.props;
        const componentStyle = {
            backgroundColor: color,
            width: color === 'red' ? '30%' : 'auto', 
            height: color === 'red' ? '30%' : 'auto',
        };
        return (
            <div className='component' style={componentStyle}>
                <h4 className='component-title'>{title}</h4>
                <div className='component-price'>
                    <span className='component-price-info'>{price}</span>
                </div>
                <div className='component-description'>{description}</div>
                <div className='component-text'>{text}</div>
            </div>
        );
    }
}

export default ComponentTariff