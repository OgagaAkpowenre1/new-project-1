import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete(){
 const [loading, setLoading] = useState(false);
 const [userData, setUserData] = useState([]);
 const [error, setError] = useState(null);
 const [searchParam, setSearchParam] = useState('');
 const [showDropdown, setShowDropdown] = useState(false);
 const [filteredUsers, setFilteredUsers] = useState([])

 function handleChange(event){
  const query = event.target.value.toLowerCase();
  setSearchParam(query);
  if(query.length > 1) {
   const filteredData = userData && userData.length ?
   userData.filter(item => item.toLowerCase().indexOf(query) > -1) 
   : [];
   setFilteredUsers(filteredData);
   setShowDropdown(true);
  } else{
   setShowDropdown(false);
  }
 }

 function handleClick(event){
  console.log(event.target.innerText);
  setSearchParam(event.target.innerText);
  setFilteredUsers([]);
  setShowDropdown(false);
 }

 async function getUserData(){
    try {
       setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users && data.users.length > 0) {
       setUserData(data.users.map(userItem => userItem.firstName));
       setLoading(false);
       setError(null);
      }
    } catch (error) {
     setError(error)
     setLoading(false)
     console.log(error)
    }
 }

 useEffect(() => {
   getUserData();
 }, [])

 console.log(userData, filteredUsers)

 if(loading){
  return <div>Data Loading ! Please wait!</div>
 }

 return (
  <div className="autocomplete-container">
    <input name="search-users" placeholder="Search User Here..." value={searchParam}
     onChange={handleChange}/>
     {showDropdown && <Suggestions data={filteredUsers} handleClick={handleClick}/>}
  </div>
 )
}