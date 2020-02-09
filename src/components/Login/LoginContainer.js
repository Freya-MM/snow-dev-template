/** Created by github.com/snow-dev: 03/02/20 - titor **/

/** Import react section **/
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/** Import hooks section **/
import { useDispatch, useSelector } from 'react-redux';

/** Import component section **/
import LoginComponent from './LoginComponent';
import { executeLogin } from '../../store/login/loginActions';

/** Import helpers section **/

/** Import resources section **/

export function LoginContainer() {
	const dispatch = useDispatch();
	const session = useSelector(store => store.session);
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const onChangeHandler = (e) => {
		e.preventDefault();
		const input = e.target.name;

		if (input === 'userName'){
			setUsername(e.target.value);
		} else {
			setPassword(e.target.value); 
		}
		console.log(username);
		console.log(password);
	} 
	
	return <LoginComponent session={session} onChangeHandler = {onChangeHandler} />;
}

/**
 * Validate properties that component will need.
 * @type {{}}
 */
LoginContainer.propTypes = {};

export default LoginContainer;