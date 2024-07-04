
import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCount } from "../Pages/CountContextComponent";

const Details = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', comments: '', status: '' });
    const [undecided, setUndecided] = useState();
    const { refreshCount } = useCount();


    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`/api/candidate/viewone?id=${id}`);
            setCandidate(data);
        }
        setUndecided(true);
        getCandidate();
    }, []);

    const onConfirmClick = async () => {

        candidate.status = 'Confirmed';
        await axios.post('/api/candidate/update', candidate);
        refreshCount();
        setUndecided(false);
    }

    const onDeclineClick = async () => {

        candidate.status = 'Declined';
        await axios.post('/api/candidate/update', candidate);
        refreshCount();
        setUndecided(false);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Name: {candidate.firstName} {candidate.lastName}</h4>
                        <h4>Email: {candidate.email}</h4>
                        <h4>Phone: {candidate.phoneNumber}</h4>
                        <h4>Status: {candidate.status}</h4>
                        <h4>Notes:</h4>
                        <p>{candidate.comments}</p>
                        {undecided && <div>
                            <button className="btn btn-primary" onClick={onConfirmClick}>Confirm</button>
                            <button className="btn btn-danger" onClick={onDeclineClick}>Decline</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>)
}

export default Details;