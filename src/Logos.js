import React from 'react'
import { Table } from 'reactstrap'

class Logos extends React.Component {
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
        const response = await fetch('http://localhost:3001/logos');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        const { response } = this.state

        return (
            <div>
                <h1>Logos List</h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Id Number</th>
                            <th>Logo Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.response.map(logo =>
                            <tr key={logo.key}>
                                <td>{logo._id}</td>
                                <td>{logo.name}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}


export default Logos