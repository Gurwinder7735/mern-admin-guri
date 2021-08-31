import React, { Component } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

// layouts
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./assets/scss/theme.scss";

//Fake backend
import fakeBackend from './helpers/AuthType/fakeBackend';
import axios from "axios";

//Firebase helper
// import { initFirebaseBackend } from "./helpers/firebase_helper";
import Toastr from './components/Toaster/index';

// Activating fake backend
// fakeBackend();

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_APIKEY,
// 	authDomain: process.env.REACT_APP_AUTHDOMAIN,
// 	databaseURL: process.env.REACT_APP_DATABASEURL,
// 	projectId: process.env.REACT_APP_PROJECTID,
// 	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
// 	appId: process.env.REACT_APP_APPID,
// 	measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);
// axios.defaults.headers.common["Authorization"] = token;

axios.defaults.baseURL = 'https://mern-admin-test.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:5000/';

axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

    axios.interceptors.request.use(request=> {
		console.log(request);
      // Do something before request is sent
    //   console.log(config)
      return request;
    }, function (error) {
      // Do something with request error
	  console.log('error',error)
      return Promise.reject(error);
    });
    
    // Add a response interceptor
    axios.interceptors.response.use(response=> {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
	 console.log(response)
      return response;
    }, function (error) {
		console.log('ERROR',error);
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    });

  
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.getLayout = this.getLayout.bind(this);
	}



	

	/**
   * Returns the layout
   */
	getLayout = () => {
		let layoutCls = VerticalLayout;

		switch (this.props.layout.layoutType) {
			case "horizontal":
				layoutCls = HorizontalLayout;
				break;
			default:
				layoutCls = VerticalLayout;
				break;
		}
		return layoutCls;
	};


	

	render() {
		const Layout = this.getLayout();

		return (
			<React.Fragment>	
			{console.log('PROPS',this.props.user.success)}
						{this.props.user.success && <Toastr type="success" message ={this.props.user.success} />}
				 
				<Router>
					<Switch>
						{publicRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								layout={NonAuthLayout}
								component={route.component}
								key={idx}
								isAuthProtected={false}
							/>
						))}

						{authProtectedRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								layout={Layout}
								component={route.component}
								key={idx}
								isAuthProtected={true}
							/>
						))}
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		layout: state.Layout,
		user: state.user
	};
};


export default connect(mapStateToProps, null)(App);
