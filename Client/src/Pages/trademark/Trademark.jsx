
import "./Trademark.css"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Trademark() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const categorie = [
    "Trademark",
    "Copyright",
    "Infringement",
    "Design Registeration"
  ];
  const navigate = useNavigate();
  const handleProfile = async () => {
    try{
        navigate("/profile");
     }catch(err){
        console.log(err);
     }
  }
  return (
    <div className='Trademark'>
      <div className='grid'>
        {categorie.map((category, index) => (
          <div
            key={index}
            className={`category ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            <span>{category}</span>
          </div>
        ))}
      </div>
      {activeCategory && (
        <div className="df-trademark">
          <div  className="cardq"> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Lorem ipsum dolor sit.</p></div>
          <div className="cardq" onClick={(handleProfile)}> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Immigration Notary</p></div>
          <div className="cardq" onClick={(handleProfile)}> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Lorem ipsum dolor sit.</p></div>
          <div className="cardq" onClick={(handleProfile)}> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Lorem ipsum dolor sit.</p></div>
          <div className="cardq" onClick={(handleProfile)}> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Lorem ipsum dolor sit.</p></div>
          <div className="cardq"onClick={(handleProfile)}> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Lorem ipsum dolor sit.</p></div>
          <div className="cardq" onClick={(handleProfile)}> <img src="https://picsum.photos/200" alt=""  /><h3>Akshay</h3><p>Lorem ipsum dolor sit.</p></div>
        </div>
      )}
    </div>
  );
}


export default Trademark
