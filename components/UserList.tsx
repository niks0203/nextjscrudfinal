"use client";
import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";

import Modal from "./Modal";
import Card from "./Card";
import CreateUserForm from "./CreateUserForm";

export default function UserList() {
  const [addingUser, setAddingUser] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [editingUser, setEditingUser] = useState(null);
  const perPage = 3;
  useEffect(() => {
    fetchUsers();
  }, [page]);

  function handleAddAction() {
    setAddingUser(true);
    setShowModal(true);
    console.log(addingUser);
    console.log(showModal);
  }
  function handleCloseModal() {
    setShowModal(false);
    setAddingUser(false);
    setEditingUser(null);
  }
  async function fetchUsers() {
    const res = await fetch(`/api/user?page=${page}&perPage=${perPage}`);
    console.log(res);
    if (!res.ok) {
      throw new Error("Something failed while fetching users");
    }
    const data = await res.json();
    console.log(data);
    setUsers(data.users);
    setTotalPages(data.totalPages);
  }
  function handleCreateEditFn(values) {
    if (editingUser) {
      console.log("inside the edit user");
      console.log(values);
      editUser(values);
    } else {
      createUser(values);
    }
  }
  async function editUser(values) {
    const res = await fetch(`/api/user/${editingUser.id}`, {
      method: "PUT",
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      throw new Error("Something went wrong while editing user");
    }
    fetchUsers();
    handleCloseModal();
  }
  async function createUser(values) {
    console.log("inside the createuser");
    console.log(values);
    const res = await fetch(`/api/user`, {
      method: "POST",
      headers: { "Content-Type": "application/html" },
      body: JSON.stringify(values),
    });
    console.log(res);
    if (!res.ok) {
      throw new Error("Something wrong while creating user");
    }
    fetchUsers();
    handleCloseModal();
  }
  async function deleteUser(values) {
    const res = await fetch(`/api/user/${values.id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Something went wrong while deleting the user");
    }
    fetchUsers();
  }

  function handleEditBtnclick(values) {
    console.log("edit btn clicked");

    setEditingUser(values);
    setAddingUser(false);
    setShowModal(true);
  }
  function handleDeleteBtnClick(values) {
    console.log("delete btn clicked");

    deleteUser(values);
  }
  function handlePrevPage() {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  }
  function handleNextPage() {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  }
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <MainHeader addUserAction={handleAddAction} />
        {showModal && (
          <Modal hideModalFuntion={handleCloseModal}>
            <CreateUserForm
              handleUserCreation={handleCreateEditFn}
              userData={editingUser ? editingUser : null}
              onCancel={handleCloseModal}
            />
          </Modal>
        )}
      </header>
      <section className="grid grid-cols-5 gap-4 pt-5 pb-5">
        {users ? (
          users.map((user) => (
            <Card
              key={user.id}
              user={user}
              onEdit={handleEditBtnclick}
              onDelete={handleDeleteBtnClick}
            />
          ))
        ) : (
          <h2>No users found</h2>
        )}
      </section>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={handlePrevPage} disabled={page === 0}>
          Previous
        </button>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={page >= totalPages - 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
