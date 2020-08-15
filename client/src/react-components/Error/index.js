import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
class Error extends React.Component {
	render(){
		const {app} = this.props;
		return (
			<div className="errorpage">
				<h1>404 NOT FOUND</h1>
				<Link to={"/mainpage/" + app.state.current}>
					<p className="redirect">Clike here to back to MainPage!</p>
				</Link>
			</div>
		)
	}
}
export default Error;