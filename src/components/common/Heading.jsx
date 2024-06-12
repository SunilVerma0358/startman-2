export const Heading = (props) => {
  return (
    <h2
      className={`font-Anek font-semibold text-3xl sm:text-3xxl lg:text-5xl text-black !leading-[120%] ${props.className}`}
    >
      {props.text}
    </h2>
  );
};
