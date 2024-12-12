import { useState, useEffect } from "react";
import axios from "axios";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search input

  useEffect(() => {
    async function fetchSchools() {
      try {
        const response = await axios.get("https://schools-management.netlify.app/api/getSchools");
        setSchools(response.data);
      } catch (error) {
        console.error("Error fetching schools data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSchools();
  }, []);

  // Filter the schools based on the search term
  const filteredSchools = schools.filter((school) => {
    return (
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1 className="title">Schools List</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name or city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {loading ? (
        <div className="loading">Loading schools...</div>
      ) : filteredSchools.length > 0 ? (
        <div className="school-grid">
          {filteredSchools.map((school) => (
            <div key={school.id} className="school-card">
             <img
  src={school.image}  // Use the full URL
  alt={school.name}
  className="school-image"
/>
              <div className="school-info">
                <h2 className="school-name">{school.name}</h2>
                <p className="school-address">{school.address}</p>
                <p className="school-city">{school.city}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-schools">No schools found</p>
      )}
    </div>
  );
}
