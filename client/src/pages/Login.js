import React from 'react'
import DefaultLayout from '../components/DefaultLayout'

import {Row,Col,Form,Input} from 'antd'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login'>

        <Row gutter={16}>
        
        <Col lg={16} style={{position:'relative'}}>
        <h1 className='login-logo'>Cars4Rent</h1>
        </Col>
        <Col lg={8} className='text-left p-5'>
        <Form layout='vertical' className='login-form p-5 '>

        <h1>Login</h1>

        <hr />
        <Form.Item name='username' label='Username' rules={[{required:true}]}>

        <Input />
        
        </Form.Item>


        <Form.Item name='password' label='Password' rules={[{required:true}]}>

        <Input />
        
        </Form.Item>


        <button className='btn-1'>Login</button>
        <hr/>

        <Link to='/register'>Dont have an account? Click here</Link>
        
        
        
        </Form>
        
        
        </Col>
        
        
        </Row>
        
        
        </div>
    )
}

export default Login
