import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, Button, Label, Container } from "reactstrap";
// import {
//   AvForm,
//   AvField,
//   AvRadioGroup,
//   AvRadio,
// } from "availity-reactstrap-validation";
import { useDispatch, useSelector } from "react-redux";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory, {
//   PaginationProvider,
//   PaginationListStandalone,
// } from "react-bootstrap-table2-paginator";
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// import UserColumns from "./UserColumns";
// import { Link } from "react-router-dom";
import {
  changeUserStatus,
  deleteUser,
  getUsers,
  toggleModal,
  setModalType,
  setUser,
} from "../../../store/user/actions";
// import AddUser from "../AddUser";
// import Loader from "react-loader-spinner";
// import SweetAlert from "react-bootstrap-sweetalert";
// import Breadcrumbs from '../../../components/Common/Breadcrumb';

// const NoDataIndication = () => (
//   <>
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh - 50px",
//       }}
//     >
//       <Loader type="ThreeDots" color="#5664D2" height={100} width={100} />
//     </div>
//   </>
// );

// const Users = () => {
//   const [modal, setModal] = useState(false);

//   const [deletePopup, setDeletePopup] = useState(false)
//   const [deleteId, setDeleteId] = useState('')

//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);

//   const pageOptions = {
//     sizePerPage: 10,
//     totalSize: state.user.users.length, // replace later with size(Order),
//     custom: true,
//   };

//   const { SearchBar } = Search;

//   const users = state.user.users;

//   const handleChangeStatus = (id, status) => {

//     console.log("ID", id);
//     console.log("HANDLE CHANGE STATUS", status);
//     dispatch(changeUserStatus(id, status));
//   };

//   const handleDeleteUser = (id) => {

//     setDeletePopup(true)
//     setDeleteId(id)

//   };

//   const confirmDeleteUser = (id) => {
//     console.log("ID", id);
//     dispatch(deleteUser(id,setDeletePopup));

//   };

//   const editUserPopup = (id) => {

//     dispatch(toggleModal());
//     dispatch(setModalType('edit'))
//     dispatch(setUser(state.user.users.find((u => u._id == id))))

//   }

//   useEffect(() => {
//     dispatch(getUsers());
//   }, []);

//   return (
//     <>

//      {deletePopup && <SweetAlert
//         warning
//         showCancel
//         confirmBtnText={state.alert.loading? <Loader type="ThreeDots" color="#fff" height={10} width={80} />: 'Confirm'}
//         // confirmBtnText = 'fgug'
//         confirmBtnBsStyle="danger"
//         title="Are you sure?"
//         onConfirm={()=> confirmDeleteUser(deleteId)}
//         onCancel={()=> setDeletePopup(false)}
//         focusCancelBtn
//       >
//         You will not be able to recover this imaginary file!
//       </SweetAlert>}
//       <AddUser modal={state.user.isModalOpen} />
//       <div className="page-content">
//         <Container fluid>
//           <Breadcrumbs title="Orders"/>

//           <Row>
//             <Col xs="12">
//               <Card>
//                 <CardBody>
//                   <PaginationProvider
//                     pagination={paginationFactory(pageOptions)}
//                     data={users}
//                   >
//                     {({ paginationProps, paginationTableProps }) => (
//                       <ToolkitProvider
//                         keyField="id"
//                         data={users}
//                         columns={UserColumns(
//                           handleChangeStatus,
//                           handleDeleteUser,
//                           editUserPopup
//                         )}
//                         bootstrap4
//                         search
//                       >
//                         {(toolkitProps) => (
//                           <React.Fragment>
//                             <Row className="mb-2">
//                               <Col sm="4">
//                                 <div className="search-box me-2 mb-2 d-inline-block">
//                                   <div className="position-relative">
//                                     <SearchBar {...toolkitProps.searchProps} />
//                                     <i className="bx bx-search-alt search-icon" />
//                                   </div>
//                                 </div>
//                               </Col>
//                               <Col sm="8">
//                                 <div className="text-sm-end">
//                                   {/* <Link to="addUser"> */}
//                                   <Button
//                                     type="button"
//                                     color="success"
//                                     className="btn-rounded mb-2 me-2"
//                                     onClick={() => dispatch(toggleModal())}
//                                   >
//                                     <i className="mdi mdi-plus me-1" /> Add New
//                                     User
//                                   </Button>
//                                   {/* </Link> */}
//                                 </div>
//                               </Col>
//                             </Row>
//                             <div className="table-responsive">
//                               <BootstrapTable
//                                 {...toolkitProps.baseProps}
//                                 {...paginationTableProps}
//                                 responsive
//                                 bordered={false}
//                                 striped={true}
//                                 // defaultSorted={defaultSorted}
//                                 // selectRow={selectRow}
//                                 classes={
//                                   "table align-middle table-nowrap table-check"
//                                 }
//                                 headerWrapperClasses={"table-light"}
//                                 noDataIndication={() => <NoDataIndication />}
//                               />
//                             </div>
//                             <div className="pagination pagination-rounded justify-content-end mb-2">
//                               <PaginationListStandalone {...paginationProps} />
//                             </div>
//                           </React.Fragment>
//                         )}
//                       </ToolkitProvider>
//                     )}
//                   </PaginationProvider>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Users;

import DataTable from "react-data-table-component";
import styled, { keyframes } from "styled-components";
import Loader from "react-loader-spinner";
import AddUser from "../AddUser";
import SweetAlert from "react-bootstrap-sweetalert";
import Toggle from "react-toggle";
import { Link } from "react-router-dom";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 16px;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const CustomLoader = () => (
  <div style={{ padding: "24px" }}>
    <Spinner />
    <div className="text-center">Loading...</div>
  </div>
);

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear,dispatch }) => (
  
  <div style={{width: '100%'}}>
  <Row style={{display: 'flex',justifyContent:'space-between'}}>
  <Col style={{display: 'flex',justifyContent:'flex-start'}}>
    <TextField
      id="search"
      type="text"
      placeholder="Search"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    </Col>
    <Col style={{display: 'flex',justifyContent:'flex-end'}}>
      <div className="text-sm-end">
        {/* <Link to="addUser"> */}
        <Button
          type="button"
          color="success"
          className="btn-rounded mb-2 me-2"
          onClick={() => dispatch(toggleModal())}
        >
          <i className="mdi mdi-plus me-1" /> Add New User
        </Button>
        {/* </Link> */}
      </div>
    </Col>
 
    </Row>
  </div>
);

const Users = () => {
  const columns = [
    {
      name: "#",
      selector: (row, id) => id + 1,
    },
    {
      name: "Name",
      selector: "name",
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Status",
      selector: (row) => {
        return (
          <>
            <Toggle
              checked={row.status}
              aria-label="No label tag"
              onChange={(e) => {
                dispatch(changeUserStatus(row._id, e.target.checked));
                row.status = !row.status;
                //  alert(e.target.checked)
                //  e.target.checked = !e.target.checked
                // handleChangeStatus(row._id, e.target.checked)
              }}
            />
          </>
        );
      },
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <React.Fragment>
            <Link
              onClick={() => editUserPopup(row._id)}
              className="me-3 text-primary"
            >
              <i className="mdi mdi-pencil font-size-18"></i>
            </Link>
            <Link
              onClick={() => handleDeleteUser(row._id)}
              className="text-danger"
            >
              <i className="mdi mdi-trash-can font-size-18"></i>
            </Link>
          </React.Fragment>
        );
      },
    },
  ];

  const [modal, setModal] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleChangeStatus = (id, status) => {
    console.log("ID", id);
    console.log("HANDLE CHANGE STATUS", status);
    dispatch(changeUserStatus(id, status));
  };

  const handleDeleteUser = (id) => {
    setDeletePopup(true);
    setDeleteId(id);
  };

  const confirmDeleteUser = (id) => {
    console.log("ID", id);
    dispatch(deleteUser(id, setDeletePopup));
  };

  const editUserPopup = (id) => {
    dispatch(toggleModal());
    dispatch(setModalType("edit"));
    dispatch(setUser(state.user.users.find((u) => u._id == id)));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const filteredItems = state.user.users.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {

    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
        dispatch = {dispatch}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <>
      {deletePopup && (
        <SweetAlert
          warning
          showCancel
          confirmBtnText={
            state.alert.loading ? (
              <Loader type="ThreeDots" color="#fff" height={10} width={80} />
            ) : (
              "Confirm"
            )
          }
          // confirmBtnText = 'fgug'
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={() => confirmDeleteUser(deleteId)}
          onCancel={() => setDeletePopup(false)}
          focusCancelBtn
        >
          You will not be able to recover this imaginary file!
        </SweetAlert>
      )}
      <AddUser modal={state.user.isModalOpen} />
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                // persistTableHead
                progressPending={state.user.loading}
                progressComponent={<CustomLoader />}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Users;
