import { useParams } from "react-router-dom";
import { Circle, MapPinHouse, CircleUserRound } from "lucide-react";
import { useEffect, useState } from "react";

const doctorsData = [
	{
		id: "1",
		name: "Dr. Sarah Johnson",
		specialty: "Neurologist",
		experience: "10 years",
		qualification: "MD",
		memberSince: "2017",
		hospital: "Healing House",
		address: "Plot no. 77, xx lane, sector - xx, city_name, state",
		pin: "564-698",
		timings: "9:00 am - 4:00 pm",
		contact: "xxxxx-xxxxx",
		email: "eeee@mail.com",
	},
	{
		id: "2",
		name: "Dr. John Doe",
		specialty: "Cardiologist",
		experience: "15 years",
		qualification: "MBBS, MD",
		memberSince: "2015",
		hospital: "Heart Care Center",
		address: "Plot no. 22, ABC Road, City Name, State",
		pin: "123-456",
		timings: "10:00 am - 5:00 pm",
		contact: "yyyyy-yyyyy",
		email: "john.doe@mail.com",
	},
];

function DoctorsProfile() {
	const { id } = useParams(); // Get doctor ID from URL
	const [doctor, setDoctor] = useState(null);

	useEffect(() => {
		async function getDoctor() {
			const res = await fetch("http://localhost:8080/doctor/", {
				method: "GET",
				credentials: "include",
			});
			const obj = await res.json();
			for (let i=0;i<obj.length;i++) {
				if (obj[i]._id === id) {
					setDoctor(obj[i]);
					break;
				}
			}
		}
		getDoctor();
		// const selectedDoctor = doctorsData.find(doc => doc.id === id);
		// setDoctor(selectedDoctor);
	}, []);

	if (!doctor) {
		return (
			<p className="text-center mt-10 text-xl text-gray-500">
				Doctor not found.
			</p>
		);
	}

	return (
		<div className="my-20 w-[70%] mx-auto border border-gray-300 rounded-lg">
			<div className="mt-10 ml-9 text-xl font-bold p-4">
				<CircleUserRound className="w-20 h-20 text-black-400 bg-blue-100 border rounded-full border-blue-100" />
				<div className="flex items-center">
					<h1>{`${doctor.firstName} ${doctor.lastName}`}</h1>
				</div>
				<div className="text-gray-400 text-sm">
					{doctor.experience.expertise}
				</div>
			</div>

			<div className="m-10">
				<div className="flex justify-between">
					<div className="bg-blue-50 rounded-xl w-2/5 h-60 p-4">
						<div className="flex justify-between px-5 font-bold">
							<p>Experience</p>
							<p>Specialty</p>
						</div>
						<div className="flex justify-between px-5 mt-3 font-bold text-blue-500">
							<div className="p-1 bg-blue-100 rounded-xl">
								{doctor.experience.years}
							</div>
							<div className="p-1 bg-blue-100 rounded-xl">
								{doctor.experience.expertise}
							</div>
						</div>
						<div className="flex justify-between px-5 mt-4 font-bold">
							<p>Qualification</p>
							<p>Member Since</p>
						</div>
						<div className="flex justify-between px-5 mt-3 font-bold text-blue-500">
							<div className="p-1 bg-blue-100 rounded-xl">
								{doctor.qualification}
							</div>
							<div className="p-1 bg-blue-100 rounded-xl">
								{doctor.memberSince}
							</div>
						</div>
					</div>
				</div>

				<div className="mt-8 bg-blue-50 rounded-xl w-full p-10">
					<MapPinHouse color="#427CED" />
					<p className="text-2xl font-bold">{doctor.clinic.name}</p>
					<div className="flex">
						<div className="pl-4 font-bold text-gray-400 text-sm">
							{doctor.clinic.location} <br /> Pin - {doctor.clinic.pin}
						</div>
						<div className="pl-4 m-auto font-bold text-right text-gray-400 text-sm">
							Timings: {doctor.timings} <br />
							Contact: {doctor.phone} <br />
							Mail: {doctor.email}
						</div>
					</div>
					<div className="mt-3 text-blue-600 underline text-sm">
						<a href="#" className="hover:text-blue-800">
							Directions
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DoctorsProfile;
