import React from 'react'

class ProductTypes extends React.Component {
    constructor() {
        super()
        this.state = {
            response: []
        }
    }

    componentDidMount() {
        this.callApi()
            .then((response) => {
                this.setState({ response })
            })
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('http://localhost:3001/product-types');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div>
                <div>Products Place holder</div>
                <div>{this.state.response.map(productType =>
                    <p key={productType.key}>{productType.Type}</p>
                )}</div>
            </div>
        )
    }
}

export default ProductTypes