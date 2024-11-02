import { Link, useLoaderData, useParams } from "react-router-dom";
import { handleAdd } from "../../Utils/Localhost";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const {
    bookName,
    image,
    author,
    category,
    review,
    publisher,
    totalPages,
    rating,
    tags,
    yearOfPublishing: year,
  } = book;

  const handleMarkAsRead = (id) => {
    handleAdd(id)
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl  my-12">
        <figure className="bg-gray-500 w-1/2">
          <img className="h-96 w-60" src={image} alt="Movie" />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title text-4xl text-white">{bookName}</h2>
          <h3 className="text-xl ">By: {author}</h3>
          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <p className="text-lg font-extrabold text-white">
            Review :{" "}
            <span className="font-normal text-slate-200">{review}</span>
          </p>
          <div className="flex justify-start items-center">
            <div className="text-white mr-12">Tag</div>
            <div className="flex items-center gap-2 py-2">
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  className="btn-sm bg-green-200/70 text-green-800 font-bold rounded-3xl"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div className="">
            <table className="">
              <tbody>
                <tr className="border-b-8 border-transparent">
                  <td className="">Number of pages :</td>
                  <td className="pl-10 font-bold text-white">{totalPages}</td>
                </tr>
                <tr className="border-b-8 border-transparent">
                  <td>Publisher</td>
                  <td className="pl-10 font-bold text-white">{publisher}</td>
                </tr>
                <tr className="border-b-8 border-transparent">
                  <td>Year of Publishing:</td>
                  <td className="pl-10 font-bold text-white">{year}</td>
                </tr>
                <tr className="border-b-8 border-transparent">
                  <td>Rating :</td>
                  <td className="pl-10 font-bold text-white">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-actions justify-start">
            <div onClick={() => handleMarkAsRead(id)} className="btn btn-outline bg-transparent text-white text-lg">
              Read
            </div>
            <div to="/" className="btn btn-outline bg-white text-black text-lg">
              Wishlist
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
