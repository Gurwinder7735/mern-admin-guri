import React, { useState } from "react";
import { Row, Col, Card, CardBody, Button, Label } from "reactstrap";
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio,
} from "availity-reactstrap-validation";
import { addUser } from "../../store/user/actions";
import { useDispatch, useSelector } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const AddUser = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    image: "",
  });

  const handleChange = (e) => {
    console.log();

    if (e.target.name == "image") {
      setData((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.files[0],
        };
      });
    } else {
      setData((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    }

    console.log(data);
  };

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("gender", data.gender);
    formData.append("age", data.age);
    formData.append("image", data.image);
    dispatch(addUser(formData));
  };

  return (
    <>
      <div className="page-content">
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Card>
              <CardBody>
                <h4 className="card-title">Add User</h4>
                <p className="card-title-desc">
                  Provide valuable, actionable feedback to your users with HTML5
                  form validation–available in all our supported browsers.
                </p>
                <AvForm
                  className="needs-validation"
                  onValidSubmit={handleSubmit}
                >
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="validationCustom01"
                        >
                          Name
                        </Label>
                        <AvField
                          name="name"
                          placeholder="Name"
                          type="text"
                          errorMessage="Enter Name"
                          className="form-control"
                          validate={{
                            required: { value: true },
                            minLength: {
                              value: 3,
                              errorMessage: "Min 3 chars.",
                            },
                          }}
                          id="validationCustom01"
                          value={data.name}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="validationCustom02"
                        >
                          Email
                        </Label>
                        <AvField
                          name="email"
                          placeholder="Email"
                          type="text"
                          errorMessage="Enter Email"
                          className="form-control"
                          validate={{ required: { value: true, email: true } }}
                          id="validationCustom02"
                          value={data.email}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="validationCustom02"
                        >
                          Age
                        </Label>
                        <AvField
                          name="age"
                          placeholder="Age"
                          type="text"
                          errorMessage="Enter Age"
                          type="number"
                          className="form-control"
                          validate={{
                            required: { value: true, email: true },
                          }}
                          id="validationCustom02"
                          value={data.age}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="validationCustom04"
                        >
                          Select Gender
                        </Label>
                        <AvRadioGroup
                          inline
                          name="gender"
                          // label="Gender"
                          required
                          errorMessage="Please Select Gender"
                          value={data.gender}
                          onChange={handleChange}
                        >
                          <AvRadio label="Male" value="M" />
                          <AvRadio label="Female" value="F" />
                        </AvRadioGroup>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div className="mb-3">
                        <Label
                          className="form-label"
                          htmlFor="validationCustom02"
                        >
                          Profile Image
                        </Label>
                        <AvField
                          name="image"
                          placeholder="Select Image"
                          type="file"
                          errorMessage="Select Image"
                          className="form-control"
                          validate={{ required: { value: true } }}
                          id="validationCustom02"
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>

                  <Button width="100" color="primary" type="submit">
                     {state.loading? <Loader
                      type="TailSpin"
                      color="#00BFFF"
                      height={20}
                      width={48}
                    /> : 'Submit'}
                   
            
                  </Button>
                </AvForm>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AddUser;
