import React, { Component } from 'react';
import './Menu.scss';

export class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, icon, disabled } = this.props;
    return (
      <div className="Menu-item">
        <div className="icon" style={{opacity: disabled ? 0.5 : 1}}><img height={108} width={108} src={icon}/></div>
        <div className="text" style={{opacity: disabled ? 0.5 : 1}}>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        {disabled && <div className="coming-soon"/>}
      </div>
    );
  }
}
 
