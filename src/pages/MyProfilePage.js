import React, { useEffect, useState } from "react"
import UserImages from "../containers/UserImages"
import axios from "axios"
import { Container, Button } from "reactstrap"

const MyProfilePage = () =>{
  const [user, setUser] = useState({})

  useEffect(()=>{
    axios.get(`https://insta.nextacademy.com/api/v1/users/me`, 
    {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
      .then(result => {
        setUser(result.data)
      })
      .catch(error => {
        console.log('ERROR: ', error)
    })
  },[])

  return (
    <Container>
      {
        user ?
        <div className="text-center m-3">
          <img src="https://live.staticflickr.com/2186/2236037568_8079c43c7c_b.jpg" alt={user.username} width="150" className="rounded-circle img-thumbnail img-fluid" />
          <h3>@ {user.username}</h3>
        </div>
        : null
      }
      {/* <Button onClick={}>Upload Image</Button> */}
      <UserImages userId={user.id}/>
    </Container>
  )
}

export default MyProfilePage