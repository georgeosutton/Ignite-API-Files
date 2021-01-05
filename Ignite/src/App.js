import React from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

// Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
