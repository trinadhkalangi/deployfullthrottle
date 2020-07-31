import React, { useState } from 'react';
import UserInfo from './UserInfo';

function Users(props) {

    const [modalState, setModalState] = useState(false);
    const [activeHours, setActiveHours] = useState();
    const openModal = (data) => {
        setActiveHours(data);
        setModalState(!modalState);
    }
    return (
        <div className="row m-5">
            {props.userData.map((user, index) => (
                <div key={index} className="col-12 col-sm-3 mb-2">

                    <div className="card text-center" style={{ cursor: "Pointer" }} data-toggle="modal" data-target="#exampleModal" onClick={() => openModal(user.activity_periods)}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <div>Name : {user.real_name}</div>
                        <div>Location : {user.tz}</div>
                    </div>
                </div>))}
            {modalState && <UserInfo show={[modalState, setModalState]} activeHours={activeHours} />}
        </div>
    )
}

export default Users;