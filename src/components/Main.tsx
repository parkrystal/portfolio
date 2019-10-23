import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './Header'
import PfList from './PfList'

class Main extends React.Component {
	render() {
		return(
			<>
				<Header />
				<PfList />
			</>
		);
	};
};

export default Main;