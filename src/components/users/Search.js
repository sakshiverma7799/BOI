import React, { useState, useContext } from 'react';
import GithubContext from "../../context/githubContext";
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const Search = ({icon}) => {
	const [ text, setText ] = useState('');
	const githubContext = useContext(GithubContext);
	const { users, searchUsers, clearUsers, showAlert } = githubContext;

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			showAlert('Enter github username ', 'danger');
		} else {
			searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
		<form className="form" onSubmit={onSubmit}>

			<label><i className={icon} /></label>
			<input size="30" type="text" name="text" placeholder="Search for users" value={text} onChange={onChange} />
			<div class="text-center">
			<input type="submit" value="Compare" className="btn btn-dark btn-lg" /></div>
		</form>
		{users.length>0 && (
			<div class="text-center">
			<button className="btn btn-dark btn-lg" onClick={clearUsers}>
				Clear
			</button></div>
		)}
		</div>
	);
};
Search.defaultProps = {
	icon: 'fa fa-search'
};
export default Search;
