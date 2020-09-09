import React, { useContext, useEffect } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/githubContext";

const Users = ()=>{
        const githubContext  = useContext(GithubContext);
        const { users, loading,} = githubContext;


            return <div style={userStyle}>{users.map((user) => <UserItem key={user.id} user={user}/>)}</div>;
}

const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap : '1rem'
};

export default Users;
