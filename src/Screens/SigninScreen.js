import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'; //we wrap Link inside curly bracket because it is not the default export of 'react-router-dom' its a named export
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



export default function SigninScreen(props){

    const [email,setEmail] =useState('');//store eken state ekak ganane useState() eken
    const [password, setPassword] = useState('');


    const redirect=props.location.search?props.location.search.split('=')[1]:'/';

    const dispatch = useDispatch();//store eken action ekak dispatch karanna ganne useDispatch()

    const {userSignin}=useSelector((state)=>state.userSignin);
    const {userInfo,loading,error}=useSelector((state)=>state.userSignin);

    const submitHandler=(e)=>{
        e.preventDefault();
       dispatch(signin(email,password))
    }

    //use to redirect to home
    useEffect(() => {
      if(userInfo){
          props.history.push(redirect);
      }
    }, [props.history,redirect,userInfo])

    return(
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter email"  required  onChange={e=>setEmail(e.target.value)}></input>
                </div>
                <div>
                <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password"  required  onChange={e=>setPassword(e.target.value)}></input>
                </div>
                <div>
                    <lable />
                    <button className="primary" type="submit">Sign In</button>
                </div>
                <div>
                    <label/>
                    <div>
                        New customer? {' '}
                        <Link to ="/register">Create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}