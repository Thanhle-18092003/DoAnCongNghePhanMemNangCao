import React from 'react'
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()

const Register = () => {
    return (
        <>
            <div className="login">
                {(<Spinner />)}
                <Row gutter={16} className="d-flex align-items-center">
                    <Col lg={16} style={{ position: "relative" }}>
                        <img
                            className='w-100'
                            data-aos='slide-left'
                            data-aos-duration='1500'
                            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" />
                        <h1 className="login-logo">MOONCAR</h1>
                    </Col>
                    <Col lg={8} className="text-left p-5">
                        <Form layout="vertical" className="login-form p-5">
                            {/* <h1 className="text-center text-lg text-white">Đăng Ký</h1>                             */}
                            <Form.Item
                                name="username"
                                label="Username"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="cpassword"
                                label="Confirm Password"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>

                            <button className="btn1 my-0 mx-auto w-full text-md text-white hover:bg-gray-50 hover:text-black rounded-lg px-4 py-3 focus:outline-none">Đăng Ký</button>

                            <hr />

                            <Link to="/dangnhap">Nhấn vào đây để Đăng nhập</Link>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Register