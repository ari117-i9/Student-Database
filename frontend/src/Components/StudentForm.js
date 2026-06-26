import React from "react";
import * as Yup from "yup";
import {
    Formik, Form,
    Field, ErrorMessage
} from "formik";
import {
    FormGroup,
    FormControl, Button
} from "react-bootstrap";

const StudentForm = (props) => {
    const validationSchema = 
        Yup.object().shape({
            name: Yup.string().required("Required"),
            email: Yup.string().email('You have entered an invalid email address').required("Required"),
            studentId: Yup.number()
                          .positive("Invalid ID number")  
                          .integer("Invalid ID number")
                          .min(8, "Invalid ID number")
                          .required("Required"),
        });

    console.log(props);

    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <Field name="name" type="text" class="form-control"/>
                        <ErrorMessage name="name" className="d-block invalid feedback" component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <Field name="email" type="text" class="form-control"/>
                        <ErrorMessage name="email" className="d-block invalid feedback" component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <Field name="studentId" type="number" class="form-control"/>
                        <ErrorMessage name="studentId" className="d-block invalid feedback" component="span"/>
                    </FormGroup>
                    <Button variant="danger" size="lg" block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>

    );
};

export default StudentForm;