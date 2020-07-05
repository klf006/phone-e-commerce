import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../Context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) =>{
          const { modalOpen, cloeModal } = value;
          
          return 
        }}
      </ProductConsumer>
    )
  }
}
