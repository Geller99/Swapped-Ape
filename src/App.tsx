import React from "react";
import { Landing } from "./pages/Landing";
import { GlobalForm } from "./components/form/Form";

const App: React.FC = () => {
  return (
    <Landing
      backgroundColor="#F2F5FF"
      children={<GlobalForm label="Sign in" />}
    />
  );
};

export { App };
