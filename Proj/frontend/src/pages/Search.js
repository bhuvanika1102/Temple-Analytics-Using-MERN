// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/Search.css';

// function Search() {
//   const [templeEmail, setTempleEmail] = useState('');
//   const [searchResult, setSearchResult] = useState(null);

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     try {
//       // Make an API request to search for the temple by templeEmail
//       const response = await axios.get(`http://localhost:9090/register/${templeEmail}`);

//       // Handle the search results
//       const templeData = response.data;
//       if (templeData) {
//         const message = `Temple Name: ${templeData.d_templename}\nDeity: ${templeData.d_deity}`;
//         alert(message);
//         setSearchResult(templeData);
//       } else {
//         alert('Temple not found');
//         setSearchResult(null);
//       }
//     } catch (error) {
//       console.error('Error searching for temple:', error);
//       // Handle error here
//     }
//   };

//   return (
//     <div className="container"> {/* Apply CSS class */}
//       <h2>Search for Temple by Email</h2>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Enter Temple Email"
//           value={templeEmail}
//           onChange={(e) => setTempleEmail(e.target.value)}
//         />

//         <button type="submit">Search</button>
//       </form>

//       {searchResult && (
//         <div className="search-results"> {/* Apply CSS class */}
//           <h3>Search Results:</h3>
//           <p>Temple Name: {searchResult.d_templename}</p>
//           <p>Deity: {searchResult.d_deity}</p>
//           <p>District: {searchResult.d_district}</p>
//           <p>State: {searchResult.d_state}</p>
//           <p>Pincode: {searchResult.d_pincode}</p>
//           <p>Era: {searchResult.d_era}</p>
//           <p>Category: {searchResult.d_category}</p>
//           <p>Year_of_Built: {searchResult.d_year_of_built}</p>
//           <p>Opening_Time: {searchResult.d_opening_time}</p>
//           <p>Closing_Time: {searchResult.d_closing_time}</p>
//           <p>Description: {searchResult.d_description}</p>
          
          
//         </div>
//       )}
//     </div>
//   );
// }

// // export default Search;
// import React, { useState } from 'react';
// import { Form, Button, Input, Card } from 'antd';
// import '../styles/Search.css';
// const TempleDetails = () => {
//   const [form] = Form.useForm();
//   const [templeDetails, setTempleDetails] = useState(null);

//   const handleSearch = async (values) => {
//     try {
//       const response = await fetch(`/api/search?d_email=${values.d_email}`);
//       const data = await response.json();
//       setTempleDetails(data);
//     } catch (error) {
//       console.error(error);
//       // Handle error here
//     }
//   };

//   return (
//     <div className="temple-details-container">
//       <h2>Search for Temple Details by Email</h2>
//       <Form form={form} onFinish={handleSearch}>
//         <Form.Item name="d_email" label="Enter Temple Email">
//           <Input />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Search
//           </Button>
//         </Form.Item>
//       </Form>

//       {templeDetails && (
//         <div className="temple-details-card">
//           <Card title="Temple Details">
//             <p><strong>Temple Name:</strong> {templeDetails.d_templename}</p>
//             <p><strong>Deity:</strong> {templeDetails.d_deity}</p>
//             <p><strong>District:</strong> {templeDetails.d_district}</p>
//             <p><strong>State:</strong> {templeDetails.d_state}</p>
//             <p><strong>Pincode:</strong> {templeDetails.d_pincode}</p>
//             <p><strong>Era:</strong> {templeDetails.d_era}</p>
//             <p><strong>Category:</strong> {templeDetails.d_category}</p>
//             <p><strong>Year of Built:</strong> {templeDetails.d_year_of_built}</p>
//             <p><strong>Opening Time:</strong> {templeDetails.d_opening_time}</p>
//             <p><strong>Closing Time:</strong> {templeDetails.d_closing_time}</p>
//             <p><strong>Description:</strong> {templeDetails.d_description}</p>
//           </Card>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TempleDetails;
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Search.css'; // Import the CSS file

function Search() {
  const [templeEmail, setTempleEmail] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Make an API request to search for the temple by templeEmail
      const response = await axios.get(`http://localhost:9090/register/${templeEmail}`);

      // Handle the search results
      const templeData = response.data;
      if (templeData) {
        const message = `Temple Name: ${templeData.d_templename}\nDeity: ${templeData.d_deity}`;
        alert(message);
        setSearchResult(templeData);
      } else {
        alert('Temple not found');
        setSearchResult(null);
      }
    } catch (error) {
      console.error('Error searching for temple:', error);
      // Handle error here
    }
  };

  return (
    <div className="container"> {/* Apply CSS class */}
      <h2>Search for Temple by Email</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Temple Email"
          value={templeEmail}
          onChange={(e) => setTempleEmail(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {searchResult && (
        <div className="search-results"> {/* Apply CSS class */}
          <h3>Search Results:</h3>
          <p>Temple Name: {searchResult.d_templename}</p>
          <p>Deity: {searchResult.d_deity}</p>
          <p>District: {searchResult.d_district}</p>
          <p>State: {searchResult.d_state}</p>
          <p>Pincode: {searchResult.d_pincode}</p>
          <p>Era: {searchResult.d_era}</p>
          <p>Category: {searchResult.d_category}</p>
          <p>Year_of_Built: {searchResult.d_year_of_built}</p>
          <p>Opening_Time: {searchResult.d_opening_time}</p>
          <p>Closing_Time: {searchResult.d_closing_time}</p>
          <p>Description: {searchResult.d_description}</p>
          
          
        </div>
      )}
    </div>
  );
}

export default Search;
