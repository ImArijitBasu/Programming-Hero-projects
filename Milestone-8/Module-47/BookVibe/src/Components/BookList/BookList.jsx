import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "./ReadList";
import { handleGet } from "../../Utils/Localhost";
const BookList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();
  console.log(allBooks);
  useEffect(() => {
    const storedList = handleGet();
    console.log(storedList, allBooks);
    const filteredList = allBooks.filter((book) =>
      storedList.includes(book.bookId)
    );
    console.log(filteredList);
    setReadList(filteredList);
  }, []);
  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "Number of pages") {
      const sortedList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedList);
    }
    if (sortType === "ratings") {
      const sortedList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedList);
    }
  };
  return (
    <div>
      <div className="bg-gray-500 text-white font-extrabold rounded-lg text-center text-3xl py-8">
        Books
      </div>
      <div className="text-center">
        <div className="dropdown dropdown-hover p-4 rounded-xl">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-green-600 p-4 rounded-xl text-white"
          >
            {sort ? ` sort by ${sort}` : "Sort By"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => handleSort("ratings")}>
                {sort === "ratings" ? "sort by" : "Ratings"}
              </a>
            </li>
            <li>
              <a onClick={() => handleSort("Number of pages")}>
                {sort === "Number of pages" ? "sort by" : "Number of pages"}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wishlist</Tab>
          </TabList>

          <TabPanel>
            <ReadList readList={readList}></ReadList>
          </TabPanel>
          <TabPanel>
            <h2>{readList.length}</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BookList;
