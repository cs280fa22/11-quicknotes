import { Button, Container, Group, Stack } from "@mantine/core";
import { TextInput, Textarea } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    console.log({ title, text });
    navigate("/", { replace: true });
  };

  const handleCancel = () => {
    console.log("cancel");
    navigate("/", { replace: true });
  };

  return (
    <Container>
      <Stack spacing="lg">
        <TextInput
          placeholder="Your note's title"
          label="Title"
          withAsterisk
          value={title}
          onChange={handleTitleChange}
        />
        <Textarea
          placeholder="Your note's text"
          label="Text"
          withAsterisk
          autosize
          minRows={5}
          value={text}
          onChange={handleTextChange}
        />
        <Group position="center" spacing="xl" grow>
          <Button variant="subtle" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="default" onClick={handleSave}>
            Save
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}

export default Edit;
