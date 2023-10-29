type Props = {
  title: string;
  sub: string;
};

function CustomSectionTitle({ title, sub }: Props) {
  return (
    <header className="flex flex-col gap-y-3">
      <h1 className="text-themeNavyBlue text-2xl md:text-[2rem] font-bold leading-none">{title}</h1>
      <p className="text-base font-normal text-themeGray-10 leading-none">{sub}</p>
    </header>
  );
}

export default CustomSectionTitle;
