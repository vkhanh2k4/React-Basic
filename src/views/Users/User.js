import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import {
    Link, NavLink
} from "react-router-dom";


import './User.scss'

class User extends React.Component {
    state = {
        ListUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            ListUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetail = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let { ListUsers } = this.state;

        return (
            <div className='List-User-container'>
                <div className="User-lists">
                    {
                        // ListUsers && ListUsers.length > 0 &&
                        ListUsers.map((item, index) => {
                            return (
                                <div className='child' key={item.id}
                                    onClick={() => this.handleViewDetail(item)}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}

                                </div>

                            )
                        })



                    }

                </div>
            </div>
        );

    }

}
export default withRouter(User);