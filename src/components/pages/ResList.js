import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';


const ResList = () => {

  const [restuarant, setRestuarant] = useState([])
  const [loadmore, setLoadMore] = useState(5)
  const [loading, setLoading] =useState(false);
  const [searchInput, setSearchInput] = useState('');


  useEffect(()=>{
    setLoading(true)
   fetch(`https://fakestoreapi.com/products?limit=${loadmore}`)
   .then(res => res.json())
   .then(data => {
      if(data[0].id){
        setLoading(false)
        setRestuarant(data)
      }
      else{
        setLoading(false)
        console.log('error')
      }
   })

  },[loadmore])
 

  console.log(restuarant[0]?.title,'shop');

  return (



    <div>

      <div className="search">
        <input 
        type="text"
        value={searchInput}  
        onChange={(e)=>setSearchInput(e.target.value)}
        />
        <button>search</button>
      </div>
   <h1 className='display-1 text-center'>Restuarant's </h1>
      {restuarant !== undefined &&restuarant !== null&&restuarant !== ''&&restuarant.length > 0?
      restuarant.filter(data => data.title.toLowerCase().includes(searchInput)).map(item=>
        <p style={{color:"red"}}>{item.title}</p>
      )
        :"no data"
      }
      {loading==true?
        <div class="spinner-border" role="status"></div>:""
      }
    </div>
  )
}

export default ResList
