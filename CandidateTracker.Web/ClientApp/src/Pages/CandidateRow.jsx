
import { Link } from 'react-router-dom';

const CandidateRow = ({ candidate, isPending }) => {
    return (
        <tr>
            {isPending && <td><Link to={`/details/${candidate.id}`}>View Details</Link></td>}
            <td>{candidate.firstName}</td>
            <td>{candidate.lastName}</td>
            <td>{candidate.phoneNumber}</td>
            <td>{candidate.email}</td>
            {!isPending && <td>{candidate.comments}</td>}
        </tr>
    )
}

export default CandidateRow;