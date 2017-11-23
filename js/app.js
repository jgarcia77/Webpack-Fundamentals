require('./login');

var React = require("react");

class MyComponent extends React.Component {

    render() {
        return (
            <div>
                <h3>React Component</h3>
            </div>
        );
    }
};

var ReactDOM = require('react-dom');

ReactDOM.render(<MyComponent />, document.getElementById('container'));