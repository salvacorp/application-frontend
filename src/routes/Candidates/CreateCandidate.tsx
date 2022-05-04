import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';

import { Layout } from "../../components";
import { useForms } from "../../hooks";
import { createCandidate } from "../../services/candidates";
import { CreateCandidateForm } from "./components";
import { Candidate } from '../../types/Candidate';

const CreateCandidate = (): JSX.Element => {

  const { state }: any = useLocation();

  const { candidate = {} } = state || {};

  const { handleInputChange, data } = useForms({ defaultData: candidate });

  const handleSubmit = () => {
    createCandidate({ ...data, id: uuidv4() } as any);
  };

  return (
    <Layout>
      <h2>Create Candidate</h2>

      <CreateCandidateForm
        data={data as Candidate}
        handleInputChange={handleInputChange}
        handelSubmit={handleSubmit}
      />
    </Layout>
  )
};

export { CreateCandidate };
