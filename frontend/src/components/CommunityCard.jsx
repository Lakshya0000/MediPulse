import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios'
import { Users } from 'lucide-react'

const CommunityCard = () => {
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        const fetchCommunities = async () => {
            try {
                const res = await axios.get('http://localhost:8080/community',{withCredentials:true});
                setCommunities(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCommunities();
    }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-44 flex gap-4">
      <div>
      <Users className="text-blue-600 bg-blue-100 size-10 p-2 border rounded-lg"/>
      </div>
      <div>
      <h3 className="text-lg font-semibold">Your Communities</h3>
      {communities?.map((community) => (
        <p key={community.id}>{community.name}</p>
      ))}
      </div>
    </div>
  )
}

export default CommunityCard