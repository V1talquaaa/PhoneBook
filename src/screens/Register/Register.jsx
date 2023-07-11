import { NavLink, useNavigate } from "react-router-dom"
import css from './Register.module.css'
import { useState } from "react"
import { useRegisterMutation } from "redux/auth"

const Register = () => {
    const [register] = useRegisterMutation();
    const navigate = useNavigate();
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => ({...prevState, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        register(state);
        navigate('/login')
        reset();
    }

    const reset = () => {
        setState({
            name: "",
            email: "",
            password: "",
        })
    }
    return (
        <form className={css.registerForm} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" onChange={handleChange}></input>
            <input type="email" name="email" placeholder="email" onChange={handleChange}></input>
            <input type="password" name="password" placeholder="password" onChange={handleChange}></input>
            <button type="submit">Submit</button>
            <p>If you already have account, <NavLink to='/login' className={css.linkToLogin}>Log In</NavLink></p>
        </form>
    )
}
export {Register}