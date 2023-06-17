import { useDeferredValue, useState } from "react";
import { isValidEmail } from "../../utils/helperFunction";

const Signup = () => {
  const [email, setEmail] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    window.open("https://app.loch.one/welcome", "_blank");
  };
  const defferedEmail = useDeferredValue(email);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (!isValidEmail(email)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  return (
    <div className="grid place-items-center bg-white h-screen sm:w-[40%] w-full">
      <div className="p-8 shadow">
        <h2 className="header mb-4 text-gray-400">
          Sign up for <br /> exclusive access.
        </h2>
        <input
          value={email}
          onChange={handleChange}
          className="shadow rounded px-4 py-2 font-extralight border w-full mb-4"
          placeholder="Your email address"
        />
        <div className="min-h-[1vh] relative">
          {isError && email && (
            <p className="text-red-500 text-xs absolute bottom-1">
              please enter a valid email
            </p>
          )}
        </div>
        <button
          disabled={isError || !email}
          onClick={handleSubmit}
          className="bg-[#19191A] text-white px-6 py-2 rounded w-full text-sm disabled:text-gray-500 disabled:opacity-80"
        >
          Get Started
        </button>

        <p className="text-sm opacity-70 mt-3">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default Signup;
