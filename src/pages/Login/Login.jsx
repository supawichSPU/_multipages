import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import { verifyUser } from '../../data/users'
import './Login.css'
function Login({ setToken, setRole }) {
    const userRef = useRef()
    const passRef = useRef()

    return (
        <div className='background'>
            <div className='login-contrainer'>
                <Form.Label htmlFor="user">Username</Form.Label>
                <Form.Control
                    type="text"
                    id="user"
                    placeholder="Enter user"
                    style={{ textAlign: 'center', fontSize: '20px' }}
                    ref={userRef}
                />
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    style={{ textAlign: 'center', fontSize: '20px' }}
                    ref={passRef}
                />
                <button id='btn' className='btn btn-danger mt-3'>Reset</button>
                <button id='btn' className='btn btn-success mt-3' onClick={() => {
                    const user = userRef.current.value.trim()
                    const pass = passRef.current.value.trim()
                    const userInfo = verifyUser(user, pass)
                    userRef.current.value = ''
                    passRef.current.value = ''
                    if (userInfo === null) {
                        alert('Wrong username or password')
                        userRef.current.focus()
                    } else {
                        setToken(userInfo.token)
                        setRole(userInfo.role)
                        alert('Login successfully')
                    }
                }}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;