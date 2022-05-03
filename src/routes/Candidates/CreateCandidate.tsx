import { v4 as uuidv4 } from 'uuid';
import { Layout } from "../../components";
import { useForms } from "../../hooks";
import { createCandidate } from "../../services/candidates";
import { CreateCandidateForm } from "./components";

const CreateCandidate = (): JSX.Element => {
  const { handleInputChange, data } = useForms();

  const handleSubmit = () => {
    createCandidate({ ...data, id: uuidv4() } as any);
  };

  return (
    <Layout>
      <h2>Create Candidate</h2>

      <CreateCandidateForm
        handleInputChange={handleInputChange}
        handelSubmit={handleSubmit}
      />
    </Layout>
  )
};

export { CreateCandidate };
