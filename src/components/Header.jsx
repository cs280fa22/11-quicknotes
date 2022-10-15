import { IconNote } from "@tabler/icons";
import { Grid, Button } from "@mantine/core";
import Search from "./Search";
import PropTypes from "prop-types";

function Header(props) {
  const { query, setQuery } = props;

  const handleOnClick = () => {
    // TODO implement me!
  };

  return (
    <Grid>
      <Grid.Col span={10}>
        <Search query={query} setQuery={setQuery} />
      </Grid.Col>
      <Grid.Col span={2}>
        <Button
          onClick={handleOnClick}
          fullWidth
          variant="default"
          leftIcon={<IconNote />}
        >
          Add Note
        </Button>
      </Grid.Col>
    </Grid>
  );
}

export default Header;

Header.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};
