import React from 'react'
import { Table } from 'reactstrap'

class Stores extends React.Component {
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
    }

    callApi = async () => {
        const response = await fetch('http://localhost:3001/stores')
        const body = await response.json()
        if (response.status !== 200) throw Error(body.message)

        return body
    }

    render() {
        return (
            <div>
                <div>Stores Place holder</div>
                <div>{this.state.response.map(store =>
                    <p key={store.key}>{store.name}</p>
                )}</div>
            </div>
        )
    }

    render() {
        const { response } = this.state

        return (
            <div>
                <h1>Store List</h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Id Number</th>
                            <th>Store Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.response.map(store =>
                            <tr key={store.key}>
                                <td>{store._id}</td>
                                <td>
                                    {store.name}
                                    {store.companyName}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Stores