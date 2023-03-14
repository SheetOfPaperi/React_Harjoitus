import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Message } from "./pages/Messages";
import { Button } from "./pages/BUTTons";
import { Router } from "./pages/Router";
import { Counters } from "./pages/Counters";
import { Items } from "./pages/items";
import { List } from "./pages/List";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Router/>}>
            <Route index element={<Message/>}/>
            <Route path="BUTTons" element={<Button/>}/>
            <Route path="Counters" element={<Counters/>}/>
            <Route path="Items" element={<Items/>}/>
            <Route path="List" element={<List/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;