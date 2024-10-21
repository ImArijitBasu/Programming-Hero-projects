import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className="container px-2 mx-auto my-5">
        <Header></Header>
      </div>
      <div className="container px-2 mx-auto my-5 flex flex-col md:flex-row gap-2 justify-center">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
