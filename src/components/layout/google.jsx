import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { app } from '../../config/firebase';

import { GoogleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { signinGoogle } from '../../apis/user';

import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom';

function GoogleAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoogleAuth = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);

            const response = await signinGoogle({
                fullname: result.user.displayName,
                email: result.user.email,
                avatar: result.user.photoURL
            });

            dispatch(signInSuccess(response.data));
            navigate('/');
        } catch (error) {
            console.log('Không thể đăng nhập với Google', error);
        }
    }

    return (
        <Button
            onClick={handleGoogleAuth}
            size='large'
            style={{ width: '100%' }}
            type="default" htmlType="button"
            className="login-form-button flex items-center"
        >
            <span>Đăng nhập với tài khoản Google</span>
            <span><GoogleOutlined /></span>
        </Button>
    )
}

export default GoogleAuth