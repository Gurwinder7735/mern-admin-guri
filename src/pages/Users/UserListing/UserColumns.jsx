import React from "react"
import { Link } from "react-router-dom"
import { Badge } from "reactstrap"
import { URL } from "../../.."

const UserColumns = () => [
  {
    text: "id",
    dataField: "id",
    sort: true,
    hidden: true,
    formatter: (cellContent, row) => (
      <>
        {row.id}
      </>
    ),
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
    formatter: (cellContent, row) => (
      <Link to="#" className="text-body fw-bold">
        {row.name}
      </Link>
    ),
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
    formatter: (cellContent, row) => (
      row.email
    ),
  },
  {
    dataField: "gender",
    text: "Gender",
    sort: true,
  },
  {
    dataField: "status",
    text: "Status",
    sort: true,
    formatter: (cell,row)=>(
       <input type="checkbox" checked={row.status}></input>
    )
  },
  {
      dataField: "image",
      text: "Image",
      formatter: (cell, row) =>(
          <img className="img-rounded" height={40} src={URL + row.image}></img>
      )
  },

//   {
//     dataField: "invoice",
//     isDummyField: true,
//     text: "Invoice",
//     formatter: (cellContent) => (
//       <>
//         <button className="btn btn-light btn-rounded">Invoice <i className="mdi mdi-download ms-2"></i></button>
//       </>
//     ),
//   },
  {
    dataField: "action",
    isDummyField: true,
    text: "Action",
    formatter: (cellContent) => (
      <React.Fragment>
        <Link to="#" className="me-3 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
        <Link to="#" className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
      </React.Fragment>
    ),
  },
]

export default UserColumns
