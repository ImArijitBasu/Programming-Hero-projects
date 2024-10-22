import PropTypes from "prop-types";

const Blog = ({ blog , handleBookmark ,handleSpendTime}) => {
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
          <button onClick={()=>handleBookmark(blog)} className="font-light text-sm">
            <p>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
              >
                <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z"></path>
              </svg>
            </p>
          </button>
        </div>
      </div>
      <h1 className="font-bold text-2xl capitalize">{title}</h1>
      <div className="my-3">
        {/* hashtags  */}
        <div className="flex space-x-4 my-3 text-slate-400 text-sm font-bold">
          {hashtags.map((hash, index) => (
            <a href="#" key={index}>
              #{hash}
            </a>
          ))}
          {/* <p>#{hashtags[0]}</p>
            <p>#{hashtags[1]}</p> */}
        </div>
        {/* mark as read button */}
        <button onClick={() => handleSpendTime(reading_time)} className=" underline underline-offset-2 text-blue-500">
          Mark as read
        </button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark : PropTypes.func.isRequired,
  handleSpendTime : PropTypes.func.isRequired,
};
export default Blog;
