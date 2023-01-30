import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
const Update = () => {
  const { id } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [philosophers, setPhilosophers] = useState(null);
  const fetchArtist = async () => {
    console.log(id);
    const { data, error } = await supabase
      .from("philosophers")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      setFetchError(error);
      setPhilosophers(null);
    }
    if (data) {
      setPhilosophers(data);
      setFetchError(null);
    }
    console.log(data);
  };
  useEffect(() => {
    fetchArtist();
  }, []);
  return (
    <div className="">
      <h2>{philosophers && philosophers.about}</h2>
      <p className="text-black">{philosophers && philosophers.about}</p>
    </div>
  );
};

export default Update;
