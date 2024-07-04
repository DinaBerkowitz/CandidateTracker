
import CandidateRow from './CandidateRow';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Refused = () => {
    const [candidates, setCandidates] = useState([]);
    const isPending = false;

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get(`/api/candidate/getdeclined`);
            setCandidates(data);
        }

        getCandidates();
    }, []);
    return (
        <div className="container">
            <div>
                <h1>Declined</h1>
                <div>
                    <table className="table table-hover table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {candidates.map(c => <CandidateRow candidate={c} key={c.id} isPending={isPending} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Refused;