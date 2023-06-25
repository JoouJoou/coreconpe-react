import { BsFileEarmarkText } from "react-icons/bs";
import { BsMegaphone } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export default function Services() {
  return (
    <div className="font-poppins text-[2.4rem] flex justify-around mt-[3rem]">
      <a href="">
        <div className="flex flex-col text-center justify-center items-center cursor-pointer hover:bg-[#a9a9a9] p-[2rem] rounded-[5rem]">
          <BsFileEarmarkText className="text-[5rem] text-[black]" />
          <h2>Emissão de boletos</h2>
        </div>
      </a>
      <a href="">
        <div className="flex flex-col text-center justify-center items-center cursor-pointer hover:bg-[#a9a9a9] p-[2rem] rounded-[5rem]">
          <BsMegaphone className="text-[5rem] text-[black]" />
          <h2>Denuncie irregularidades</h2>
        </div>
      </a>
      <a href="">
        <div className="flex flex-col text-center justify-center items-center cursor-pointer hover:bg-[#a9a9a9] p-[2rem] rounded-[5rem]">
          <AiOutlineUser className="text-[5rem] text-[black]" />
          <h2>Consulta cadastral</h2>
        </div>
      </a>
    </div>
  );
}
