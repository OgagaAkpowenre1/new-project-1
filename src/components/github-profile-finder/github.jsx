import React, { useEffect, useState } from "react";
import './github.css';
import UserCard from "./userCard";

export default function GithubProfileFinder(){
 const [username, setUsername] = React.useState('sangammukherjee');
 const [userData, setUserData] = useState(null);
 const [loading, setLoading] = useState(false)

 async function fetchGithubUserData(){
  setLoading(true);
  const res = await fetch(`https://api.github.com/users/${username}`);

  const data = await res.json();

  console.log(data);
  if(data){
   setUserData(data)
   setLoading(false)
   setUsername('')
  }
 }

 function handleSubmit(){
   fetchGithubUserData()
 }

 useEffect(() => {
  fetchGithubUserData();
 }, [])

 if(loading){
  return <h1>Loading data ! Please wait.</h1>
 }

 return (
		<div className="github-profile-container">
			<div className="input-container">
				<input
					type="text"
					name="serach-by-username"
					placeholder="Enter Github username"
					value={username}
					onChange={(event) => setUsername(event.target.value)}
				/>
				<button onClick={handleSubmit}>Search</button>
			</div>
			{userData !== null ? <UserCard user={userData}/> : null}
		</div>
 );
}