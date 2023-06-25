import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import facebook from "../assets/imgs/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png";
import youtube from "../assets/imgs/3670163.png";
import whatsapp from "../assets/imgs/4485687.png";
import linkedin from "../assets/imgs/702300.png";
import instagram from "../assets/imgs/instagram-icon-logo-free-png.png";
import Socials from "./Socials";

export default function Footer() {
  const socials = [
    {
      alt: "facebook",
      img: facebook,
      link: "https://www.facebook.com/CoreconPE/",
    },
    {
      alt: "youtube",
      img: youtube,
      link: "https://www.youtube.com/@CoreconPernambuco",
    },
    {
      alt: "whatsapp",
      img: whatsapp,
      link: "https://api.whatsapp.com/send?phone=5581999858433",
    },
    {
      alt: "linkedin",
      img: linkedin,
      link: "https://www.linkedin.com/company/corecon-pe/about/",
    },
    {
      alt: "instagram",
      img: instagram,
      link: "https://www.instagram.com/corecon.pe/",
    },
  ];
  return (
    <footer className="w-[100%] min-h-[18rem] bg-[#0b2c50] font-poppins text-[#fff] text-[1.5rem] flex items-center text-center mt-[2rem]">
      <div className="my-[0] mx-[auto] flex flex-col gap-[1rem]">
        <div className="w-[60%] flex my-[0] mx-[auto] justify-around">
          {socials.map((item, index) => {
            return <Socials key={index} link={item.link} alt={item.alt} img={item.img} />;
          })}
        </div>

        <div className="h-[0.1rem] bg-[#fff]"></div>
        <p className="flex-wrap max-w-[90rem]">
          © 2023 - Todos os direitos reservados - Corecon-PE - Conselho Regional de Economia - 3ª
          Região - PE Rua do Riachuelo, 105, sala 212, 2ºandar, Edf. Círculo Católico - Boa Vista -
          Recife, PE - CEP: 50.050-400 (81) 3039.8842 | 3221.2473 | 99985-8433 (Vivo) Horário de
          funcionamento: 09:00 às 16:00 horas
        </p>
      </div>
    </footer>
  );
}
