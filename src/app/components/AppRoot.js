import React from 'react/addons';
import Cart from './Cart';

import config from '../../../config/app';

class AppRoot extends React.Component {
    shouldComponentUpdate () {
        return React.addons.PurerenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    render () {
        return (
            <div className="appRoot">
                <h1>{config.title}</h1>
            </div>);
    }
}

AppRoot.propTypes = {
    state: React.PropTypes.object.isRequired,
};

export default AppRoot;
