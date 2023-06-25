type socials = {
  link: string;
  img: string;
  alt: string;
};

export default function Socials(props: socials) {
  return (
    <a href={props.link}>
      <img src={props.img} alt={props.alt} className="cursor-pointer w-[5rem] h-[5rem]" />
    </a>
  );
}
