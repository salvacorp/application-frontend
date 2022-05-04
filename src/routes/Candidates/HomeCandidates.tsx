import { Link } from "react-router-dom";

import { Layout } from "../../components";
import { useHomeCandidate } from "./useHomeCandidate";
import { CandidatesTable } from "./components/CandidatesTable";

const HomeCandidates = (): JSX.Element => {
  const { data = [] }: any = useHomeCandidate();


  return (
    <Layout>
      <h2>Candidates</h2>

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

      <CandidatesTable data={data} />
    </Layout>
  );
};

export { HomeCandidates };
