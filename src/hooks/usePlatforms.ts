import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./useGames";
import apiClient from "../services/api-client";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get<FetchResponse<Platform>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePlatforms;
