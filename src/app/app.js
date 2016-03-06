import React from 'react';
import Debug from 'debug';

import AppRoot from './components/AppRoot';

var debug = Debug('myApp');

class App extends React.Component {
    constructor(props) {
        debug('create app with options', props);
        super(props);
        this.state = props.state;
    }

    render(element) {
        debug('render app with state', this.state);

        var appRootElement = React.createElement(AppRoot, {
            state: this.state
        });

        if(element) {
            debug('render to Dom');
            React.render(appRootElement, element);
            return;
        }

        debug('render to string');
        return React.renderToString(appRootElement);
    }

    renderToDOM(element) {
        if(!element) {
            return debug (new Error('App.renderToDOM: element is required'));
        }
        this.render(element);
    }

    renderToString() {
        return this.render();
    }
}

export default App;
