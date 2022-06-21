import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultTemplate } from "./templates/DefaultTemplate";
import { HomePage } from "./pages/HomePage";
import { CatPage } from "./pages/CatPage";
import { PostPage } from "./pages/PostPage";
import { UserPage } from "./pages/UserPage";
import "./styles/reset.css";
import "./styles/variables.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="/cat" element={<CatPage />} />

          <Route path="/user">
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/user/:id/post" element={<PostPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
