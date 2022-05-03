import { useQuery } from "react-query";
import { getPosts } from "../../services/candidates";

const useHomeCandidate = () => {

  function usePost() {
    return useQuery(["posts"], () => getPosts(), {
      enabled: true,
    });
  }

  const { status, data, error, isFetching } = usePost();

  return { status, data, error, isFetching };
}

export { useHomeCandidate };