import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks , setBookmarks] = useState([]);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks , blog]
    setBookmarks(newBookmarks)
    console.log(blog.title);
  }
  return (
    <>
      <div className="container px-2 mx-auto my-5">
        <Header></Header>
      </div>
      <div className="container px-2 mx-auto my-5 flex flex-col md:flex-row gap-2 justify-center">
          <Blogs handleBookmark={handleBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
