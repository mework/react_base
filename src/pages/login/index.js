import React from 'react';
import { connect } from 'react-redux';
import { getIn } from 'immutable';
import { actionCreators } from './store';
import {
	LoginWrapper,
	LoginButton,
} from './style';

const Login = (props) => {
	const {
		login_status,
		toggleStatus,
	} = props;

	return (
		<LoginWrapper>
			这是登陆页
			<LoginButton
				onClick={() => {toggleStatus(login_status)}}
			>
				切换登录状态
			</LoginButton>
			{
				login_status ?
				'已登录'
				:
				'未登录'
			}
		</LoginWrapper>
	);
}


const mapState = (state) => ({
	login_status: getIn(state, ['login', 'login_status'])
});

const mapDispatch = (dispatch) => ({
	toggleStatus(login_status) {
		if (login_status) {
			dispatch(actionCreators.logout());
		} else {
			dispatch(actionCreators.login());
		}
	},
})


export default connect(mapState, mapDispatch)(Login);