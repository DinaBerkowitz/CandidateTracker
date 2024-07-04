import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCount } from './CountContextComponent';

const AddCandidate = () => {
    const [candidate, setCandidate] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', comments: '', status: '' });
    const { firstName, lastName, email, phoneNumber, comments } = candidate;
    const navigate = useNavigate();
    const { refreshCount } = useCount();

    const onChange = (e) => {
        const copy = { ...candidate };
        copy[e.target.name] = e.target.value;
        setCandidate(copy);
    }

    const onSubmit = async () => {
        candidate.status = 'Pending';
        await axios.post('/api/candidate/addcandidate', candidate);
        refreshCount();
        navigate('/');
    }

    return (<div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Add Candidate</h4>
                    <input type="text" name="firstName" placeholder="First Name" className="form-control" value={firstName} onChange={onChange} />
                    <br />
                    <input type="text" name="lastName" placeholder="Last Name" className="form-control" value={lastName} onChange={onChange} />
                    <br />
                    <input type="text" name="email" placeholder="Email" className="form-control" value={email} onChange={onChange} />
                    <br />
                    <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-control" value={phoneNumber} onChange={onChange} />
                    <br />
                    <textarea rows="5" className="form-control" name="comments" value={comments} onChange={onChange}>
                    </textarea>
                    <br />
                    <button className="btn btn-primary" onClick={onSubmit}>Submit</button>
                </div>
            </div>
        </div>
    </div>)
}

export default AddCandidate;               