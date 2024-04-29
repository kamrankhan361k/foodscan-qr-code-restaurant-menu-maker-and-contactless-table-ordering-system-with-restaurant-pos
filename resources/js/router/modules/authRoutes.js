import LoginComponent from "../../components/frontend/auth/LoginComponent";
import ForgetPasswordComponent from "../../components/frontend/auth/ForgetPasswordComponent";
import VerifyEmailComponent from "../../components/frontend/auth/VerifyEmailComponent";
import ResetPasswordComponent from "../../components/frontend/auth/ResetPasswordComponent";

export default [
    {
        path: '/login',
        component: LoginComponent,
        name: 'auth.login',
        meta: {
            isFrontend: true,
            auth: false
        }
    },
    {
        path: '/forget-password',
        component: ForgetPasswordComponent,
        name: 'auth.forgetPassword',
        meta: {
            isFrontend: true,
            auth: false
        }
    },
    {
        path: '/forget-password/verify',
        name: 'auth.verifyEmail',
        component: VerifyEmailComponent,
        meta: {
            isFrontend: true,
            auth: false
        }
    },
    {
        path: '/forget-password/reset-password',
        name: 'auth.resetPassword',
        component: ResetPasswordComponent,
        meta: {
            isFrontend: true,
            auth: false
        }
    }

];
