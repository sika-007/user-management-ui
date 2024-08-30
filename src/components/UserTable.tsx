import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setFilter } from "../features/users/usersSlice";
import { RootState, AppDispatch } from "../features/store";

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, filter, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (field: keyof typeof filter, value: string) => {
    dispatch(setFilter({ field, value }));
  };

  const filteredUsers = users.filter((user) =>
    Object.entries(filter).every(([key, value]) => {
      const userValue = user[key as keyof typeof user];

      if (typeof userValue === "string") {
        const normalize = (str: string) =>
          str.toLowerCase().replace(/[^a-z0-9]/gi, "");
        if (key === "phone") {
          // Normalize phone numbers: Remove all non-numeric characters
          const normalizedUserPhone = userValue.replace(/\D/g, ""); // Remove all non-digits
          const normalizedFilterPhone = value.replace(/\D/g, ""); // Remove all non-digits
          // Check if the normalized phone number includes the filter value
          return normalizedUserPhone.includes(normalizedFilterPhone);
        }

        if (key === "username" || key === "email") {
          // For name and username, remove all non-alphanumeric characters for comparison
          const normalizedUserValue = normalize(userValue);
          const normalizedFilterValue = normalize(value);
          return normalizedUserValue.includes(normalizedFilterValue);
        }

        return userValue.toLowerCase().includes(value.toLowerCase());
      } else if (typeof userValue === "number") {
        return userValue.toString().includes(value); // compare numbers as strings
      }

      return false; // A fallback for un supported types
    })
  );

  if (error)
    <div className="w-screen h-full flex justify-center items-center">
      <p className="text-2xl">Error fetching user data</p>
      <p>Please reload the page</p>
    </div>;

  return (
    <div className="w-full h-full flex justify-center items-start">
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="text-2xl">Loading... Please wait</p>
        </div>
      ) : (
        <div className="container flex justify-center rounded-md overflow-hidden max-w-3xl">
          <table className="w-full">
            <thead className="bg-gray-900 text-white">
              <tr className="text-start h-20 align-bottom">
                <th>
                  <div className="pl-2">
                    <p className="text-start">Name</p>
                  </div>
                  <div className="bg-gray-200">
                    <input
                      placeholder="search names"
                      className="w-full mr-5 bg-transparent px-1 border-none outline-none focus:ring-0 shadow-none text-black text-xs font-semibold overflow-ellipsis"
                      name="name"
                      type="text"
                      value={filter.name}
                      onChange={(e) =>
                        handleFilterChange("name", e.target.value)
                      }
                      autoComplete="off"
                    />
                  </div>
                </th>
                <th>
                  <div className="pl-2">
                    <p className="text-start">Username</p>
                  </div>
                  <div className="bg-gray-200">
                    <input
                      placeholder="search usernames"
                      className="w-full mr-5 bg-transparent px-1 border-none outline-none focus:ring-0 shadow-none text-black text-xs font-semibold overflow-ellipsis"
                      name="username"
                      type="text"
                      value={filter.username}
                      onChange={(e) =>
                        handleFilterChange("username", e.target.value)
                      }
                      autoComplete="off"
                    />
                  </div>
                </th>
                <th>
                  <div className="pl-2">
                    <p className="text-start">Email</p>
                  </div>
                  <div className="bg-gray-200">
                    <input
                      placeholder="search email"
                      className="w-full mr-5 bg-transparent px-1 border-none outline-none focus:ring-0 shadow-none text-black text-xs font-semibold overflow-ellipsis"
                      name="email"
                      type="email"
                      value={filter.email}
                      onChange={(e) =>
                        handleFilterChange("email", e.target.value)
                      }
                      autoComplete="off"
                    />
                  </div>
                </th>
                <th>
                  <div className="pl-2">
                    <p className="text-start">Phone</p>
                  </div>
                  <div className="bg-gray-200">
                    <input
                      placeholder="search phone numbers"
                      className="w-full mr-5 bg-transparent px-1 border-none outline-none focus:ring-0 shadow-none text-black text-xs font-semibold overflow-ellipsis"
                      type="tel"
                      name="phone"
                      value={filter.phone}
                      onChange={(e) =>
                        handleFilterChange("phone", e.target.value)
                      }
                      autoComplete="off"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-600 rounded-lg text-white font-thin text-sm">
              {filteredUsers.map((user) => (
                <tr className="h-12" key={user.id}>
                  <td>
                    <div
                      title={user.name}
                      className="pl-3 w-20 sm:w-32 md:w-auto truncate md:overflow-auto"
                    >
                      {user.name}
                    </div>
                  </td>
                  <td>
                    <div
                      title={user.name}
                      className="w-20 sm:w-32 md:w-auto truncate md:overflow-auto"
                    >
                      {user.username}
                    </div>
                  </td>
                  <td>
                    <div
                      title={user.email}
                      className="w-20 sm:w-32 md:w-auto truncate md:overflow-auto"
                    >
                      {user.email}
                    </div>
                  </td>
                  <td>
                    <div
                      title={user.phone}
                      className="w-20 sm:w-32 md:w-auto pr-3 truncate md:overflow-auto"
                    >
                      {user.phone}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserTable;
