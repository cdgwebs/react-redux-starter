// This handles the App template used on every page
import React, {PropTypes} from 'react';

class App extends React.Component {
    render() {
        return (
            <div className={container-fluid}>
                <h1>Header here...</h1>
                <p>This is the about page</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
