import React, { Component } from 'react';
import './Convert.css';

export default class Convert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      money_value: '',
      tomoney_value: 0
    };

    this.convertMethod = this.convertMethod.bind(this);
  }

  convertMethod() {
    let de_para = `${this.props.money},${this.props.tomoney}`;
    let url = `https://api.exchangeratesapi.io/latest?symbols=${de_para}`;

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let dinamicJson = Object.values(json.rates);
        let cotacao = dinamicJson[0];
        let tomoney_value = (
          parseFloat(this.state.money_value) * cotacao
        ).toFixed(2);
        console.log(tomoney_value);
        this.setState({ tomoney_value });
      });
  }

  render() {
    return (
      <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 conversor p-5'>
        <div className="form-row">
            <label for="formControl">{this.props.money} para {this.props.tomoney}</label>    
            <input
              id="formControl"
              className="form-control" 
              type="number" 
              onChange={(event) => {
                  this.setState({ money_value: event.target.value });
                }} 
              placeholder="0.00">          
            </input>
        </div>    
        <div className="form-row"> 
          <button type='button' className="form-control btn btn-primary" onClick={this.convertMethod}>
                Converter
          </button>
          {this.state.tomoney_value.length > 0 &&
              <h2>
                {this.state.tomoney_value.length}
              </h2>
            }
        </div>
      </div>
    );
  }
}
