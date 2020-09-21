import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';


class App extends Component {
  state = { 
      isLoading :false,
      invoices : []
   }

  render() {

    const isLoading= this.state.isLoading;
    const allinvoices = this.state.invoices

    const body =  
    [ 
      {
        "id" : "100",
        "Vendor" : "Access",
        "Amount" : "#160,000",
        "Date"  : "08/10/2020",
        "Invoice" : "123",
        "Status" : "New"
      },

      {
        "id" : "100",
        "Vendor" : "FCMB",
        "Amount" : "#160,000",
        "Date"  : "08/10/2020",
        "Invoice" : "123",
        "Status" : "New"
      },

      {
        "id" : "100",
        "Vendor" : "ZENITH",
        "Amount" : "#160,000",
        "Date"  : "08/10/2020",
        "Invoice" : "123",
        "Status" : "New"
      },

      {
        "id" : "100",
        "Vendor" : "FBN",
        "Amount" : "#160,000",
        "Date"  : "08/10/2020",
        "Invoice" : "123",
        "Status" : "New"
      },

      {
        "id" : "100",
        "Vendor" : "GTB",
        "Amount" : "#160,000",
        "Date"  : "08/10/2020",
        "Invoice" : "123",
        "Status" : "New"
      },

      {
        "id" : "100",
        "Vendor" : "UBA",
        "Amount" : "#210,000",
        "Date"  : "09/10/2020",
        "Invoice" : "123",
        "Status" : "New"
      }
    ]

    if (isLoading)
        return(<div>loading...</div>)

    let invoices 

    return (

      <div className="container border border-secondary rounded center">

          <div className="row">
                <div className="col-12">
                    <h4>Pending Invoices - The M Company</h4>
                </div>
          
          </div>

          <div className="row">
              <div className=".col-xs-12 center text-center">
                  <Table dark responsive striped bordered hover>
                      <thead>
                          <th>Vendor</th>
                          <th>Amount</th>
                          <th>Invoice #</th>
                          <th>Status</th>
                          <th>Date</th>
                          <th colSpan="4">Actions</th>
                          <th>Image</th>
                      </thead>

                  <tbody>
                      {this.state.invoices.length === 0 ? <td colSpan="9">Done!</td>}
                  </tbody>
                  </Table>
              </div>

          </div>
      



      </div>
    
    );

  }

}
 
export default App;