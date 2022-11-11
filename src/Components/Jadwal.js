import Table from 'react-bootstrap/Table';
import React, { Component } from 'react'

function BasicExample() {
    return (
    
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
          
          </tr>
        </tbody>
        <img src='https://i.ibb.co/j5BDRbS/hehe.jpg' className='h-100'></img>   
      </Table>
    );

  }
  
  export default BasicExample;
