import React from "react";

const Profile = () => {
  return (
    <section className="max-w-[90%] mx-auto w-[100%] my-5">
      <h1 className="section-title text-white uppercase font-bold">Profile</h1>
      <div className="profile-container md:max-w-[50%] m-auto  p-2 rounded-md w-full">
        <div className="profile-card text-black flex flex-col items-center justify-center">
          <div
            className="card-avatar w-[20%] m-auto rounded-full overflow-hidden relative"
            title="Update Profile Photo"
          >
            <img
              src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg"
              className="m-auto"
            />
            <div className="edit-avatar absolute  top-0 hover:bg-[#00000099] w-full h-full  flex items-center justify-center cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-square-pen hidden group-hover:block"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
              </svg>
            </div>
          </div>
          <div className="card-body   text-black w-full p-2 rounded-md flex flex-col gap-4">
            <div className="user-name">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 rounded-md outline-none"
              ></input>
            </div>
            <div className="user-email">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-md outline-none"
              ></input>
            </div>
            <div className="user-password">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 rounded-md outline-none"
              ></input>
            </div>
            <div className="user-contact w-full">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 rounded-md outline-none"
              ></input>
            </div>
            <div className="user-submit w-full">
              <button className="bg-yellow-300  text-black font-bold py-2 px-4 rounded-md w-full">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
