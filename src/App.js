import "./App.css";
//components
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import UserList from "./Components/userList/UserList";
import { useState } from "react";
import NewUserForm from "./Components/newUser/NewUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    setUsers((prev) => {
      return prev.filter((userId) => {
        return userId.id !== id;
      });
    });
  };

  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });

    setShowModal(false);
  };

  return (
    <div onKeyDown={closeModal} onClick={closeModal} className="App">
      <Navbar userLength={users.length} />
      <main>
        <div className="no-users">
          {users.length == 0 && <h2 className="no-user">No User</h2>}
        </div>
        <UserList users={users} handleDelete={handleDelete} />
        {showModal && <NewUserForm addUser={addUser} />}
      </main>
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
