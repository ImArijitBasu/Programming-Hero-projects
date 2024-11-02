import PropType from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId , bookName, author, image, tags, category, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div>
        <div className="border rounded-2xl p-4">
          <div className="bg-gray-500 rounded-2xl flex justify-center items-center py-4">
            <img className="h-60 w-40" src={image} alt="" />
          </div>
          <div className="flex items-center gap-2 py-2">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="btn-sm bg-green-200/70 text-green-200 font-bold rounded-3xl"
              >
                {tag}
              </button>
            ))}
          </div>
          <h1 className="text-2xl font-bold py-2">{bookName}</h1>
          <h3 className="font-bold py-2">By : {author}</h3>
          <div className="divider"></div>
          <div className="flex items-center justify-between">
            <p>{category}</p>
            <p className="flex gap-2 items-center justify-center">
              {rating}
              <img
                width="20"
                height="20"
                className=""
                src="https://img.icons8.com/emoji/48/star-emoji.png"
                alt="star-emoji"
              />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
Book.propTypes = {
  book: PropType.object.isRequired,
};

export default Book;
