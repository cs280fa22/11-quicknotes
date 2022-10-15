import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Notes from "./components/Notes";
import { Container } from "@mantine/core";
import Header from "./components/Header";
import Edit from "./pages/Edit";

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
    <Container>
      <Header query={query} setQuery={setQuery} add={add} />
      <Notes notes={notes} query={query} remove={remove} />
      <Edit />
    </Container>
  );
}

export default App;
