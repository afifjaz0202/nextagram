import React, { useState, useEffect } from 'react';
import {Form, FormGroup, Button, Input, FormText} from 'reactstrap';
import axios from 'axios';

const UploadPage = () => {
    const [imageFile, setImageFile] = useState(null)

    useEffect(() => {
        document.title = 'Upload your image'
    }, [])

    const imageHandle = (e) => {
        e.preventDefault()

        axios({
            method: 'post',
            url: "https://insta.nextacademy.com/api/v1/images/",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
    }

    const changeHandle = (e) => {
        setImageFile(e.target.files[0]) 
    }

    return(
        <div>
            <Form onSubmit={imageHandle}>
            <FormGroup>
                <Input
                type="file"
                name="image-file"
                onChange={changeHandle}
                />
                <FormText color="muted">
                Make sure the image being uploaded is a supported format.
                </FormText>
            </FormGroup>
            <Button type="submit" color="primary">
                Upload
            </Button>
            </Form>
        </div>

    )
}

export default UploadPage;