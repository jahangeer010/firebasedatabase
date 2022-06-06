import React from 'react'


function WellcomeUser(props) {
    const{email,password,uid}=props
  return (
    <div>Wellcome {email} and your password is {password}</div>
  )
}

export default WellcomeUser