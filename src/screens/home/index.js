import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

const Home = () => {
  const [actionMenuVisible, setActionMenuVisible] = useState(false);

  const toggleActionMenu = () => setActionMenuVisible(!actionMenuVisible);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="flex flex-col md:flex-row w-full max-w-6xl h-[600px] bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        {/* Contacts Sidebar */}
        <div className="flex flex-col w-full md:w-1/3 bg-gray-900">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center bg-gray-700 rounded-lg">
              <input
                type="text"
                placeholder="Search contacts..."
                className="w-full bg-transparent text-gray-300 placeholder-gray-500 px-3 py-2 outline-none"
              />
              <button className="p-2">
              <IoSearchOutline color="white" />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {[
              { name: "Kalid", status: "online" },
              { name: "Ghulam mustafa", status: "offline", message: "left 7 mins ago" },
              { name: "Umair Khan", status: "online" },
              { name: "Mubeen", status: "offline", message: "left 30 mins ago" },
            ].map((user, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition cursor-pointer"
              >
                <div className="relative">
                  <img
                    src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                    alt="User Avatar"
                    className="h-12 w-12 rounded-full border-2 border-gray-500"
                  />
                  <span
                    className={`absolute bottom-1 right-1 h-3 w-3 rounded-full ${
                      user.status === "online" ? "bg-green-500" : "bg-red-500"
                    } border border-gray-800`}
                  ></span>
                </div>
                <div className="ml-3">
                  <p className="text-gray-200 font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-400">
                   user  message 
                  </p>
                  <p className="text-sm text-gray-400">
                    {user.message || `${user.name} is ${user.status}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex flex-col flex-1 bg-gray-800">
          {/* Header */}
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                  alt="Chat User"
                  className="h-10 w-10 rounded-full border-2 border-gray-500"
                />
                <span className="absolute bottom-1 right-1 h-3 w-3 bg-green-500 rounded-full border border-gray-800"></span>
              </div>
              <div>
                <p className="text-gray-200 font-semibold">Chat with Kalid</p>
                <p className="text-sm text-gray-400">1767 Messages</p>
              </div>
            </div>
            <div className="relative">
              <button onClick={toggleActionMenu} className="p-2">
                <i className="fas fa-ellipsis-v text-gray-400"></i>
              </button>
              {actionMenuVisible && (
                <ul className="absolute right-0 mt-2 w-40 bg-gray-700 text-gray-300 rounded-lg shadow-lg">
                  {["View Profile", "Add to Close Friends", "Add to Group", "Block"].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-600 transition cursor-pointer"
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {[
              { sender: "Kalid", message: "Hi, how are you?", time: "8:40 AM, Today", sent: false },
              { sender: "You", message: "I'm good! How about you?", time: "8:55 AM, Today", sent: true },
              { sender: "Kalid", message: "I'm good too, thank you!", time: "9:00 AM, Today", sent: false },
              { sender: "Kalid", message: "I'm good too, thank you!", time: "9:00 AM, Today", sent: false },
              { sender: "Kalid", message: "I'm good too, thank you!", time: "9:00 AM, Today", sent: true },
              { sender: "Kalid", message: "I'm good too, thank you!", time: "9:00 AM, Today", sent: false },
            ].map((msg, index) => (
              <div
                key={index}
                className={`flex items-start ${msg.sent ? "justify-end" : "justify-start"}`}
              >
                {!msg.sent && (
                  <img
                    src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full border-2 border-gray-500 mr-2"
                  />
                )}
                <div
                  className={`px-4 py-2 rounded-lg ${
                    msg.sent
                      ? "bg-blue-500 text-gray-100"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {msg.message}
                  <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-700 bg-gray-800">
            <div className="flex items-center space-x-3">
              <button>
                <i className="fas fa-paperclip text-gray-400"></i>
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-gray-700 text-gray-300 px-4 py-2 rounded-lg outline-none"
              />
              <button className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600 transition">
              <BsFillSendFill color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
