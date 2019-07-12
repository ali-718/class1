import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super();
        this.SubmitForm = this.SubmitForm.bind(this)
    }


    state = {
        name:"",
        password:"",
        data:[],
        API:[
            {
                Name:"ali haider",
                Email:"alimurtuza718@gmail.com",
            },
            {
                Name:"Hammad",
                Email:"Hammad@gmail.com"
            },
            {
                Name:"Khurram",
                Email:"test@test.com"
            }
        ]       
    }

    SubmitForm(event){
        event.preventDefault();
        // this.setState({
        //     name:"Ali Haider"
        // })
        // console.log(this.state.name);
        // console.log(this.state.password);

        this.state.data.push({
            Name:this.state.name,
            Password:this.state.password
        })
        console.log(this.state.data)
    }

    Change = (val) => {
        // console.log(val.target.value)
        // this.state.name = val.target.value
        this.setState({
            name:val.target.value 
        })
    }

    PasswordChange =(val) => {
        this.setState({
            password:val.target.value 
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <form onSubmit={this.SubmitForm}>
                    <input onChange={this.Change} type="text" name="Email" />
                    <input onChange={this.PasswordChange} type="text" name="Password" />
                    <input type="submit" />
                </form>

                {
                    this.state.API.map((item,i) => (
                        <div key={i} className="card" style={{width:"18rem"}}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.Name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">{item.Email}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
