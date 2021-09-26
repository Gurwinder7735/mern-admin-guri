import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, Button, Label, Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserStatus,
  deleteUser,
  getUsers,
  toggleModal,
  setModalType,
  setUser,
} from "../../../store/user/actions";

import DataTable from "react-data-table-component";
import styled, { keyframes } from "styled-components";
import Loader from "react-loader-spinner";
import AddUser from "../AddUser";
import SweetAlert from "react-bootstrap-sweetalert";
import Toggle from "react-toggle";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import axios from "axios";

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

const FilterComponent = ({ filterText, onFilter, onClear, dispatch }) => (
  <div style={{ width: "100%" }}>
    <Row style={{ display: "flex", justifyContent: "space-between" }}>
      <Col style={{ display: "flex", justifyContent: "flex-start" }}>
        <TextField
          id="search"
          type="text"
          placeholder="Search"
          aria-label="Search Input"
          value={filterText}
          onChange={onFilter}
        />
      </Col>
      <Col style={{ display: "flex", justifyContent: "flex-end" }}>
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
      name: "id",
      selector: (row, id) => id + 1,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
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

 
  const editUserPopup = (id) => {
    dispatch(toggleModal());
    dispatch(setModalType("edit"));
    dispatch(setUser(state.user.users.docs.find((u) => u._id == id)));
  };

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [currentPage, setcurrentPage] = useState();
  const [perPage, setPerPage] = useState(10);

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
        dispatch={dispatch}
      />
    );
  }, [filterText, resetPaginationToggle]);

  // const [totalRows, setTotalRows] = useState(0);


  const confirmDeleteUser = (id) => {
    console.log("ID", id);
    dispatch(deleteUser(id, setDeletePopup, currentPage,perPage));
  };


  useEffect(() => {
    dispatch(getUsers(1, perPage));
  }, []);

  useEffect(() => {
    if (filterText) {
      dispatch(getUsers(1, perPage, filterText));
    } else {
      // alert(currentPage);
      dispatch(getUsers(1, perPage));
    }
  }, [filterText]);

  const handlePageChange = (page) => {
    // alert('page',page)
    setcurrentPage(page);
    dispatch(getUsers(page, perPage));
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    // setLoading(true);
    // console.log('newPerPage',newPerPage,page);
    dispatch(getUsers(page, newPerPage));
  };

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
              <Breadcrumbs title="Users" />
              <DataTable
                columns={columns}
                data={state.user.users.docs}
                // data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                progressPending={state.user.loading}
                progressComponent={<CustomLoader />}
                paginationServer
                paginationTotalRows={state.user.users.totalDocs}
                onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={handlePageChange}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Users;
