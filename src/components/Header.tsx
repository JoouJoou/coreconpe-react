import { useNavigate } from "react-router-dom";
import coreconlogo from "../assets/imgs/logo-c.png";
import { Menu, Dropdown } from "antd";

type items = {
  title: string;
  content: string;
};

const menuData = [
  {
    title: "Corecon-PE",
    items: [
      { title: "Item 1-1", content: "Institucional" },
      { title: "Item 1-2", content: "Estrutura Organizacional" },
      { title: "Item 1-3", content: "Corecon-PE na Mídia" },
      { title: "Item 1-4", content: "Informativo" },
      { title: "Item 1-5", content: "Boletim - Observatório Econômico" },
      { title: "Item 1-6", content: "Fiscalização" },
      { title: "Item 1-7", content: "Anuidade, Emolumentos e Multas" },
    ],
  },
  {
    title: "Economistas",
    items: [
      { title: "Item 2-1", content: "Registro Profissional" },
      { title: "Item 2-2", content: "Profissão Economista" },
      { title: "Item 2-3", content: "Código de Ética" },
      { title: "Item 2-4", content: "Cadastro Nacional de Peritos" },
      { title: "Item 2-5", content: "Certidões/ART" },
      { title: "Item 2-6", content: "Economistas Certificados" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { title: "Item 3-1", content: "Obrigatoriedade do Registro e Anuidades" },
      { title: "Item 3-2", content: "Alterações Cadastrais" },
      { title: "Item 3-3", content: "Registro Empresarial" },
      { title: "Item 3-4", content: "Certidões/ART" },
    ],
  },
  {
    title: "Estudantes",
    items: [
      { title: "Item 4-1", content: "Prêmio Dirceu Pessoa" },
      { title: "Item 4-2", content: "Credenciamento" },
      { title: "Item 4-3", content: "Faculdade de Economia do Estado" },
      { title: "Item 4-4", content: "Gincana Pernambucana de Economia" },
    ],
  },
  {
    title: "Eventos",
    items: [
      { title: "Item 5-1", content: "Inscrições" },
      { title: "Item 5-2", content: "Capacitação" },
      { title: "Item 5-3", content: "Dia do Economista 2021" },
      { title: "Item 5-4", content: "Enpecon" },
    ],
  },
  // Adicione mais menus conforme necessário
];

export default function Header() {
  const navigate = useNavigate();

  const renderMenuItems = (items: Array<items>) => {
    return items.map((item) => (
      <Menu.Item key={item.title} className="font-poppins">
        <a href="">{item.content}</a>
      </Menu.Item>
    ));
  };

  const renderDropdowns = () => {
    return menuData.map((menu) => (
      <Dropdown
        key={menu.title}
        overlay={() => <Menu className="bg-[#f1f1f1]">{renderMenuItems(menu.items)}</Menu>}
        trigger={["hover"]}
      >
        <li className="font-poppins text-center text-[1.5rem] p-[1.6rem] rounded-[10rem] border-none cursor-pointer hover:underline hover:bg-[#c2f6ff]">
          {menu.title}
        </li>
      </Dropdown>
    ));
  };

  type LinksType = {
    name: string;
    link: string;
  };

  const Links: LinksType[] = [];

  return (
    <header className="max-w-[100%]">
      <div className="max-w-[80%] flex my-[0] mx-[auto] items-center justify-between text-center">
        <a href="/">
          <img src={coreconlogo} alt="Corecon PE logo" className="w-[25rem] h-[10rem]" />
        </a>
        <ul className="w-[75%] flex justify-between items-center">
          {renderDropdowns()}
          <li className="font-poppins text-[1.5rem] p-[1.6rem] rounded-[10rem] border-none cursor-pointer hover:underline hover:bg-[#c2f6ff]">
            Transparência e Prestação de contas
          </li>
        </ul>
      </div>
      <div className="h-[0.1rem] bg-[#a9a9a9] drop-shadow-lg"></div>
    </header>
  );
}
