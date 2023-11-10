import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");

  const {user} = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(
      `https://mixxstore.onrender.com/mytoys/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
    
  }, [user]);
  
  const dell = () => toast("Deleted Data Successfully!");
  const up = () => toast("Update Data Successfully!");

  const [selectedToy, setSelectedToy] = useState(null);

  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleUpdateToy = (updatedToy) => {
    // Find the index of the updated toy in the toys array
    const index = toys.findIndex((toy) => toy._id === updatedToy._id);

    if (index !== -1) {
      // Update the toy with the new information
      setToys((prevToys) => {
        const updatedToys = [...prevToys];
        updatedToys[index] = updatedToy;
        return updatedToys;
      });

    } else {
      toast.error("Failed to update toy");
    }

    // Close the update modal
    setSelectedToy(null);
    setShowUpdateModal(false);
  };

  const handleDeleteToy = (toyId) => {
    // Filter out the toy to be deleted from the toys array
    const updatedToys = toys.filter((toy) => toy._id !== toyId);

    setToys(updatedToys);
  };

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mb-5">My Toys</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Quantity</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td className="border border-gray-300 p-2">{toy.name}</td>
              <td className="border border-gray-300 p-2">{toy.price}</td>
              <td className="border border-gray-300 p-2">{toy.quantity}</td>
              <td className="border border-gray-300 p-2">{toy.details}</td>
              <td className="border border-gray-300 text-center p-2">
                <button
                  className="border border-gray-300 p-2 mr-4"
                  onClick={() => {
                    setSelectedToy(toy);
                    setShowUpdateModal(true);
                    up();
                  }}
                >
                  Update
                </button>
                <button
                  className="border border-gray-300 p-2"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this toy?"
                      )
                    ) {
                      handleDeleteToy(toy._id);
                    }
                    {
                      dell();
                    }
                  }}
                >
                  Delete
                </button>
                <ToastContainer />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Toy Modal */}
      {showUpdateModal && selectedToy && (
        <div className="modal">
          <div className="modal-content">
            <h2>Update Toy</h2>
            {/* Update toy form */}
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={selectedToy.name}
                  onChange={(e) =>
                    setSelectedToy((prevToy) => ({
                      ...prevToy,
                      name: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  id="price"
                  value={selectedToy.price}
                  onChange={(e) =>
                    setSelectedToy((prevToy) => ({
                      ...prevToy,
                      price: parseInt(e.target.value),
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  value={selectedToy.quantity}
                  onChange={(e) =>
                    setSelectedToy((prevToy) => ({
                      ...prevToy,
                      quantity: parseInt(e.target.value),
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="details">Description:</label>
                <textarea
                  id="details"
                  value={selectedToy.details}
                  onChange={(e) =>
                    setSelectedToy((prevToy) => ({
                      ...prevToy,
                      details: e.target.value,
                    }))
                  }
                />
              </div>
            </form>

            <button onClick={() => handleUpdateToy(selectedToy)}>Save</button>
            <button onClick={() => setShowUpdateModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
