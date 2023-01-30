import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
const useArtists = async () => {
  const [fetchError, setFetchError] = useState(null);
  const [philosophers, setPhilosophers] = useState(null);
  const { data, error } = await supabase.from("philosophers").select("*");
  useEffect(() => {});
  if (error) {
    setFetchError(error);
    setPhilosophers(null);
  }
  if (data) {
    setPhilosophers(data);
    setFetchError(null);
  }

  return { philosophers, fetchError };
};
export default useArtists;
