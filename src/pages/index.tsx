import { useState, useEffect } from 'react';

export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data'); // Fetch data from the /api/data route
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>User Data</h1>
      {userData ? (
        <ul>
          {userData.results.map((user) => (
              <li key={user.id}>
              <p>Email Address: {user.email_address}</p>
              <p>Phone Number: {user.phone_number}</p>
              <p>Last Name: {user.lastname}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const IndexPage: React.FC = () => {
//   const [content, setContent] = useState<string>('');
//   const [memos, setMemos] = useState<any[]>([]);
//   const router = useRouter();

//   // 클라이언트 측 코드에서만 localStorage를 사용합니다.
//   useEffect(() => {
//     const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰을 가져옴
//     const fetchMemos = async () => {
//       try {
//         const response = await fetch('/api/memos', {
//           headers: {
//             Authorization: `Bearer ${token}` // 토큰을 Authorization 헤더에 포함
//           }
//         });
//         if (response.ok) {
//           const data = await response.json();
//           setMemos(data);
//         } else {
//           throw new Error('Failed to fetch memos');
//         }
//       } catch (error) {
//         console.error('Error fetching memos:', error);
//         // 에러 처리 로직 추가
//       }
//     };

//     fetchMemos();
//   }, []); // 한 번만 실행하도록 빈 배열 전달

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
    
//     try {
//       const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰을 가져옴
//       const response = await fetch('/api/memos', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}` // 토큰을 Authorization 헤더에 포함
//         },
//         body: JSON.stringify({ content }),
//       });

//       if (response.ok) {
//         const newMemo = await response.json();
//         setMemos([...memos, newMemo]);
//         setContent(''); // 입력 필드 초기화
//         alert('Memo added successfully');
//       } else {
//         throw new Error('Failed to add memo');
//       }
//     } catch (error) {
//       console.error('Error adding memo:', error);
//       alert('Failed to add memo');
//     }
//   };

//   return (
//     <div>
//       <h2>Add Memo</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Memo content:
//           <textarea value={content} onChange={(e) => setContent(e.target.value)} />
//         </label>
//         <button type="submit">Add Memo</button>
//       </form>
//       <h2>Memos</h2>
//       <ul>
//         {memos.map((memo, index) => (
//           <li key={index}>{memo.content}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default IndexPage;



