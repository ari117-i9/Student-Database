import React, { useState } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

const AddStudent = () => {
    const [formValues, setFormValues] = 
    useState({
        name: '',
        email:'',
        studentId:''
    });

    const onSubmit = (studentObject) =>{
        axios.post('http://localhost:4000/students/students', studentObject)
        .then(res => {
            if (res.status === 200)
                alert('Student successfully created')
            else
                Promise.reject
        })
        .catch(err => alert('Something went wrong'))
    };

    return(
        <StudentForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
                Add Student
            </StudentForm>
    );
};

export default AddStudent;

