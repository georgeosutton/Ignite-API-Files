import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

//Redux and Routes

import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

import { fadeIn } from "../animation";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo onClick={clearSearched}>
        <img src={logo} alt="Logo" />
        <h1>Ignite</h1>
      </StyledLogo>

      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled(motion.nav)`
  padding: 3rem 4rem;
  text-align: center;

  input {
    font-size: 1.5rem;
    width: 30%;
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    outline: none;
    padding: 0.5rem;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }

  button {
    font-size: 1.6rem;

    border: 0.1rem solid rgba(0, 0, 0, 0.2);

    padding: 0.5rem;
    cursor: pointer;
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  cursor: pointer;
  img {
    margin: 0 0.1rem;
  }
`;
