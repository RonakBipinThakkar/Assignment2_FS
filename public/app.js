const contentNode = document.getElementById('contents');

class ProductRow extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, this.props.product.product), /*#__PURE__*/React.createElement("td", null, "$", this.props.product.price), /*#__PURE__*/React.createElement("td", null, this.props.product.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: this.props.product.image,
      target: "blank"
    }, "View")));
  }

}

function ProductTable(props) {
  const productRows = props.products.map(product => /*#__PURE__*/React.createElement(ProductRow, {
    key: product.id,
    product: product
  }));
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Image"))), /*#__PURE__*/React.createElement("tbody", null, productRows));
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
      image: form.image.value
    }); // clear the form for the next input

    form.price.value = "$";
    form.product.value = "";
    form.image.value = "";
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
      name: "productAdd",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Category "), /*#__PURE__*/React.createElement("select", {
      name: "category"
    }, /*#__PURE__*/React.createElement("option", {
      value: "Shirts"
    }, "Shirts"), /*#__PURE__*/React.createElement("option", {
      value: "Jeans"
    }, "Jeans"), /*#__PURE__*/React.createElement("option", {
      value: "Jackets"
    }, "Jackets"), /*#__PURE__*/React.createElement("option", {
      value: "Sweaters"
    }, "Sweaters"), /*#__PURE__*/React.createElement("option", {
      value: "Accessories"
    }, "Accessories")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Price Per Unit "), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "price"
    }), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Product Name"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "product"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Image URL"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "image"
    }), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("button", null, "Add Product")));
  }

}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    document.forms.productAdd.price.value = '$';
  }

  createProduct(newProduct) {
    const newProducts = this.state.products.slice();
    newProduct.id = this.state.products.length + 1;
    newProducts.push(newProduct);
    this.setState({
      products: newProducts
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "My Company Inventory"), /*#__PURE__*/React.createElement("div", null, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(ProductTable, {
      products: this.state.products
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", null, "Add a new product to inventory"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(ProductAdd, {
      createProduct: this.createProduct
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(ProductList, null), contentNode); // Render the component inside the content Node