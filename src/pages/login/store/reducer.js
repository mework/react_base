import { fromJS } from 'immutable';
import { actionTypes } from './';

const defaultState = fromJS({
	login_status: false,
})

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return state.set('login_status', true);

		case actionTypes.LOGOUT:
			return state.set('login_status', false);

		default: 
			return state;
	}
}