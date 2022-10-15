import Search from "./Search";
import PropTypes from "prop-types";

function Header(props) {
  const { query, setQuery } = props;

  return (
    <>
      <Search query={query} setQuery={setQuery} />
    </>
  );
}

export default Header;

Header.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func,
};
