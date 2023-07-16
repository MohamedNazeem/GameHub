import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    // initialData: queryClient.getQueryData(['genres']),
  });

export default useGenres;
