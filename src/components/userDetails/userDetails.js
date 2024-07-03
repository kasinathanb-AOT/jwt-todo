import React, { useEffect } from "react";
import { getTasks } from "../../services/userServices";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { token } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTasks(token);
        console.log(response);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <h1>User Details</h1>
      
    </div>
  );
}

export default UserDetails;
