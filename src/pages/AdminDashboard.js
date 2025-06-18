import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/forms").then((res) => setForms(res.data));
  }, []);

  const deleteForm = (id) => {
    axios.delete(`http://localhost:5000/api/forms/${id}`).then(() => {
      setForms(forms.filter((f) => f._id !== id));
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => navigate("/form-builder")}
      >
        + New Form
      </button>
      <ul>
        {forms.map((form) => (
          <li key={form._id} className="border p-2 mb-2">
            <div className="flex justify-between">
              <span>{form.title}</span>
              <div>
                <button
                  className="bg-yellow-500 text-white px-2 py-1 mr-2"
                  onClick={() => navigate(`/form-builder/${form._id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() => deleteForm(form._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
