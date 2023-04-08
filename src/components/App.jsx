import { Route, Routes } from 'react-router-dom';

import HomePage from 'Pages/home';
import Pokemon from 'Pages/Pokemon';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="pokemon/:name" element={<Pokemon />}></Route>
    </Routes>
  );
};
