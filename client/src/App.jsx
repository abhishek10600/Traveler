import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateArticle from "./pages/CreateArticle";
import Articles from "./pages/Articles";
import {UserContextProvider} from "./Contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/article/:postID" element={<Articles/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/createNewArticle" element={<CreateArticle/>}/>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
