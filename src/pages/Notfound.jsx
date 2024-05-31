import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div>Notfound</div>
      <p>
        Go to Homepage <Link to={"/"}>Here</Link>{" "}
      </p>
    </>
  );
};

export default Notfound;
