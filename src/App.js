import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,NavLink,Redirect} from 'react-router-dom';
import {Home,BasicRouting,Blocking,Miss,NoMatch,Recursive,QueryParams,Protected,Login,Homework,Showhomework} from './Components';
import fakeAuth from "./Auth";
import route from './routing-config';


class App extends Component {
    constructor() {
        super();
        this.age = "655";
        this.state = {name: "Mee", age: "001"};
    }

    onClick() {
        this.setState({name: "awsdas"})
    }

    setAge(e) {
        const age = e.target.value;
        this.setState({age: age});
    }

        getVal = () => {
            return "Meuza";
        }
        render()
        {

            const myname = "Meuza"
            return (
                <BrowserRouter>
				{/*<div class="App-header">*/}
					<div className="App">
						<div className="App-header">
							<img src={logo} className="App-logo" alt="logo"/>
                            <ul>
                                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                                <li><NavLink to="/BasicRouting" activeClassName="active">BasicRouting</NavLink></li>
                                <li><NavLink to="/Blocking" activeClassName="active">Blocking</NavLink></li>
                                <li><NavLink to="/Miss" activeClassName="active">Miss</NavLink></li>
                                <li><NavLink to="/Recursive" activeClassName="active">Recursive</NavLink></li>
                                <li><NavLink to="/Login" activeClassName="active">Login</NavLink></li>
                                <li><NavLink to="/Protected1" activeClassName="active">Protected1</NavLink></li>

                                <li><NavLink to="/Homework" activeClassName="active">Homework</NavLink></li>
                            </ul>
							{/*<h2>Welcome to React</h2>*/}
						</div>
						{/*<div className="App-intro">*/}
							{/*To get started, edit <code>src/App.js</code> and save to reload.*/}
						{/*</div>*/}
                        <div>
                            <switch>
                                {<div>
                                    <Route path="/" component={Home} exact={true} />
                                    <Route path="/BasicRouting" component={BasicRouting}/>
                                    <Route path="/Blocking" component={Blocking}/>
                                    <Route path="/Miss" component={Miss}/>
                                    <Route path="/Recursive" component={Recursive}/>
                                    <Route path="/QueryParams" component={QueryParams}/>
                                    <Route path="/Login" component={Login}/>
                                    <Route path="/Homework" component={Homework}/>
                                    <Route path="/Showhomework" component={Showhomework}/>

                                    <Route path="/Protected1" component={() =>
                                        (fakeAuth.isAuthenticated ?
                                            (<Protected />) :
                                            (<Redirect to={{pathname: "/Login", state: {from: "/Protected1"}}}/> ))} />
                                </div>}
                                {/*{routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}*/}
                                {/*<Route component={NoMatch}/>*/}
                            </switch>
                            {/*{routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}*/}
                        </div>
					</div>

                </BrowserRouter>
            );
        }

}

export default App;
