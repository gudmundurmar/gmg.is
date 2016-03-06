import React from 'react/addons';
import Item from './Item';

class Cart extends React.Component {
    shouldComponentUpdate() {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
    render() {
        return <div className="cart">
            <h2>{this.props.cart.title}</h2>
            <ul>
                {this.props.cart.items.map(function (item, key) {
                    return <Item key={key} item={item} />;
                })}
            </ul>
        </div>;
    }
}

Cart.propTypes = {
    Cart: React.PropTypes.object.isRequired,
};

export default Cart;
