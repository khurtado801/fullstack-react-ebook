/**
 * React component using an ES6 class that extends the class React.Component
 * Render is the only required method for a React component
 * React uses the return value from this method to determine what to render to the page
 */
class ProductList extends React.Component {
    state = {
            products: [],
    };

    componentDidMount() {
        this.setState({
            products: Seed.products
        })
    }

    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) { // #If current product matches productId
                return Object.assign({}, product, { // #Create new object using assign() method, copy products values from right arg to left arg
                    votes: product.votes + 1, // #Override the votes property on our new product object, increment vote count by 1
                });
            } else {
                return product;
            };
        });
        this.setState({
            products: nextProducts,
        });
    }

    render() {
        const products = this.state.products.sort((a, b) => (
            b.votes - a.votes
        ));
        const productComponents = products.map((product) => (
            <Product
                key={'product-1' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }
}

class Product extends React.Component {
    constructor(props) {
        super(props);
    }


  handleUpVote = () => {
    this.props.onVote(this.props.id);
  }

    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.productImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon' />
                        </a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>
                            {this.props.desscription}
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src={this.props.submitterAvatarUrl}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * ReactDOM has two arguements passed in
 * The first arguement is what we want to render
 * The second arguement is where we want to render it
 */
ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);
