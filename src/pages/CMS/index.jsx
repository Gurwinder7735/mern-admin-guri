import React,{useEffect} from "react";
import {
  TabContent,
  Nav,
  NavLink,
  NavItem,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Label,
  Container,
  Form,
} from "reactstrap";
import { CKEditor } from "ckeditor4-react";
import { useCKEditor, CKEditorEventAction } from 'ckeditor4-react';

import Breadcrumbs from "../../components/Common/Breadcrumb";
import classnames from "classnames";
import { useState } from "react";
import { AvForm } from "availity-reactstrap-validation";
import { useDispatch, useSelector } from "react-redux";
import { getCMS } from "../../store/cms/actions";

const CMS = () => {

  const [activeTab, setactiveTab] = useState("1");
  const [data, setdata] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data',data);
  };

  const dispatch = useDispatch();
  const state = useSelector(state => state.cms)
  

  useEffect(() => {
    
    dispatch(getCMS(activeTab));
    // setdata(state.content)

  }, [activeTab])


  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="CMS" />
          <Nav pills className="navtab-bg nav-justified">
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: "1" == activeTab,
                })}
                onClick={() => {
                  setactiveTab("1");
                }}
              >
                Terms & Conditions
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: "2" == activeTab,
                })}
                onClick={() => {
                  setactiveTab("2");
                }}
              >
                Privacy Policy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({
                  active: "3" == activeTab,
                })}
                onClick={() => {
                  setactiveTab("3");
                }}
              >
                About Us
              </NavLink>
            </NavItem>
          </Nav>

          <Row>
            <Col xs="12">
              <div className="mt-4">
                <AvForm onValidSubmit={handleSubmit}>
                    {console.log(state.content, '===============++>cms')}
                    
                  <CKEditor
                    initData={<div  dangerouslySetInnerHTML={{ __html:state.content}} ></div>}
                    // onChange={({ editor }) => {
                    //   setdata(editor.getData());
                    //   // console.log(editor.getData());
                    // }}
                  />
                  <Button type="submit" className="mt-3">Update</Button>
                </AvForm>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CMS;
