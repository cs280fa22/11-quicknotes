import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fakeNotes = [];
    for (let index = 0; index < 10; index++) {
      fakeNotes.push({
        id: faker.datatype.uuid(),
        title: faker.lorem.sentence(),
        text: faker.lorem.paragraph(),
      });
    }
    setNotes(fakeNotes);
  }, []);

  return (
    <>
      <Notes notes={notes} />
    </>
  );
}

export default App;
