import Pages from "./pages/Pages";
import Category from "./components/Category";
import  Search  from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from 'react-icons/gi'

function App() {
  return (
    <>
    <Nav>
      <GiKnifeFork/>
      <Logo to={"/"}>Recipe</Logo>
    </Nav>
      <Search />
      <Category />
      <Pages />
    </>
  );
}

const Logo = styled(Link)`
  text-decoration : none;
  font-size : 1.2rem;
  margin : 0 10px;
  font-weight : 400;
`

const Nav = styled.div`
  padding : 1rem 0rem;
  display ; flex;
  justify-content : flex-start;
  align-items : center;
`

export default App;
