import React from 'react';

class Showhomework extends React.Component {
    render() {
        const location = this.props.location;
        const params = this.props.match.params;

        var myObject = JSON.parse(JSON.stringify(location, null, 2));

        return (
            <div>
                <h1>Homework</h1>



                {location.search !== "" ?
                    <div>
                        <h2>
                            Text is :<font color="#FFB6C1">{JSON.stringify(location.pa, null, 2)}</font>
                        </h2>

                    </div>
                    :null}

            </div>
        );
    }
}

export default Showhomework;