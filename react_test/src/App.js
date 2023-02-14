import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import {Message} from "./pages/Messages";
import {Button} from "./pages/BUTTons";
import { Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Message/>
      <Button/>
    </div>
  );
}

export default App;