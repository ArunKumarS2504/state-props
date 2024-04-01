import React from "react"

import Table from 'react-bootstrap'

const users = [
    { firstName: "Arun", lastName: "Kumar", age: 30, country: "UK" },
    { firstName: "AK", lastName: "O", age: 29, country: "USA" },
    { firstName: "Daniel", lastName: "Danieils", age: 32, country: "UK" },
    { firstName: "Selena", lastName: "Gomez", age: 17, country: "USA" }
  ];
   function profile(users){
      const detail = users.filter(users=>users.age >=18);
      const sortadults = detail.sort( (a,b) => a.age - b.age );
      const getdetails = sortadults.map(users => `${users.firstName}${users.lastName} from ${users.country}, Age is ${users.age}`)
      return getdetails;
   }
   const details = profile(users)
   console.log(details)