import Note from "./Note";
import PropTypes from "prop-types";

function Notes(props) {
  const { notes } = props;

  return (
    <>
      {notes.map((note) => (
        <Note note={note} />
      ))}
    </>
  );
}

export default Notes;

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};
