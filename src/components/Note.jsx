import PropTypes from "prop-types";

function Note(props) {
  const { note } = props;

  return (
    <div>
      <p>{note.title}</p>
      <p>{note.text}</p>
    </div>
  );
}

export default Note;

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
