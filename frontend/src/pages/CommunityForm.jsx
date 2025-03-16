import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import CommunityCard from "../components/CommunityCard";
import { useAuth } from "../context/AuthContext";

const CommunityForm = () => {
	const navigate = useNavigate();
	const {isAuth} = useAuth();
	useEffect(() => {
		if(!isAuth) navigate("/login");
	}, [isAuth]);
	return (
		<>
		<CommunityCard/>
		</>
	);
};

export default CommunityForm;
