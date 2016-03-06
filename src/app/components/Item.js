import React from 'react/addons';

class Item extends React.Component {
    shouldComponentUpdate() {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguements);
    }

    render () {
        return <li className="item">{this.props.item.title} - ${this.props.item.price}</li>;
    }
}

Item.propTypes = {
    Item: React.PropTypes.object.isRequired,
};

export default Item;
