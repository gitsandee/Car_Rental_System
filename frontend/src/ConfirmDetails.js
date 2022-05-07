import React, { useEffect, useState } from 'react'
import { Form } from './Form'
import { deleteOne, get, getOne, update } from './Requests';
import { useNavigate } from "react-router-dom"


import { Link, useParams } from "react-router-dom";

export const ConfirmDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [typesFieldsMapper, setTypesFieldsMapper] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [formDetails, setFormDetails] = useState({});
    const [formType, setFormType] = useState()
    useEffect(() => onLoad(), []);

    const onLoad = () => {
        setIsLoading(true)
        get(
            "formTypes",
            (props) => {
                console.log(props);
                setTypesFieldsMapper(props.data);
            },
            (err) => console.log(err)
        );
        getOne(
            "formSubmissions",
            id,
            (props) => {
                console.log(props);
                setFormType(props.data[0]?.formType)
                setFormDetails(props.data[0]?.formDetails);
                setIsLoading(false);
            },
            (err) => console.log(err)
        );

        console.log({ formDetails })

    };

    if (isLoading) {
        return (<div>Loading...</div>)
    }

    const onCancel = () => {
        deleteOne('formSubmissions', id)
    navigate('/')
    }

    const onUpdateSubmit = (formDetails) => {

        update('formSubmissions', id, formDetails)
        onLoad()
    }

    if (formDetails) {
        return (

            <div style={{ backgroundColor: "transparent", height: '100%' }}>
                <div style={{ fontSize: 50, color: 'black' }}>
                    {formType}</div>
                <div>{`Reference id : ${id}`}</div>

                <Form form={{ name: formType }} initialFormDetails={formDetails} isUpdateForm={true} onUpdateSubmit={onUpdateSubmit} onCancel={onCancel}/>

            </div>
        )
    }


}