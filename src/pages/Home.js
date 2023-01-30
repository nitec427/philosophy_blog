import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhilosopherCard from "../components/PhilosopherCard";
const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [philosophers, setPhilosophers] = useState(null);
  const [books, setBooks] = useState(null);
  const fetchArtists = async () => {
    const { data, error } = await supabase.from("philosophers").select("*");
    if (error) {
      setFetchError(error);
      setPhilosophers(null);
    }
    if (data) {
      setPhilosophers(data);
      setFetchError(null);
    }
  };
  const fetchBooks = async () => {
    const { data, error } = await supabase.from("books").select("*");
    if (error) {
      setFetchError(error);
      setBooks(null);
    }
    if (data) {
      setFetchError(null);
      setBooks(data);
    }
  };
  useEffect(() => {
    fetchBooks();
    fetchArtists();
  }, []);

  return (
    <div className="w-7/12 mx-auto">
      {fetchError && <p>{fetchError.message}</p>}
      {philosophers && (
        <div className="grid grid-cols-3 gap-6">
          {philosophers.map((philosopher) => (
            <PhilosopherCard
              key={philosopher.id}
              id={philosopher.id}
              firstName={philosopher.firstname}
              lastName={philosopher.lastname}
              origin={philosopher.origin}
              philosophy={philosopher.philosophy}
              image_url={philosopher.image_url}
              books={
                books &&
                books.filter((book) => book.author_id === philosopher.id)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
