import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Accountdeleteconfirm = () => {
    const navigate = useNavigate();


    const deleteAcount = async (e) => {
        try {
            //const response = await axios.post('/deleteaccount', {testval: 'Test'});
            //console.log(response.data); 
            navigate("/accountdeleted");

        } 
        catch (error) {
            navigate("/accountdeleted");
        }
        
    }

    return (
        <div>
            <h2>Are You Sure?</h2>
           
            <form onSubmit={deleteAcount}>
                <h5>Deleting your account will erase ALL data!</h5>
                <button type="submit">Yes, Delete Account</button>
            </form>
        </div>
    );
};

export default Accountdeleteconfirm;