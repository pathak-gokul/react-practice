import { useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  console.log("hi");
  return <h2>Id is {id}</h2>;
};

export default Details;
