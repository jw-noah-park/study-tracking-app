// import React, { useState, useEffect } from 'react';

// interface Memo {
//   id: number;
//   content: string;
// }

// const MemosPage: React.FC = () => {
//   const [content, setContent] = useState<string>('');
//   const [memos, setMemos] = useState<Memo[]>([]);

//   useEffect(() => {
//     const fetchMemos = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('/api/memos', {
//           headers: {
//             Authorization: `Bearer ${token}`
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
//       }
//     };

//     fetchMemos();
//   }, []);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
    
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch('/api/memos', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ content }),
//       });

//       if (response.ok) {
//         const newMemo = await response.json();
//         setMemos([...memos, newMemo]);
//         setContent('');
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
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-4">Add Memo</h2>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <label className="block mb-2">
//           Memo content:
//           <textarea value={content} onChange={(e) => setContent(e.target.value)} className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md"
//           />
//         </label>
//         <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add Memo</button>
//       </form>
//       <h2 className="text-2xl font-bold mb-4">Memos</h2>
//       <ul className="space-y-2">
//         {memos.map((memo, index) => (
//           <li className="border-b border-gray-300 py-2" key={index}>{memo.content}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MemosPage;


import React, { useState, useEffect } from 'react';

interface Memo {
  id: number;
  content: string;
}

const MemosPage: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    const fetchMemos = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/memos', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setMemos(data);
        } else {
          throw new Error('Failed to fetch memos');
        }
      } catch (error) {
        console.error('Error fetching memos:', error);
      }
    };

    fetchMemos();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/memos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        const newMemo = await response.json();
        setMemos([...memos, newMemo]);
        setContent('');
        alert('Memo added successfully');
      } else {
        throw new Error('Failed to add memo');
      }
    } catch (error) {
      console.error('Error adding memo:', error);
      alert('Failed to add memo');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/memos/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        setMemos(memos.filter((memo) => memo.id !== id));
        alert('Memo deleted successfully');
      } else {
        throw new Error('Failed to delete memo');
      }
    } catch (error) {
      console.error('Error deleting memo:', error);
      alert('Failed to delete memo');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Add Memo</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2">
          Memo content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md" />
        </label>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add Memo</button>
      </form>
      <h2 className="text-2xl font-bold mb-4">Memos</h2>
      <ul className="space-y-2">
        {memos.map((memo) => (
          <li key={memo.id} className="border-b border-gray-300 py-2 flex items-center justify-between">
            <span>{memo.content}</span>
            <button onClick={() => handleDelete(memo.id)} className="text-red-500 hover:text-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemosPage;
