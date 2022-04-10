import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'
const LoginForm = () => {
    //Context
    const { loginUser } = useContext(AuthContext)
    // //Router
    // const history = useHistory()
    //Local state
    const [LoginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const [alert, setAlert] = useState(null)
    const { username, password } = LoginForm
    const onChangeLoginForm = event => setLoginForm({ ...LoginForm, [event.target.name]: event.target.value })
    const login = async event => {
        event.preventDefault()

        try {
            const loginData = await loginUser(LoginForm)
            if (!loginData.success) {
                // history.push('/dashboard')
                setAlert ({type:'danger', message:loginData.message})
                setTimeout(()=> setAlert(null),5000)

            }
            
            



        } catch (error) {
            console.log(error)

        }


    }
    return (
        <> <Form className='my-4' onSubmit={login}>
        <AlertMessage info={alert}/>
            <Form.Group>
                <Form.Control className='mb-3' type='text' placeholder='Nhập tài khoản' name='username' required
                    value={username}
                    onChange={onChangeLoginForm}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control className='mb-3' type='password' placeholder='Nhập mật khẩu' name='password' required
                    value={password}
                    onChange={onChangeLoginForm}
                />
            </Form.Group>
            <Button variant='info' type='submit'>ĐĂNG NHẬP </Button>
        </Form>
            <p >
               
                <Link to='/register'>
                    <Button variant='info' size='sm' className='btn-regis ml-5'>ĐĂNG KÝ </Button>
                </Link>
            </p>
           
            <p >
               
                <Link to='/trangchu'>
                    <Button variant='info' size='sm' className='btn-regis ml-5'>QUAY LẠI TRANG CHỦ</Button>
                </Link>
            </p>
        </>
    )
}
export default LoginForm  