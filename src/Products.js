import React from 'react'
import { Table } from 'reactstrap'

class Products extends React.Component {
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
        const response = await fetch('http://localhost:3001/products');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        const { response } = this.state

        return (
            <div>
                <h1>Products List</h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Id Number</th>
                            <th>Item Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.response.map(product =>
                            <tr key={product.key}>
                                <td>{product._id}</td>
                                <td>{product.title}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Products