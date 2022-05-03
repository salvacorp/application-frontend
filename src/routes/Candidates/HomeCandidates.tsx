import { Link } from "react-router-dom";
import { Layout } from "../../components";
import { Candidate } from "../../types/Candidate";
import { useHomeCandidate } from "./useHomeCandidate";

const HomeCandidates = (): JSX.Element => {
  const { data = [] }: any = useHomeCandidate();

  return (
    <Layout>
      <h2>Candidates</h2>

      {data.Items?.map((candidate: Candidate) => <p>{candidate.name}</p>)}

      <Link
        to="/candidates/create"
        style={{
          color: "#fafafa",
          textDecoration: "none",
          border: "1px solid #fafafa",
          padding: "3px 12px",
          borderRadius: "8px",
        }}
      >
        + add candidate
      </Link>

      <ul>
        {(data?.data || []).map((todo: { id: string; name: string }) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export { HomeCandidates };
