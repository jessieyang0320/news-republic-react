import React, {Component} from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom';
import PCIndex from './js/components/pc_index';
import PCNewsDetails from './js/components/pc_news_details';
import MobileNewsDetails from './js/components/mobile_news_details';
import MobileIndex from './js/components/mobile_index';
import PCUserCenter from './js/components/pc_usercenter';
import MobileUserCenter from './js/components/mobile_usercenter';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';


class App extends Component {
	render() {
		return (
			<div>
				<MediaQuery minDeviceWidth={1224}>
					<BrowserRouter >
						<Switch>
						<Route path="/" component={PCIndex}></Route>
						<Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
						<Route path="/usercenter" component={PCUserCenter}></Route>
						</Switch>
					</BrowserRouter>
				</MediaQuery>
				<MediaQuery maxWidth={1224}>
					<BrowserRouter>
						<Switch>
						<Route path="/" component={MobileIndex}></Route>
						<Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
						<Route path="/usercenter" component={MobileUserCenter}></Route>
						</Switch>
					</BrowserRouter>
				</MediaQuery>
			</div>
		);
	};
}
export default App;