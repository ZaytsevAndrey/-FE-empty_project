import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'store/types';
import { loginUser } from 'modules/auth/actions/loginUser';
import { getLoginStatus, getAuthError } from 'modules/auth/selectors/authSelectors';
import requestsStatuses from 'shared/constants/requestsStatuses';

import LoginForm from './LoginForm';
import { LoginFormData } from './types';


const mapStateToProps = (state: RootState) => ({
    isSubmitting: getLoginStatus(state) === requestsStatuses.pending,
    error: getAuthError(state) || undefined,
});

const mapDispatchToProps = {
    onSubmit: (data: LoginFormData) => loginUser(data),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const LoginFormContainer = (props: PropsFromRedux) => {
    const { isSubmitting, error, onSubmit } = props;
    const loginStatus = useSelector(getLoginStatus);
    const navigate = useNavigate();

    useEffect(() => {
        if (loginStatus === requestsStatuses.success) {
            navigate('/');
        }
    }, [loginStatus, navigate]);

    return (
        <LoginForm
            isSubmitting={isSubmitting}
            error={error}
            onSubmit={onSubmit}
            requestStatus={ loginStatus }
        />
    );
};

export default compose(connector)(LoginFormContainer);
