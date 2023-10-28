type Props = {
  title: string;
  sub: string;
};

function CustomSectionTitle({ title, sub }: Props) {
  return (
    <header className="flex flex-col gap-y-3">
      <h1 className="text-themeNavyBlue text-2xl lg:text-[2rem] font-bold">{title}</h1>
      <p className="text-base font-normal text-themeGray-10">{sub}</p>
    </header>
  );
}

export default CustomSectionTitle;
