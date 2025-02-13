import {useLoaderData} from "react-router-dom";

import './Users.css';
import User from "../User/user";
const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Our Users:{users.length}</h2>
            <div className="users">
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;