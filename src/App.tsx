// src/App.tsx

import React from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <Container>
      <h1>Hello, Dark Mode!</h1>
      <DarkModeToggle />
    </Container>
  );
};

export default App;
