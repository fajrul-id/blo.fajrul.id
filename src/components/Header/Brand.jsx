import logo from "../../img/logo.png";

const Brand = ({ className }) => {
  return (
    <div className={className}>
      <img
        src={logo}
        className="max-w-[3rem] sm:max-w-[3.5rem] lg:max-w-[4.5rem]"
        alt="fajrul.id"
      />
    </div>
  );
};

export default Brand;
