import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

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
      {
        notes.map(note => (
          <div>
            <p>{note.title}</p>
            <p>{note.text}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;