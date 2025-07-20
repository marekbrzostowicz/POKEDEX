import { useNavigate } from "react-router";
import { SlArrowLeft } from "react-icons/sl";

const ReturnToList = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate(-1);
  };

  return (
    <button
      className="flex items-center gap-4 hover:cursor-pointer group"
      onClick={() => home()}
    >
      <SlArrowLeft className="text-yellow-300 group-hover:-translate-x-2.5 transition-transform duration-300" size={20}/>
      <p className="text-blue-300 text-xl hover:text-blue-600 transition">Back To List</p>
    </button>
  );
};

export default ReturnToList;