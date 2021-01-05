import React from "react";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animation";

//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";

const Game = ({ name, release, id, image, key }) => {
  //Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <Link to={`/game/${id}`}>
      <StyledGame
        onClick={loadDetailHandler}
        variants={popup}
        initial="hidden"
        animate="show"
      >
        <motion.h3>{name}</motion.h3>
        <p>{release}</p>
        <motion.img src={smallImage(image, 640)} alt={name} />
      </StyledGame>
    </Link>
  );
};

const StyledGame = styled(motion.div)`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 30vh;
  }
`;

export default Game;
