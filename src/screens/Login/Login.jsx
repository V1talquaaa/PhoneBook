import { NavLink, useNavigate } from "react-router-dom"
import css from './Login.module.css'
import { useState } from "react"
import { useLoginMutation } from "redux/auth"
import { useDispatch } from "react-redux"
import { setToken } from "redux/auth/slice"


const Login = () => {
    const [login] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => ({...prevState, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       const {data} = await login(state);
       if (data) {
        dispatch(setToken(data.token))
        navigate("/")
       } 
    //    if(!data) {
    //         Notiflix.Notify.failure('Please check your password or email')
    //    }
        reset();
    }

    const reset = () => {
        setState({
            email: "",
            password: "",
        })
    }

    return (
        <form className={css.loginForm} onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="email" onChange={handleChange}></input>
            <input type="password" name="password" placeholder="password" onChange={handleChange}></input>
            <button type="submit">Log In</button>
            <p>Yous still not registered account? Click <NavLink to='/register' className={css.linkToRegister} >registration</NavLink></p>
        </form>
    )
}
export {Login}

