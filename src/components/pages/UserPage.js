import React from 'react'
import { useParams } from 'react-router-dom'
// dynamic Routing with params...

const UserPage = () => {

    const {name} = useParams();
    console.log(name, 'abcd')


    
  return (
    <div>
      Data for {name}
    </div>
  )
}


export default UserPage;