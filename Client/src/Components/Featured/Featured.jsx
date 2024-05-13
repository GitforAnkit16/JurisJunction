import React from 'react'
import "./Featured.css"
import search from "../../images/search.svg"

function Featured() {
  return (
    <div className='featured'>
        <div className='container'>
        <div className="left">
            <p>Attorneys in a single click</p>
                <div className="popular">
                    <span>Popular: </span>
                        <button>Criminal Lawyer</button>
                        <button>Civil Lawyer</button>
                        <button>Trademark and Ip</button>
                </div>
           
        </div>
         </div>
    </div>
  )
}

export default Featured