import React, { useState } from 'react'

const Randomshow = ({ele,setToggle,toggle}) => {

    const [check, setCheck] = useState(false);

    const cutIt = (id) => {
        setCheck(!check);
    
        console.log(id)
      };


    //   remove data
    const removeData = async (index) => {
        let res = await fetch(`http://localhost:8000/lists/${index}`, {
          method: "DELETE",
        });
        let res1 = await res.json();
    
        console.log(res1);
        setToggle(!toggle);
      };

  return (
    
    <div className="outputdiv" key={ele.id}>
            <div className="showdiv">
              <h4 style={{ textDecoration: check ? "line-through" : "none" }}>
                {ele.title}
              </h4>
              <div>
                <input type="checkbox" onClick={()=>cutIt(ele.id)} />
                <button
                  onClick={() => {
                    removeData(ele.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
    
    
  )
}

export default Randomshow