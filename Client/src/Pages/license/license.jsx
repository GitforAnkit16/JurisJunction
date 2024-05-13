
import "./license.css"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
function Licenses() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const categorie = [
    "Digital Signature Certificate",
    "Udyam Registration",
    "MSME Registration",
    "ISO Certification",
    "FSSAI [Food License]",
    "IEC [Import/Export Code]",
    "Apeda RCMC",
    "Spice Board Registration",
    "FIEO Registration",
    "Legal Metrology",
    "Hallmark Registration",
    "BIS Registration",
    "Gun Licence",
    "Liquor Licence"
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
    <div className='Licences'>
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
        <div className="df-license">
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


export default Licenses
