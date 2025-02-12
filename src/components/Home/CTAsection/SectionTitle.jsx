const FirstSectionTitle = () => {
  return (
    <h2 className="flex flex-row gap-x-4 flex-wrap text-5xl text-heading max-w-[70%] lg:max-w-[55%]">
      <span className="">Apprenez</span>
      <span className="text-white">et</span>
      <span>progressez</span>
    </h2>
  );
};
const SecondSectionTitle = () => {
  return (
    <h2 className="flex flex-row gap-x-4 flex-wrap text-5xl text-heading ">
      <span className="text-white">Restez informé des</span>
      <span>dernières</span>
      <span className="text-white">tendances</span>
    </h2>
  );
};
let sectionTitles = { FirstSectionTitle, SecondSectionTitle };
export default sectionTitles;
