import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import moment from 'moment';

function UserInfo(props) {

    const [modalState, setModalState] = props.show
    const [date, setDate] = useState(moment(Date().toLocaleString()).format('YYYY-MM-DD'));

    const datePicker = (event) => {
        setDate(moment(event.target.value).format('YYYY-MM-DD'));
    }
    return (
        <Modal show={modalState} onHide={() => setModalState(!modalState)} centered >
            <Modal.Header closeButton>
                <Modal.Title>Active Time Interval</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ textAlign: "end" }}>
                    <label>Check with Date :</label>
                    <input type="date" value={date} onChange={datePicker} />
                </div>
                <div className="text-center">
                    <span>Start Time</span><span className="ml-1 mr-1">:</span><span>End Time</span>
                </div>
                {props.activeHours.filter(data => moment(data.start_time).format('YYYY-MM-DD') === date).length > 0 ? props.activeHours.filter(data => moment(data.start_time).format('YYYY-MM-DD') === date).map((data, index) => (
                    <div key={index} className="text-center">
                        <span>{data.start_time}</span><span className="ml-1 mr-1">:</span><span>{data.end_time}</span>
                    </div>
                )) : <div className="text-center">No Active Hours Found</div>}
            </Modal.Body>
        </Modal>
    )
}

export default UserInfo;