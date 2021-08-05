import React from 'react'

const TableInfo = ({ game_indices, type, weight, moves, stats, attack }) => {
    return (
        <div>
            <h2>#{game_indices}</h2>
            <table className="table" style={{ fontWeight: 'bold'}}>
                <thead>
                    <tr>
                        <th scope="col">type</th>
                        <th scope="col">{type}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>hp</td>
                        <td>{stats}</td>
                    </tr>
                    <tr>
                        <td>attack</td>
                        <td>{attack}</td>
                    </tr>
                    <tr>
                        <td>weight</td>
                        <td>{weight}</td>
                    </tr>
                    <tr>
                        <td>moves</td>
                        <td>{moves}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default TableInfo
