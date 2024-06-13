import React, { Component } from 'react'

import { IconSwitch } from '../IconSwitch'
import { CardsView } from '../CardsView';
import { ListView } from '../ListView';

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view_list',
    }

    this.products = this.props.products;
  }

  handleSwitch = (e) => {
    const currentIcon = e.target.textContent;
    if (currentIcon === 'view_list') {
      this.setState({
        view: 'view_module'
      });
    } else {
      this.setState({
        view: 'view_list'
      });
    }
  }

  render() {
    return (
      <div>
        <IconSwitch 
          icon={this.state.view}
          handleSwitch={this.handleSwitch}
        />
        {this.state.view === 'view_module'
          ? <ListView products={this.products} />
          : <CardsView products={this.products} />
        }
      </div>
    )
  }
}
