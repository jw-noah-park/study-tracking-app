import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface Memo {
  id: number;
  content: string;
}

const MemosComponent: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    const fetchMemos = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("/api/memos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setMemos(data);
        } else {
          throw new Error("Failed to fetch memos");
        }
      } catch (error) {
        console.error("Error fetching memos:", error);
      }
    };

    fetchMemos();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/memos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        const newMemo = await response.json();
        setMemos([...memos, newMemo]);
        setContent("");
        alert("Memo added successfully");
      } else {
        throw new Error("Failed to add memo");
      }
    } catch (error) {
      console.error("Error adding memo:", error);
      alert("Failed to add memo");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      console.log("Deleting memo with id:", id);
      const response = await fetch(`/api/memos?id=${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setMemos(memos.filter((memo) => memo.id !== id));
        alert("Memo deleted successfully");
      } else {
        throw new Error("Failed to delete memo");
      }
    } catch (error) {
      console.error("Error deleting memo:", error);
      alert("Failed to delete memo");
    }
  };

  return (
    <div className="container mx-auto px-2 py-4">
      <div className="flex-1">
        <div className="mb-4">
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-white p-4 border border-gray-300 rounded-lg"
          >
            <label className="flex-grow flex items-center text-sm">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="+ Add a memo"
                className="flex-grow px-4 py-2 text-sm outline-none h-9"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <div className="ml-2">
                <button
                  type="submit"
                  className="bg-[#f18701] text-white px-4 py-2 rounded"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </label>
          </form>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Memos</h2>
          <hr className="border-gray-300 mb-3" />
          <ul className="space-y-2">
            {memos.map((memo) => (
              <li
                key={memo.id}
                className="bg-white rounded-md p-2 flex items-center justify-between shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm dark:text-gray-200">
                    {memo.content}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(memo.id)}
                  className="text-red-500 hover:text-red-600 text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MemosComponent;
