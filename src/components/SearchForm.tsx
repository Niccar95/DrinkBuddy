import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IDrinkSearchProps {
  searchDrinks: (t: string) => void;
  filterDrinks: (checked: boolean) => void;
  nonAlcoholicOnly: boolean;
}

export const SearchForm = ({
  searchDrinks,
  filterDrinks,
  nonAlcoholicOnly,
}: IDrinkSearchProps) => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchDrinks(text);
    navigate(`?query=${text}`);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterDrinks(e.target.checked);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search for drinks"
          ></input>

          <button className="searchButton">Search</button>
        </div>
        <div className="checkboxContainer">
          <label htmlFor="nonAlcoholic">Non-alcoholic only: </label>
          <input
            type="checkbox"
            id="nonAlcoholic"
            checked={nonAlcoholicOnly}
            onChange={handleCheckboxChange}
          ></input>
        </div>
      </form>
    </>
  );
};
