const EmailInfo = () => {
  return (
    <div className="text-center px-4 items-center rounded-lg py-16 bg-[#155315]">
      <h2 className="text-xl text-[#55D4AB] font-semibold pt-6">
        100% Impact Promise
      </h2>

      <h1 className="text-3xl text-white font-bold pt-2">
        Want to help fight hunger?
      </h1>

      <p className="pt-2 text-[#D3D5DA]">
        Join ShareTheMeal and help provide nutritious meals to families in need.
        Every contribution counts.
      </p>

      <div className="join pt-10">
        <input
          className="input input-bordered lg:pr-32 pr-20 join-item"
          placeholder="Email address"
        />
        <button className="btn join-item border-0 font-semibold text-white bg-[#55D4AB] hover:bg-[#f0ca4e] hover:text-black">
          Join the Mission
        </button>
      </div>

      <p className="pt-2 text-[#9EA3AE]">
        Join <span className="text-white">5 million+</span> people sharing meals
        and spreading hope worldwide.
      </p>
    </div>
  );
};

export default EmailInfo;
