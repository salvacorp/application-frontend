import { useQuery } from "react-query";
import { getCandidates } from "../../services/candidates";

const useHomeCandidate = () => {

  function usePost() {
    return useQuery(["posts"], () => getCandidates(), {
      enabled: true,
    });
  }

  const { status, data, error, isFetching } = usePost();

  return { status, data, error, isFetching };
}

export { useHomeCandidate };