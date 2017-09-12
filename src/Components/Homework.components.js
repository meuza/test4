import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Content } from '../Components';

class Homework extends React.Component {

    constructor(){
        super();
        this.state={
            Pa : "",
        };
    }
    setParam(p){
        const pa = p.target.value;
        this.setState({Pa : pa});
    }
    render() {
        const { match } = this.props;
        return (
            <div>
                <h1>Please your text :</h1>
                <div>
                    <input onChange={this.setParam.bind(this)}/>
                </div>
                <div>
                    <ul>
                        <li><Link to={{pathname: "Showhomework/level9", search: '?erer:1234' , pa : this.state.Pa}} className="active">Insert</Link></li>
                    </ul>
                </div>
                <div className="rightContent">
                    <Route path="/Showhomework" component={Content} />
                </div>
            </div>
        );
    }
}

export default Homework;