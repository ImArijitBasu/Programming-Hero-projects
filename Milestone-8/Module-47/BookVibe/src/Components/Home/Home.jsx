
import Books from "../Books/Books";

const Home = () => {
  return (
    <div>
      <div className="hero rounded-2xl bg-gray-500 py-20 px-10 my-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/books.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="space-y-5">
            <h1 className="text-5xl text-black font-bold leading-relaxed">Books to freshen up your bookshelf</h1>
            <button className="btn btn-primary">View The List</button>
          </div>
        </div>
      </div>
      <Books></Books>
    </div>
  );
};

export default Home;
