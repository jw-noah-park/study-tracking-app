// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('/api/data'); // Fetch data from the /api/data route
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       setUserData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>User Data</h1>
//       {userData ? (
//         <ul>
//           {userData.results.map((user) => (
//               <li key={user.id}>
//               <p>Email Address: {user.email_address}</p>
//               <p>Phone Number: {user.phone_number}</p>
//               <p>Last Name: {user.lastname}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }




import React from 'react';
import CalendarComponent from '../components/calendar';
import MemosComponent from '../components/memos'; 
import StudySession from '../components/studySession';

export default function Home() {
  return (
    <div>
      <CalendarComponent />
      <StudySession />
      <MemosComponent /> 

    </div>
  );
}
