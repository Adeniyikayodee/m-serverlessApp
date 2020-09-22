import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown , faThumbsUp , faImage , faMoneyCheckAlt, faSearchDollar } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  state = { 
      isLoading :false,
      invoices : [ 
      {
        "id" : "100",
        "Vendor" : "Access",
        "Amount" : "#160,000",
        "Date"  : "08/10/2020",
        "Type" : "Commercial",
        "Status" : "New"
      },

      {
        "id" : "200",
        "Vendor" : "FCMB",
        "Amount" : "#860,000",
        "Date"  : "20/10/2020",
        "Type" : "Commercial",
        "Status" : "New"
      },

      {
        "id" : "300",
        "Vendor" : "ZENITH",
        "Amount" : "#160,000",
        "Date"  : "23/10/2020",
        "Type" : "Commercial",
        "Status" : "New"
      },

      {
        "id" : "400",
        "Vendor" : "FBN",
        "Amount" : "#230,000",
        "Date"  : "07/10/2020",
        "Type" : "Commercial",
        "Status" : "New"
      },

      {
        "id" : "500",
        "Vendor" : "GTB",
        "Amount" : "#160,000",
        "Date"  : "08/10/2020",
        "Type" : "Commercial",
        "Status" : "New"
      },

      {
        "id" : "600",
        "Vendor" : "UBA",
        "Amount" : "#210,000",
        "Date"  : "02/10/2020",
        "Type" : "Commercial",
        "Status" : "New"
      }
    ]
  }

  remove(id){
    console.log(id)
    let updatedInvoices =  [...this.state.invoices].filter (i => i.id !== id)
    
    this.setState({invoice : updatedInvoices});
  }

  render() {

    const isLoading= this.state.isLoading;
    const allinvoices = this.state.invoices;



    if (isLoading)
      return(<div>loading...</div>)

    let invoices =
    allinvoices.map( invoice =>
        <tr key={invoice.id}>
          <td>{invoice.Vendor}</td>
          <td>{invoice.Amount}</td>
          <td>{invoice.Date}</td>
          <td>{invoice.Type}</td>
          <td>{invoice.Status}</td>
          <td><Button className="btn btn-lg btn-success" onClick={() => this.remove(invoice.id)}> <FontAwesomeIcon icon={faThumbsUp} />Okay</Button></td>
          <td><Button className="btn btn-lg btn-danger" onClick={() => this.remove(invoice.id)}> <FontAwesomeIcon icon={faThumbsDown} />Not Suitable</Button></td>
          <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.id)}> <FontAwesomeIcon icon={faMoneyCheckAlt} />50%</Button></td>
          <td><Button className="btn btn-lg btn-warning" onClick={() => this.remove(invoice.id)}> <FontAwesomeIcon icon={faSearchDollar} />??</Button></td>
          <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(invoice.id)}> <FontAwesomeIcon icon={faImage} />Image</Button></td>
        </tr>
    
    )

    return (

      <div className="container border border-secondary rounded center">

          <div className="row">
                <div className="col-12">
                    <h4>Pending Invoices</h4>
                </div>
          
          </div>

          <div className="row">
              <div className=".col-xs-12 center text-center">
                  <Table dark responsive striped bordered hover>
                      <thead>
                          <th>Vendor</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>Type</th>
                          <th>Status</th>
                          <th colSpan="4">Actions</th>
                          <th>Image</th>
                      </thead>

                  <tbody>
                      {this.state.invoices.length === 0 ? <td colSpan="9">Completed</td> : invoices }
                  </tbody>
                  </Table>
              </div>

          </div>
      



      </div>
    
    );

  }

}
 
export default App;