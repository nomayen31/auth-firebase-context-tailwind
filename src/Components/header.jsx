import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const header = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .them(()=>{

        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                { 
                 user && 
                <>
                    <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/admin'>Admin Penal</Link>
                </>}
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
                    </> : <Link to="/login">Login </Link>
                }
            </div>
        </div>
    );
};

export default header;