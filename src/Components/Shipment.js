import React from 'react';
import List from './List';

const Shipments = (props) => {

    return (
        <div className="col-md-12">
            <h4>Shipments List.</h4>
        
          <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Cargo
                  <p>Type | Desc | Volume</p>
                  </th>
                  <th scope="col">Mode</th>
                  <th scope="col">Type</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Origin</th>
                  <th scope="col">Services
                  <p>Type</p>
                  </th>
                  <th scope="col">Total</th>
                  <th scope="col">Status</th>
                  <th scope="col">UserID</th>
                </tr>
              </thead>
              <tbody>
                  {
                        props.data.map(data => {
                        return <tr key={data.id}>
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>
                              <ul>
                                {data.cargo.map(cargo => <List data={cargo}/>)}
                              </ul>
                            </td>
                            <td>{data.mode}</td>
                            <td>{data.type}</td>
                            <td>{data.destination}</td>
                            <td>{data.origin}</td>
                            <td>
                              <ul>
                                {data.services.map(service => <List data={service} />)}
                              </ul>
                            </td>
                            <td>{data.total}</td>
                            <td>{data.status}</td>
                            <td>{data.userId}</td>
                        </tr>
                      })
                  }
              </tbody>
            </table>
          </div>
)}

export default Shipments;