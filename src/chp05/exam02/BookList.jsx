import React from "react";
import Book from "./Book";
import './BookList.css'

const books = [
    {
        title:"The Art of React",
        author: "김민주",
        coverImage: "https://image.yes24.com/goods/151041836/XL"
    },
    {
        title:"자바 개발자를 위한 Vert.x",
        author: "이연복",
        coverImage: "https://epreview.yes24.com/preview/contents1/300/300673/image/957db924-c9de-41c5-b901-a792c37b9c83.jpg"
    },
    {
        title:"C 언어 마스터",
        author: "문석재",
        coverImage: "https://epreview.yes24.com/preview/contents1/1997/1997872/image/be62579a-b127-4182-8e99-b9d13f9ebd03.jpg"
    },
    {
        title:"The Art of React",
        author: "김민주",
        coverImage: "https://image.yes24.com/goods/151041836/XL"
    },
    {
        title:"자바 개발자를 위한 Vert.x",
        author: "이연복",
        coverImage: "https://epreview.yes24.com/preview/contents1/300/300673/image/957db924-c9de-41c5-b901-a792c37b9c83.jpg"
    },
    {
        title:"C 언어 마스터",
        author: "문석재",
        coverImage: "https://epreview.yes24.com/preview/contents1/1997/1997872/image/be62579a-b127-4182-8e99-b9d13f9ebd03.jpg"
    }

]

function BookList(){
    return(
        <div className="bookListWrapper">
            {
                books.map((bookkk) =>{
                    return(
                        <Book
                            title={bookkk.title}
                            author={bookkk.author}
                            coverImage={bookkk.coverImage}
                        />
                    )
                })
            }
        </div>
    )
}

export default BookList