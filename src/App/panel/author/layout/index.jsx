import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/auth";
import { useEffect } from "react";

const AuthorLayout = ({children}) => {

	const [auth] =   useAuth();
	const router = useNavigate();

	useEffect(() => {
	  if (!auth.token){
		  router('/')
	  }
	},[]) 

  return (
	<>
	<nav>Author Dashboard Header</nav>
	<div> AuthorLayout</div>
	{children}
	</>
  )
}

export default AuthorLayout