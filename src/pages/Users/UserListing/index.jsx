import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, Button, Label, Container } from "reactstrap";
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation";
import { useDispatch, useSelector } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import UserColumns from "./UserColumns";
import { Link } from "react-router-dom";
import {
  changeUserStatus,
  deleteUser,
  getUsers,
} from "../../../store/user/actions";
import AddUser from "../AddUser";
import Loader from "react-loader-spinner";
import SweetAlert from "react-bootstrap-sweetalert";

const NoDataIndication = () => (
  <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh - 50px",
      }}
    >
      <Loader type="ThreeDots" color="#5664D2" height={100} width={100} />
    </div>
  </>
);

const Users = () => {
  const [modal, setModal] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false)
  const [deleteId, setDeleteId] = useState('')
  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);


  const pageOptions = {
    sizePerPage: 10,
    totalSize: state.user.users.length, // replace later with size(Order),
    custom: true,
  };

  const { SearchBar } = Search;

  const users = state.user.users;

  const handleChangeStatus = (id, status) => {
 
    console.log("ID", id);
    console.log("HANDLE CHANGE STATUS", status);
    dispatch(changeUserStatus(id, status));
  };

  const handleDeleteUser = (id) => {

    setDeletePopup(true)
    setDeleteId(id)
    console.log("ID", id);
    // dispatch(deleteUser(id));
  };

  
  const confirmDeleteUser = (id) => {
    console.log("ID", id);
    dispatch(deleteUser(id,setDeletePopup)); 

  };

  

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
    
     {deletePopup && <SweetAlert
        warning
        showCancel
        confirmBtnText={state.alert.loading? <Loader type="ThreeDots" color="#fff" height={10} width={80} />: 'Confirm'}
        // confirmBtnText = 'fgug'
        confirmBtnBsStyle="danger"
        title="Are you sure?"
        onConfirm={()=> confirmDeleteUser(deleteId)}
        onCancel={()=> setDeletePopup(false)}
        focusCancelBtn
      >
        You will not be able to recover this imaginary file!
      </SweetAlert>}
      <AddUser modal={modal} toggle={toggle} />
      <div className="page-content">
        <Container fluid>
          {/* <Breadcrumbs title="Orders" breadcrumbItems={this.state.breadcrumbItems} /> */}
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory(pageOptions)}
                    data={users}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={users}
                        columns={UserColumns(
                          handleChangeStatus,
                          handleDeleteUser
                        )}
                        bootstrap4
                        search
                      >
                        {(toolkitProps) => (
                          <React.Fragment>
                            <Row className="mb-2">
                              <Col sm="4">
                                <div className="search-box me-2 mb-2 d-inline-block">
                                  <div className="position-relative">
                                    <SearchBar {...toolkitProps.searchProps} />
                                    <i className="bx bx-search-alt search-icon" />
                                  </div>
                                </div>
                              </Col>
                              <Col sm="8">
                                <div className="text-sm-end">
                                  {/* <Link to="addUser"> */}
                                  <Button
                                    type="button"
                                    color="success"
                                    className="btn-rounded mb-2 me-2"
                                    onClick={toggle}
                                  >
                                    <i className="mdi mdi-plus me-1" /> Add New
                                    User
                                  </Button>
                                  {/* </Link> */}
                                </div>
                              </Col>
                            </Row>
                            <div className="table-responsive">
                              <BootstrapTable
                                {...toolkitProps.baseProps}
                                {...paginationTableProps}
                                responsive
                                bordered={false}
                                striped={true}
                                // defaultSorted={defaultSorted}
                                // selectRow={selectRow}
                                classes={
                                  "table align-middle table-nowrap table-check"
                                }
                                headerWrapperClasses={"table-light"}
                                noDataIndication={() => <NoDataIndication />}
                              />
                            </div>
                            <div className="pagination pagination-rounded justify-content-end mb-2">
                              <PaginationListStandalone {...paginationProps} />
                            </div>
                          </React.Fragment>
                        )}
                      </ToolkitProvider>
                    )}
                  </PaginationProvider>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Users;
