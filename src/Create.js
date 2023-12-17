import axios from 'axios';
import React, { useState } from 'react';
import Result from './Result';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Create = () => {

    const [data, setData] = useState([]);
    const [sentence, setSentence] = useState("");

    const researchFor = async (sentence) => {
        await axios.get(`http://127.0.0.1:8000/api/search/${sentence}`)
            .then((response) => {
                setData(response['data']);
            })
            .catch((response) => {
                console.log('RIP');
            }
            )
    }

    return (
        <div className="create">
            {/*
            <form className='form'>
                <input id='sentence' placeholder='type here ..' onChange={e => setSentence(e.target.value)} required="required"/>
            </form>
    */}
            <div className="input">
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={e => setSentence(e.target.value)}
                    />
                    <Button variant="outline-success" onClick={e => researchFor(sentence)}>Search</Button>
                </Form>
            </div>
            <Result data={data} browse={true} watched={false} />
        </div>
    );
}

export default Create;