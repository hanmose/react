import React from "react";
import "./MY.css"; // CSS 분리

const list = [
    {one:"https://picsum.photos/id/24/200/300",two:"Book",three:"책책책책책책"},
    {one:"https://picsum.photos/id/25/200/300",two:"Tree",three:"나무나무나무"},
    {one:"https://picsum.photos/id/26/200/300",two:"Tool",three:"도구도구도구"},
    {one:"https://picsum.photos/id/27/200/300",two:"Ocean",three:"바다바다바다"},
    {one:"https://picsum.photos/id/28/200/300",two:"Forest",three:"산산산산산산"},
]

function MY(){
    return(
        <div className="container">
            {list.map((x, index)=>(
                <div className="card" key={index}>
                    <img src={x.one} alt={x.two} className="card-img"/>
                    <div className="card-content">
                        <h3 className="card-title">{x.two}</h3>
                        <p className="card-text">{x.three}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MY;
