import PropTypes from "prop-types";
import React from "react";

const Blog = ({ blog }) => {
  const {
    title,
    author,
    cover,
    posted_date,
    reading_time,
    hashtags,
    author_img,
  } = blog;

  return (
    <div className="mx-2 my-4 p-2 rounded-lg border-b-2">
      <img
        src={cover}
        alt={`cover image of the blog: ${title}`}
        className="rounded-lg"
      />
      <div className="flex justify-between items-center my-4">
        {/* left side  */}
        <div className="flex items-center space-x-2">
          <img
            src={author_img}
            alt=""
            className="w-12 h-12 object-contain bg-slate-300 rounded-full"
          />
          <div className="">
            <p className="font-semibold text-lg">{author}</p>
            <p className="font-light text-sm">{posted_date}</p>
          </div>
        </div>
        {/* right side  */}
        <div className="flex space-x-3">
            <p className="font-light text-sm">{reading_time} min read</p>
            <p className="font-light text-sm"><a href="#">∭</a></p>
        </div>
      </div>
      <h1 className="font-bold text-2xl capitalize">{title}</h1>
      <div className="my-3">
        {/* hashtags  */}
        <div className="flex space-x-4 my-3 text-slate-400 text-sm font-bold">
            <p>#{hashtags[0]}</p>
            <p>#{hashtags[1]}</p>
        </div>
        {/* mark as read button */}
        <a href="#" className=" underline underline-offset-2 text-blue-500">Mark as read</a>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
