import { Link } from "react-router-dom";

const PhilosopherCard = ({
  id,
  firstName,
  lastName,
  origin,
  philosophy,
  image_url,
  books,
}) => {
  const shortPhilosophy = philosophy.substring(0, 100);
  return (
    <Link to={`/${id}`}>
      <div className="mt-10 max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-80"
          src={image_url}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {firstName + " " + lastName}
          </div>
          <p className="text-gray-700 text-base">{shortPhilosophy + "..."}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {books &&
            books.map((book) => {
              return (
                <span
                  key={book.id}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {book.name}
                </span>
              );
            })}
        </div>
      </div>
    </Link>
  );
};

export default PhilosopherCard;
