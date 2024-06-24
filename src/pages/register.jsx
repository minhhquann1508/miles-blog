import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';

import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { signupApi } from '../apis/user';

function RegisterPage() {
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: signupApi,
        onSuccess: (response) => {
            if (response.status === 201) {
                notification.success({
                    message: 'Đăng ký thành công!',
                    duration: 1,
                    description: response.data.message,
                });
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                notification.error({
                    message: 'Đăng ký thất bại',
                    duration: 1,
                    description: response.data.message,
                });
            }
        },
        onError: (error) => {
            notification.error({
                message: 'Đăng ký thất bại',
                duration: 1,
                description: error.message,
            });
        },
    });

    const onFinish = async (values) => {
        mutation.mutate(values);
    }

    return (
        <div className="flex items-center justify-center py-10">
            <div className='flex items-center flex-col gap-5 w-[350px] sm:w-[400px]'>
                <h1 className="text-3xl uppercase font-extrabold">Đăng ký tài khoản</h1>
                <Form
                    layout='vertical'
                    style={{ width: '100%', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label={<h3 className='font-bold text-[16px]'>Họ tên đầy đủ</h3>}
                        name="fullname"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập họ tên của bạn!',
                            },
                        ]}
                    >
                        <Input
                            type="text"
                            size='large'
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Nguyễn Văn A"
                        />
                    </Form.Item>
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
                    <Form.Item
                        label={<h3 className='font-bold text-[16px]'>Nhập lại mật khẩu</h3>}
                        name="password2"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập lại mật khẩu!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Mật khẩu không trùng khớp'));
                                },
                            }),
                        ]}
                    >
                        <Input
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            loading={mutation.isPending}
                            disabled={mutation.isPending}
                            size='large'
                            style={{ width: '100%' }}
                            type="primary"
                            htmlType="submit"
                            className="login-form-button">
                            Đăng ký tài khoản
                        </Button>
                    </Form.Item>
                    <div className='flex-col gap-2 flex items-center'>
                        <p className='text-sm'>Đã có tài khoản? Đăng nhập <Link className='text-sm underline text-[#535bf2]' to='/login'>tại đây</Link></p>
                        <p className='text-sm text-center'>Bằng cách đăng ký, bạn đồng ý với <span className='text-[#535bf2] text-sm underline'>Điều khoản</span> sử dụng và <span className='text-[#535bf2] text-sm underline'>Chính sách</span> quyền riêng tư của chúng tôi.</p>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default RegisterPage