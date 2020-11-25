import React, { useState } from 'react';
import { client } from './api/apiClient';
import TextBox from './components/text-box';
import PreviewLink from './components/preview-link';
import {
    lambdaUrl,
    setUpdLinks,
    handleTextareaValue,
} from './components/helpers';
import './App.css';

function App() {
    const [links, setLinks] = useState([]);
    const [error, setError] = useState('');

    const fetchLinks = (value) => {
        const linksArr = handleTextareaValue(value);

        if (linksArr.length) {
            const updLinks = linksArr.map(setUpdLinks);

            client.get(`${lambdaUrl}?links=${updLinks}`).then((resp) => {
                if (resp.error) return setError(resp.error);
                setLinks(resp);
                setError('');
            });
        }
    };

    return (
        <div className="App">
            <TextBox fetchLinks={fetchLinks} />
            <PreviewLink error={error} links={links} />
        </div>
    );
}

export default App;
