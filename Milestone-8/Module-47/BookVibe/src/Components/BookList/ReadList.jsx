import React from 'react';
import Book from '../Book/Book';

const ReadList = ({readList}) => {
    const {} = readList
    return (
        <div>
            {
                readList.map(book => <Book book={book}></Book>)
            }
        </div>
    );
};

export default ReadList;