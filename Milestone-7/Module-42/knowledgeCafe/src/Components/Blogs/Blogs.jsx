import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmark}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogPost.json')
    .then(res => res.json())
    // .then(data => console.log(data[0].hashtags[0])) // TODO: for testing purpose only
    .then(data => setBlogs(data))
  }, []);
  return (
    <>
        <div className="md:w-2/3 border">
            {
                blogs.map((blog)=> <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark}></Blog>)
            }
        </div>
    </>
  );
};

export default Blogs;
