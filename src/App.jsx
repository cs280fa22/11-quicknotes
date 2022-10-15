import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fakeNotes = [];
    for (let index = 0; index < 5; index++) {
      fakeNotes.push({
        id: faker.datatype.uuid(),
        title: faker.lorem.sentence(),
        text: faker.lorem.paragraph(),
      });
    }
    setNotes(fakeNotes);
  }, []);

  const remove = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  const add = () => {
    const note = {
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(),
      text: faker.lorem.paragraph(),
    };

    setNotes((notes) => [...notes, note]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            notes={notes}
            query={query}
            setQuery={setQuery}
            add={add}
            remove={remove}
          />
        }
      />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  );
}

export default App;
