import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleBook } from "../../APICalls";
import ErrorComponent from "../ErrorPage/ErrorPage";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSingleBook(id);
        if (result && result.length > 0) {
          setBook(result[0]);
        } else {
          throw new Error("Book not found");
        }
      } catch (error) {
        console.error("Failed to fetch book:", error);
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);

  if (error) {
    return <ErrorComponent message={error} />;
  }

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
