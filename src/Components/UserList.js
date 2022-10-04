import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err));
    }, []);

    console.log(users);
    return users.map((el, i) => <UserCard user={el} key={i} />);
};
export default UserList;
