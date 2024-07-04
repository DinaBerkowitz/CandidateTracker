
import { useEffect, useState } from 'react';
import CandidateRow from './CandidateRow';
import axios from 'axios';

const Pending = () => {

    const [candidates, setCandidates] = useState([]);
    const isPending = true;
    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get(`/api/candidate/getpending`);
            setCandidates(data);
        }

        getCandidates();
    }, []);
    return (
        <div className="container">
            <h1>Pending</h1>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(c => <CandidateRow candidate={c} key={c.id} isPending={isPending} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Pending;