import React, { useState } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

const EditStudent = () => {
    const [formValues, setFormValues] = 
    useState({
        name: '',
        email:'',
        studentId:''
    });

    const onSubmit = (studentObject) => {
        axios.put("http://localhost:4000/students/students/" + props.match.params.id, studentObject)
        .then((res) => {
            if (res.data === 200){
                alert("Student information successfully updated")
                props.history.push("/student-list")
            }
            else{
                Promise.reject()
            }

        })
        .catch((err) => alert("Something went wrong"))
    };

    useEffect (() => {
        axios.get("http://localhost:4000/students/update-student/" + props.match.params.id)
        .then((res) => {
            const{
                name,
                email,
                studentId
            } = res.data
            setFormValues({
                name,
                email,
                studentId
            })
        })
        .catch((err) => console.log(err))
    }, []);

    return (
        <StudentForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Update Student Info
        </StudentForm>
    );
};

export default EditStudent;