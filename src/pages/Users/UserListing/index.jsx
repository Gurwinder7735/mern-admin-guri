import React, { useState } from "react";
import { Row, Col, Card, CardBody, Button, Label,Container } from "reactstrap";
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation";
import { useDispatch, useSelector } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import UserColumns from "./UserColumns";



const Users = () => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  const pageOptions = {
    sizePerPage: 10,
    totalSize: 15, // replace later with size(Order),
    custom: true,
  }

  const { SearchBar } = Search;

  const users = [
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21',
      image: 'user.png',
      status: true

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },  {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },

    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Jatin',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Nihal',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },  {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },

    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Jatin',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Nihal',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
     {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },  {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },

    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Jatin',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Nihal',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },  {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },

    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Gurwinder',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Jatin',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },
    {
      id: '1',
      name: 'Nihal',
      email: 'guri8',
      gender: 'Male',
      age: '21'

    },

  ]

  return (
    <>
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
                          columns={UserColumns()}
                          bootstrap4
                          search
                        >
                          
                          {toolkitProps => (
                            <React.Fragment>
                              
                              <Row className="mb-2">
                                <Col sm="4">
                                  <div className="search-box me-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                      <SearchBar
                                        {...toolkitProps.searchProps}
                                      />
                                      <i className="bx bx-search-alt search-icon" />
                                    </div>
                                  </div>
                                </Col>
                                <Col sm="8">
                                  <div className="text-sm-end">
                                    <Button
                                      type="button"
                                      color="success"
                                      className="btn-rounded mb-2 me-2"
                                      // onClick={this.handleOrderClicks}
                                    >
                                      <i className="mdi mdi-plus me-1" />{" "}
                                      Add New User
                                    </Button>
                                  </div>
                                </Col>
                              </Row>
                              <div className="table-responsive">

                                <BootstrapTable
                                  {...toolkitProps.baseProps}
                                  {...paginationTableProps}
                                  responsive
                                  bordered={false}
                                  striped={false}
                                  // defaultSorted={defaultSorted}
                                  // selectRow={selectRow}
                                  classes={
                                    "table align-middle table-nowrap table-check"
                                  }
                                  headerWrapperClasses={"table-light"}
                                />
                                
                              </div>
                              <div className="pagination pagination-rounded justify-content-end mb-2">
                                <PaginationListStandalone
                                  {...paginationProps}
                                />
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
