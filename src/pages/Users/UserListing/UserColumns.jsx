import React from "react"
import { Link } from "react-router-dom"
import { Badge } from "reactstrap"
import { URL } from "../../.."
import Toggle from 'react-toggle'
// import { changeUserStatus } from "../../../store/user/actions"
import { useDispatch } from "react-redux"

const UserColumns = (handleChangeStatus, handleDeleteUser) => {
  

  return [
  {
    text: "#",
    dataField: "_id",     
    sort: true,
    hidden: false,
    formatter: (cellContent, row,id) => (
      <>
       {row._id}
      </>
    ),
  },
  {
    dataField: "image",
    text: "Image",
    formatter: (cell, row) =>(
        <img className="rounded-circle" height={40} src={URL + 'user.png'}></img>
    )
},
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
      <>
      {console.log('ROW',row)}
        <Toggle
           defaultChecked={row.status}
            aria-label='No label tag'
            onChange={(e) => handleChangeStatus(row._id, e.target.checked)}
        />
        </>
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
]}

export default UserColumns
