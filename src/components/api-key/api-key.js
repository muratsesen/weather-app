import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { keyActions } from '../../store/keySlice';

const ApiKey = () => {
    const dispatch = useDispatch();
    const [apiKey, setApiKey] = React.useState('');

    const handleOnSave = () => {
        dispatch(keyActions.add(apiKey));
    }
    return (
        <div>
            <label htmlFor="api-key">API Key</label>
            <input value={apiKey} onChange={(e)=>setApiKey(e.target.value)} type="text" name="apiKey" id="apiKey" />
            <button onClick={handleOnSave}>Save</button>
        </div>
    );
};

export default ApiKey;