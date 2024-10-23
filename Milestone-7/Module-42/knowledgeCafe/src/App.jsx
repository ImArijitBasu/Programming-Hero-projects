import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";
import SpendTime from "./Components/Spendtime/SpendTime";

function App() {
  const [bookmarks , setBookmarks] = useState([]);
  const [spendTime , setSpendTime] = useState(0);


  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks , blog]
    setBookmarks(newBookmarks)
    console.log(blog.title);
  }
  const handleSpendTime = (id, time) => {
    const newTime = spendTime + time;
    setSpendTime(newTime);
    console.log("removed item" ,id);
    const remainingItems = bookmarks.filter((bookmark)=>bookmark.id!==id);
    setBookmarks(remainingItems);
  }
  return (
    <>
      <div className="container px-2 mx-auto my-5">
        <Header></Header>
      </div>
      <div className="container px-2 mx-auto my-5 flex flex-col md:flex-row gap-2 justify-center">
          <Blogs handleBookmark={handleBookmark} handleSpendTime={handleSpendTime}></Blogs>
          <div className="md:w-1/3">
          <SpendTime spendTime={spendTime}></SpendTime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
          </div>
      </div>
    </>
  );
}

export default App;
