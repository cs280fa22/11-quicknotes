import PropTypes from "prop-types";
import { Accordion } from "@mantine/core";

function Note(props) {
  const { note } = props;

  return (
    <Accordion.Item value={note.title}>
      <Accordion.Control>{note.title}</Accordion.Control>
      <Accordion.Panel>{note.text}</Accordion.Panel>
    </Accordion.Item>
  );
}

export default Note;

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
