import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { signinApi } from '../apis/user'

import { signInStart, signInSuccess, signInFailure } from '../redux/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import GoogleAuth from '../components/layout/google';

function LoginPage() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { isLoading, error } = useSelector((state) => state.auth)

    const onFinish = async (values) => {
        try {
            dispatch(signInStart());

            const res = await signinApi(values);

            dispatch(signInSuccess(res.data));

            if (res.data.success == false) {
                dispatch(signInFailure(res.data));
                return;
            }
            navigate('/');
        } catch (error) {
            dispatch(signInFailure(error));
        }
    }

    useEffect(() => {
        if (error) {
            notification.error({
                message: 'Đăng nhập không thành công',
                description: error,
                duration: 1,
            })
        }
    }, [error])

    return (
        <div className="flex items-center justify-center py-10">
            <div className='flex items-center flex-col gap-5 w-[350px] sm:w-[400px]'>
                <h1 className="text-3xl uppercase font-extrabold">Đăng nhập</h1>
                <Form
                    layout='vertical'
                    style={{ background: '#fff', width: '100%', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label={<h3 className='font-bold text-[16px]'>Email</h3>}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập email của bạn!',
                            },
                        ]}
                    >
                        <Input
                            type="email"
                            size='large'
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="example@gmail.com"
                        />
                    </Form.Item>
                    <Form.Item
                        label={<h3 className='font-bold text-[16px]'>Mật khẩu</h3>}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                    >
                        <Input
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Mật khẩu"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button loading={isLoading} disabled={isLoading} size='large' style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <GoogleAuth />
                    </Form.Item>
                    <div className='max-sm:flex-col-reverse gap-2 flex justify-between'>
                        <Link className='text-sm underline' to='/forgot-password'>Quên mật khẩu ?</Link>
                        <p className='text-sm'>Chưa có tài khoản? Đăng ký <Link className='text-sm underline text-[#535bf2]' to='/register'>tại đây</Link></p>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default LoginPage