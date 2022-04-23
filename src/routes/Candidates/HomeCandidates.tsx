import { Link } from 'react-router-dom';
import { Layout } from '../../components';

const HomeCandidates = (): JSX.Element => {
  return (
    <Layout>
      <h2>Candidates</h2>
      <Link to="/candidates/create">Add Candidate</Link>
    </Layout>
  )
};

export { HomeCandidates };
