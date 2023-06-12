import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios, * as other from 'axios';
import { Link } from 'react-router-dom';


export const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(()=> {
    const fecthAllBooks = async () => {
      try{
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data);
      }catch(err){
        console.log(err);
      };
    };
    fecthAllBooks()
  },[]);

  const handleDelete = async (id)=> {
    try{
      
      if(window.confirm('You want to delete?')) {
        // this.props.onDelete(id);
        await axios.delete("http://localhost:8800/books/"+ id)
        window.location.reload()
      }else{
        window.location.reload()
      };
    }catch(err){
      console.log(err);
    };
  };

  return (
    <div>
      <h1>CRUD APP</h1>
      <div className='books'>
        {books.map(book=>(
          <div className='book' key={book.id}>
          {book.cover && <img src={book.cover} alt='' />}
          <h2>{book.title}</h2>
          <p>{book.desc}</p>
          <span>{book.price}</span>
          <button className='delete' onClick={()=> handleDelete(book.id)}>Delete</button>
          <button className='update'><Link to={`/update/`+ book.id}>Update</Link></button>
          <button className='signup'><Link to={`/signup/`}>Sign Up</Link></button>
          </div>
        ))};
      </div>
      <button>
        <Link to="/add">Add new</Link>
      </button>
    </div>
  );
};

export default Books;
