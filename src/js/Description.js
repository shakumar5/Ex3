import React, { Component } from 'react';
import '../css/Description.css';

class Description extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      amount: '',
      Descriptions: [{ description: '', amount: 0 }],
      total: 0,
      name: '',
      email: '',
      dueDate: '',
      sum:0
      
    };
    
    this.handleAddDescription = this.handleAddDescription.bind(this);
    this.handleRemoveDescription = this.handleRemoveDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFormName = this.handleChangeName.bind(this);
    this.handleChangeFormEmail = this.handleChangeEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
   }

  handleChange(date) {
   
    this.setState({dueDate: date.target.value});
  }

  
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
 
  handleNameChange = (evt) => {
    this.setState({ description: evt.target.value });
    this.setState({ amount: evt.target.value });
  }

  handleDescDetails = (idx) => (evt) => {
    const newDesc = this.state.Descriptions.map((Description, sidx) => {
      console.log("Description "+ Description.description+" amount "+Description.amount);
      if (idx !== sidx) return Description;
      return { ...Description, description: evt.target.value };
  });
    
    this.setState({ Descriptions: newDesc });
     console.log(" length "+this.state.Descriptions.length)
  }

  handleAmountDetails = (idx) => (evt) => {
    let localtotal =0;
    const newAmount = this.state.Descriptions.map((Amount, sidx) => {
      localtotal = localtotal + (Amount.amount === ''  ? 0 : parseInt(Amount.amount));
      if (idx !== sidx) return Amount;
      return { ...Amount, amount: evt.target.value }; 
  });
  
    this.setState({ Descriptions: newAmount });
    this.setState({total: localtotal});
  }

  handleAddDescription = () => {
    this.setState({ Descriptions: this.state.Descriptions.concat([{ description: '' }]) });
    this.setState({ Descriptions: this.state.Descriptions.concat([{ amount: '' }]) }); 
  }
  
  handleRemoveDescription = (idx) => () => {
    this.setState({ Descriptions: this.state.Descriptions.filter((s, sidx) => idx !== sidx)});
    this.setState({ Descriptions: this.state.Descriptions.filter((s, sidx) => idx !== sidx) });  
  }

  handleSubmit = (evt) => {
    alert(' Thank you! Your Form has been Successfully Submitted');
    
    localStorage.setItem("name ", JSON.stringify(this.state.name));
    localStorage.setItem("email", JSON.stringify(this.state.email));
    localStorage.setItem("duedate", JSON.stringify(this.state.dueDate));
    localStorage.setItem("Description ", JSON.stringify(this.state.Descriptions));
    
  }


  render() {    
    return (
      
      <div className = "Description">
      <form onSubmit={this.handleSubmit}>
      <h1 >Provide Details</h1>
      <div className = "Info">
          <tr><label> Name </label>
          <input type="text" name="Name" value={this.state.name} onChange={this.handleChangeFormName} required={true}/></tr>
          <tr><label>Email </label>
          <input type="email" name="Email" value={this.state.email} onChange={this.handleChangeFormEmail} required={true}/></tr>
          <tr><label> DueDate </label>
          <input type="date" name="DueDate" selected={this.state.dueDate}
        onChange={this.handleChange}/></tr>
      </div>
        <div><tr><td><h4 name="desc1"><label>Descriptions</label></h4></td>  <td>  <h4 name="amt"><label>Amount</label></h4></td></tr></div>
      
      
        {this.state.Descriptions.map((Description, idx) => (
          <div className="description">

          <input
              type="text" name="desc"
             
              value={this.state.description.description}
              onClick={this.handleDescDetails(idx)}
            />
           
            <input
              type="number"
              value={this.state.Description}
              
              onChange={this.handleAmountDetails(idx)}
            />
            <button type="button" name="clear" onClick={this.handleRemoveDescription(idx)} className="small">-</button>
            </div>

        ))}
                
          <button type="button" onClick={this.handleAddDescription} className="small">+</button>
        
        <div> <h1 name="total">Total  ${this.state.total}  </h1></div> 

         <input type="submit" value="Send" />
         
      </form>
      </div>
    )
  }
}

export default Description;
