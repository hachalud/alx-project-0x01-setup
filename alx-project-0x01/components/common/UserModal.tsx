import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    nestedKey?: string,
    parentKey?: string
  ) => {
    const { name, value } = e.target;

    if (parentKey && nestedKey) {
      setUser((prev) => ({
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [nestedKey]: {
            ...prev[parentKey][nestedKey],
            [name]: value,
          },
        },
      }));
    } else if (parentKey) {
      setUser((prev) => ({
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [name]: value,
        },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl space-y-4">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Name"
            className="border px-2 py-1 rounded"
            value={user.name}
            onChange={handleChange}
          />
          <input
            name="username"
            placeholder="Username"
            className="border px-2 py-1 rounded"
            value={user.username}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            className="border px-2 py-1 rounded"
            value={user.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            className="border px-2 py-1 rounded"
            value={user.phone}
            onChange={handleChange}
          />
          <input
            name="website"
            placeholder="Website"
            className="border px-2 py-1 rounded"
            value={user.website}
            onChange={handleChange}
          />
          <input
            name="name"
            placeholder="Company Name"
            className="border px-2 py-1 rounded"
            value={user.company.name}
            onChange={(e) => handleChange(e, undefined, "company")}
          />
          <input
            name="catchPhrase"
            placeholder="Catch Phrase"
            className="border px-2 py-1 rounded"
            value={user.company.catchPhrase}
            onChange={(e) => handleChange(e, undefined, "company")}
          />
          <input
            name="bs"
            placeholder="Business Strategy"
            className="border px-2 py-1 rounded"
            value={user.company.bs}
            onChange={(e) => handleChange(e, undefined, "company")}
          />
          <input
            name="street"
            placeholder="Street"
            className="border px-2 py-1 rounded"
            value={user.address.street}
            onChange={(e) => handleChange(e, undefined, "address")}
          />
          <input
            name="suite"
            placeholder="Suite"
            className="border px-2 py-1 rounded"
            value={user.address.suite}
            onChange={(e) => handleChange(e, undefined, "address")}
          />
          <input
            name="city"
            placeholder="City"
            className="border px-2 py-1 rounded"
            value={user.address.city}
            onChange={(e) => handleChange(e, undefined, "address")}
          />
          <input
            name="zipcode"
            placeholder="Zipcode"
            className="border px-2 py-1 rounded"
            value={user.address.zipcode}
            onChange={(e) => handleChange(e, undefined, "address")}
          />
          <input
            name="lat"
            placeholder="Latitude"
            className="border px-2 py-1 rounded"
            value={user.address.geo.lat}
            onChange={(e) => handleChange(e, "geo", "address")}
          />
          <input
            name="lng"
            placeholder="Longitude"
            className="border px-2 py-1 rounded"
            value={user.address.geo.lng}
            onChange={(e) => handleChange(e, "geo", "address")}
          />
        </div>
        <div className="flex justify-end gap-3 pt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;