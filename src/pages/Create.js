import { useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [origin, setOrigin] = useState("");
  const [philosophy, setPhilosophy] = useState("");
  const [formError, setFormError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstName, lastName, origin, philosophy);
    if (!firstName || !lastName || !origin || !philosophy) {
      setFormError("Please fill out all fields");
      return;
    }
    const philosophies = [philosophy];
    const { data, error } = await supabase
      .from("philosophers")
      .insert([
        {
          firstname: firstName,
          lastname: lastName,
          origin,
          philosophy: philosophies,
        },
      ]);
    if (error) {
      console.log(error);
      setFormError("Please fill in all fields correctly");
    }
    if (data) {
      console.log(data);
      setFormError(null);
      navigate("/");
    }
  };
  return (
    <div className="w-7/12 mx-auto flex h-full  ">
      {/* Image Component */}
      <div
        className="h-72 lg:h-auto lg:w-96 bg-cover text-center"
        style={{
          backgroundImage:
            "url('https://cordis.europa.eu/docs/article/images/2021-08/430527.jpg')",
        }}
        title="Socrates"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            Authors only
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            Add new philosophers to our database
          </div>

          {/* Add form here */}

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Socrates"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="of Athens"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="origin"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Origin
                </label>
                <input
                  type="text"
                  id="origin"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ancient Greece"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="philosophy"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Philosophy
                </label>
                <input
                  type="text"
                  id="philosophy"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Socratic method"
                  value={philosophy}
                  onChange={(e) => setPhilosophy(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-44 py-2.5 block text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add a new one
            </button>
            {formError && <p className="bg-red-700">{formError}</p>}
          </form>
        </div>
        {/* <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://cordis.europa.eu/docs/article/images/2021-08/430527.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Create;
