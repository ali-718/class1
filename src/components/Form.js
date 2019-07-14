import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
    constructor(props){
        super();
        this.SubmitForm = this.SubmitForm.bind(this);
    }

    componentDidMount(){
        
        axios("https://test123-7f9a.restdb.io/rest/test?apikey=5d2a1a7ee25f837b3b80a409",{
            method:"GET",
        }).then((result) => {
            this.state.data.push(result);
            // this.setState({
            //     data:result.data
            // })
        })

        axios("https://test123-7f9a.restdb.io/rest/test?apikey=5d2a1a7ee25f837b3b80a409",{
            method:"POST",
            body:{
                "Name":"Makers"
            }
        }).then(res => console.log(res))
    }

    state = {
        name:"",
        password:"",
        data:[],
        API:[
            {
                Name:"ali haider",
                Email:"alimurtuza718@gmail.com",
                status:1
            },
            {
                Name:"Hammad",
                Email:"Hammad@gmail.com",
                status:1
            },
            {
                Name:"Khurram",
                Email:"test@test.com",
                status:0
            },
            {
                Name:"Shahnawaz",
                Email:"test@test.com",
                status:1
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
        console.log(val.target.value)
        // this.state.name = "ali haider"
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
                {console.log(this.state.data)}
                <form onSubmit={this.SubmitForm}>
                    <input onChange={this.Change} type="text" name="Email" />
                    <input onChange={this.PasswordChange} type="text" name="Password" />
                    <input type="submit" />
                </form>

            <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent: 'center',alignItems: 'center',}}>
                {
                    this.state.data.map((item,i) => (    
                        item.status == 1 ? 
                        <div key={i} className="card" style={{width:"18rem"}}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.employee_name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">{item.employee_age}</a>
                                <p>Status :- <span style={{color:item.status ? "green" : "red"}}>{item.status ? "Active" : "Inactive"}</span></p>                                
                            </div>
                        </div> 
                        : null
                    ))
                }
                </div>
            </div>
        )
    }
}
