import React from 'react';
import Firestore from "./Firestore";
import './User.scss';

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
        };
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        if (!this.state.name) {
            alert("Please your full name.");
        } else {
            const db = Firestore.firestore();
            const email = localStorage.getItem('se');
            db.collection("users").doc(email).update({
                name: this.state.name,
            })
            this.props.history.push('/company')
            this.setState({
            name: ""
            });
        }
    };

    render() {
      return (
          <div>
            <div className="User-title">
                <h1>Create an account</h1>
            </div>
            <div className="User-input">
                <form onSubmit={this.addUser}>
                    <input
                        className="User-name-input large-input"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={this.updateInput}
                        value={this.state.name}
                        />
                    <br/>
                    <button type="submit" className="User-next-button button large-button">Next</button>
                </form>
            </div>
          </div>
          );
        }
     }
  export default User;