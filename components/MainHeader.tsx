export default function MainHeader({ addUserAction }) {
  function handleAddClick(event) {
    console.log("add user btn was clicked");
    addUserAction();
  }
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Contact Users</h2>
        <p className="text-gray-500 text-sm">
          Manage all your existing users or add a new onet
        </p>
      </div>
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded-lg"
        type="button"
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        onClick={handleAddClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        Add User
      </button>
    </>
  );
}
