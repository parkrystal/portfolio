import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './Header';
import PfList from './PfList';
import Cards from './Cards';

class Main extends React.Component {
	render() {
		return(
			<>
				<Header />
				<PfList />
				<Cards />
			</>
		);
	};
};

export default Main;