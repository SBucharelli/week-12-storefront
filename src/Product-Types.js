import React from 'react'
import { Table } from 'reactstrap'

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
        const { response } = this.state

        return (
            <div>
                <h1>Product Types List</h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Id Number</th>
                            <th>Product Type Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.response.map(productType =>
                            <tr key={productType.key}>
                                <td>{productType._id}</td>
                                <td>{productType.Type}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ProductTypes