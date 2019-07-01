import React, { Component } from 'react';
import './Menu.scss';
import 'rc-collapse/assets/index.css';
import { arctypeFeatures } from './constants';
import * as cx from 'classnames';
import { Collapse } from 'reactstrap';

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
 
export class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsOpen: false
    };
  }

  handleKeyDown(e) {
    if (e.key === "Tab") {
      e.preventDefault();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { onMenuClosed } = this.props;
    const items = [
      {
        title: "Products",
        items: arctypeFeatures.map(f => {
          return (
            <div className="product-item">
              <div
                style={{
                  opacity: f.disabled ? 0.5 : 1
                }}
                className="icon"><img width={108} height={108} src={f.icon}/></div>
              <div
                style={{
                  opacity: f.disabled ? 0.5 : 1
                }}
                className="title">{f.title}</div>
              {f.disabled && <div className="coming-soon-mobile" />}
            </div>
          );
        })
      },
      "Solutions",
      "Pricing",
      "Sign in"
    ];
    return (
      <div className="Menu-mobile">
        <div onClick={() => {
          if (onMenuClosed) onMenuClosed();
        }} className="close"/>
        <div className="items">
          {items.map(i => {
            return (
              <div className="item-container">
                {typeof i === 'object'
                  ?
                  <div>
                    <div
                      className='collapse-header'
                      onClick={() => {
                        this.setState({productsOpen: !this.state.productsOpen})
                      }}>
                      <div
                        className={cx("simple-item", {"selected": this.state.productsOpen})} >
                        {i.title}
                      </div>
                      <div className={cx("caret", {"caret-selected": this.state.productsOpen})}/>
                    </div>
                    <Collapse isOpen={this.state.productsOpen} >
                      <div className="product-items">
                        {i.items}
                      </div>
                    </Collapse>
                  </div>
                  : <div className="simple-item">{i}</div>}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}