export default function Card({ user, onEdit, onDelete }) {
  function handleEditClick() {
    onEdit(user);
  }
  function handleDeleteClick() {
    onDelete(user);
  }
  return (
    <>
      <div className="block max-w-sm p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-sm hover:bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {user.name}
        </h5>
        <p className="text-gray-500 text-sm">
          {user.title} at{" "}
          <span className="text-purple-600 font-medium">{user.company}</span>
        </p>
        <div className="mt-4 space-y-2">
          <p className="flex items-start justify-start text-gray-700 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 inline mr-2 text-[#9333ea]"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>

            {user.phone}
          </p>
          <p className="flex items-start justify-start text-gray-700 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 inline mr-2 text-[#9333ea]"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>

            {user.email}
          </p>
        </div>
        <div className="buttons">
          <button
            type="button"
            onClick={handleEditClick}
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Edit
          </button>
          <button type="button" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
