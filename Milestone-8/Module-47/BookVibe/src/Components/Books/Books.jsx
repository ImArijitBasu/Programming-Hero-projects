import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books , setBooks] = useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h1 className="font-serif text-white text-center text-5xl font-extrabold py-4"><div className="divider">Books</div></h1>
            <div className="my-10 grid grid-cols-3 gap-5">
                {
                    books.map((book , idx) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;