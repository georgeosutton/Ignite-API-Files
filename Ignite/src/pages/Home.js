import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";

//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  //Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get Data back
  let { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <StyledGameList>
      {pathId && <GameDetail />}
      {searched.length ? (
        <div className="searched">
          <h2>Searched Games</h2>
          <StyledGames>
            {searched.map((game) => (
              <Game
                name={game.name}
                release={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </StyledGames>
        </div>
      ) : (
        ""
      )}
      <h2>Upcoming Games</h2>
      <StyledGames>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            release={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </StyledGames>
      <h2>Popular Games</h2>
      <StyledGames>
        {popular.map((game) => (
          <Game
            name={game.name}
            release={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </StyledGames>
      <h2>New Games</h2>
      <StyledGames>
        {newGames.map((game) => (
          <Game
            name={game.name}
            release={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </StyledGames>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 5rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Home;
