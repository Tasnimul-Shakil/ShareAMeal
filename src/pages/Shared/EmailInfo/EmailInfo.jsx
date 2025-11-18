const EmailInfo = () => {
  return (
    <div className=" text-center px-4 items-center rounded-lg py-16 bg-[#155315] ">
      <h2 className=" text-xl text-[#55D4AB] font-semibold pt-6">
        No Spam Promise
      </h2>
      <h1 className=" text-3xl text-white font-bold pt-2">
        Are you a landlord?
      </h1>
      <p className="pt-2 text-[#D3D5DA]">
        Discover ways to increase your home value and get listed. No Spam.
      </p>
      <div className="join pt-10">
        <input
          className="input input-bordered lg:pr-32 pr-20 join-item"
          placeholder="Email"
        />
        <button className="btn join-item border-0 font-semibold text-white bg-[#55D4AB] hover:bg-[#f0ca4e] hover:text-black">
          Submit
        </button>
      </div>
      <p className="pt-2 text-[#9EA3AE]">
        Join <span className="text-white">10,000+</span> other landlords in our
        estatery community.
      </p>
    </div>
  );
};

export default EmailInfo;
