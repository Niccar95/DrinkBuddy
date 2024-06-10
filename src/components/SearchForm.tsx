import { useState } from "react";

interface IDrinkSearchProps {
  searchDrinks: (t: string) => void;
}

export const SearchForm = ({ searchDrinks }: IDrinkSearchProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchDrinks(text);
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
