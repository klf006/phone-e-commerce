import React, { Component } from 'react'
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component { 
  render() {
    return (
      <ProductConsumer>
        {value =>{
          const {
            id, 
            title, 
            img, 
            price, 
            company, 
            info, 
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto my-5 text-center text-slanted text-blue">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className='img-fluid' alt='product' />
                </div>
                  {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize text-center">
                  <h3>model : {title}</h3>
                  <h4 className='text-title text-uppercase mt-3 mb-2'>
                    made by : <span className='text-uppercase'>{company}</span>
                  </h4>
                  <h4 className='text-blue'>
                    <strong>
                      price : <span>$</span>{price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product :
                  </p>
                  <p className= "lead">
                    {info}
                  </p>
                  {/* buttons */}
                  <div>
                    <Link to='/'>
                      <ButtonContainer solid >
                        back to products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer 
                      cart
                      solid
                      disabled={inCart ? true : false}
                      onClick={() =>{
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >  
                      {inCart ? 'inCart' : 'add to cart'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
