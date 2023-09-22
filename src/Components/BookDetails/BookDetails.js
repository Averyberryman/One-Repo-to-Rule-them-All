import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleBook } from "../../APICalls";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSingleBook(id);
        setBook(result[0]);
      } catch (error) {
        console.error("Failed to fetch book:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className='book-detail-container'>
      <h2>{book.name}</h2>
    </div>
  );
}

export default BookDetail;
