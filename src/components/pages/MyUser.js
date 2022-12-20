import React, { useEffect, useState } from 'react'

const MyUser = () => {
 const [myuser, getMyUser] = useState('');


 useEffect(()=>{
  getMyUser(localStorage.getItem('userName'));
},[])

// console.log(myuser);


  return (
    <div>
        {
            myuser !== '' && myuser !== undefined && myuser !== null ?
            <h1 className='display-3 text-center'>Welcome! {myuser}</h1>
            :
            ""
        }
    </div>
  )
}


export default MyUser;