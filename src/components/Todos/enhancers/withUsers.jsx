import React, {useEffect, useState} from 'react'
import API from "../API";

const withUsers = (Component) =>
    class WithUsers extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                users: []
            }
        }

        componentDidMount() {
            API.getUsers()
                .then((users) => {
                    this.setState({users})
                })
        }

        render() {
            const {users} = this.state
            return users.length !== 0 ? <Component users={users}/> : null
        }
    }

export default withUsers
