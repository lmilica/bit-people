import React from "react";
import "./Users.css";
import { ListUser } from "./ListUser.js"
import { GridUser } from "./GridUser.js";
import Counter from '../Counter/Counter.js'
import Loader from '../Loader/Loader.js'
import NothingFound from '../NothingFound/NothingFound.js'


class Users extends React.Component {
    constructor(props) {
        super(props)


    }


    render() {
        if (this.props.filteredUsers.length) {
            return (
                <div>
                    <Counter users={this.props.filteredUsers} />
                    <div className='Users'>

                        {this.props.filteredUsers.map((user, i) => {
                            if (this.props.isListView) {
                                return <ListUser
                                    key={i}
                                    img={user.picture.thumbnail}
                                    firstName={user.name.first}
                                    lastName={user.name.last}
                                    email={user.email}
                                    dateOfBirth={user.dob.date}
                                    gender={user.gender} />
                            } else {
                                return <GridUser
                                    key={i}
                                    img={user.picture.large}
                                    firstName={user.name.first}
                                    lastName={user.name.last}
                                    email={user.email}
                                    dateOfBirth={user.dob.date}
                                    gender={user.gender} />
                            }
                        })
                        }
                    </div>
                </div>
            )
        } else {
            return this.props.allUsers.length ? <NothingFound /> : <Loader />
        }

    }

}


export default Users