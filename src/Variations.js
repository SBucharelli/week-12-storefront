import React from 'react'
import { Table } from 'reactstrap'

class Variations extends React.Component {
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
        const response = await fetch('http://localhost:3001/variations');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        const { response } = this.state

        return (
            <div>
                <h1>Variations List</h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Id Number</th>
                            <th>Variation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.response.map(variation =>
                            <tr key={variation.key}>
                                <td>{variation._id}</td>
                                <td>{variation.variation}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Variations