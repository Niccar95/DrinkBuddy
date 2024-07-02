import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IDrinkSearchProps {
  searchDrinks: (t: string) => void;
}

export const SearchForm = ({ searchDrinks }: IDrinkSearchProps) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchDrinks(text);
    navigate(`?query=${text}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search for drinks"
        ></input>

        <button>Search</button>
      </form>
    </>
  );
};
