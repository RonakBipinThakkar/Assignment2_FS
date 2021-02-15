const contentNode = document.getElementById('contents');

class ProductRow extends React.Component 
{
render() {
		return(
		<tr>
			<td>{this.props.product.product}</td>
			<td>${this.props.product.price}</td>
			<td>{this.props.product.category}</td>
			<td><a href={this.props.product.image} target="blank">View</a></td>
		</tr>
		);
	}
}

function ProductTable(props) {
  const productRows = props.products.map(product => <ProductRow key={product.id} product={product} />);

   return (
        <table className="bordered-table">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Image</th>
                </tr>
            </thead>
            
            <tbody>{productRows}</tbody>
        </table>
    );
}

class ProductAdd extends React.Component {
  constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
         var form = document.forms.productAdd;
	 	
        this.props.createProduct({
            product: form.product.value,
            price: form.price.value.slice(1),
            category: form.category.value,
            image: form.image.value,
        });
    // clear the form for the next input
        form.price.value = "$";
        form.product.value = "";
        form.image.value = "";
    }

    render() {
        return (
            <div>
                <form name="productAdd" onSubmit={this.handleSubmit}>
                    <div>
                        <label >Category </label>
                        <select name="category">
                            <option value="Shirts">Shirts</option>
                            <option value="Jeans">Jeans</option>
                            <option value="Jackets">Jackets</option>
                            <option value="Sweaters">Sweaters</option>
                            <option value="Accessories">Accessories</option>
                        </select><br />
                        <label>Price Per Unit </label>
                        <input type="text" name="price" /><br />
                    </div>
                    <div>
                        <label>Product Name</label>
                        <input type="text" name="product" /><br />
                        <label>Image URL</label>
                        <input type="text" name="image" /><br />
                    </div>
                    <button>Add Product</button>
                </form>
            </div>
        );
    }
}





class ProductList extends React.Component 
{
    constructor() 
    {
        super();
        this.state = { products: [] };
        this.createProduct = this.createProduct.bind(this);
    }

    componentDidMount() 
    {
        document.forms.productAdd.price.value = '$';
    }

    createProduct(newProduct) 
    {
        const newProducts = this.state.products.slice();
        newProduct.id = this.state.products.length + 1;
        newProducts.push(newProduct);
        this.setState({ products: newProducts });
    }

    render() 
    {
        return (
            <div>
                <h1>My Company Inventory</h1>
                <div>Showing all available products</div>
                <hr /><br />
                <ProductTable products={this.state.products} />
                <br />
                <div>Add a new product to inventory</div>
                <hr /><br />
                <ProductAdd createProduct={this.createProduct} />
            </div>
        );
    }
}


ReactDOM.render(<ProductList />, contentNode);  // Render the component inside the content Node