import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const { data, errors, loading } = useData<Genre>("/genres");

  return { genres: data, errors, loading };
};

export default useGenres;
