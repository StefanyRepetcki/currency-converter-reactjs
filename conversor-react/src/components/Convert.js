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
      <div className='conversor'>
        <h2>
          {this.props.money} para {this.props.tomoney}
        </h2>
        <input
          type='text'
          onChange={(event) => {
            this.setState({ money_value: event.target.value });
          }}
        ></input>
        <button type='button' onClick={this.convertMethod}>
          Converter
        </button>
        <h2>{this.state.tomoney_value}</h2>
      </div>
    );
  }
}
