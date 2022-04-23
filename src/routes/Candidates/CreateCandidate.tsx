import { Layout } from "../../components";
import { CreateCandidateForm } from "./components";

const CreateCandidate = (): JSX.Element => {
  return (
    <Layout>
      <h2>Create Candidate</h2>

      <CreateCandidateForm />
    </Layout>
  )
};

export { CreateCandidate };
