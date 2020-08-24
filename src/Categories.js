import React from 'react'
import { Table } from 'reactstrap'

class Categories extends React.Component {
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
            .catch(err => console.log(err))
    }

    callApi = async () => {
        const response = await fetch('http://localhost:3001/categories')
        const body = await response.json()
        if (response.status !== 200) throw Error(body.message)

        return body
    }

    render() {
        return (
            <div>
                <h1>Category List</h1>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Id Number</th>
                            <th>Category Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.response.map(category =>
                            <tr key={category.id}>
                                <td>{category._id}</td>
                                <td>{category.name}
                                    {category.Type}
                                    {category.category}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Categories