import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from './style';
import store from './store';

// 导入页面
import Home from './pages/home';
import Login from './pages/login';


import Header from './common/header';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<GlobalStyle />
				<BrowserRouter>
					<Header />
					<Route exact path={['/', '/index.html']} component={Home} />
					<Route exact path="/login" component={Login} />
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
