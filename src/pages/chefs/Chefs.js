import useFetch from "../../hooks/useFetch";
import avatar from "../../assets/chef-images/avatar.png";
import "./styles.css";

const Chefs = () => {
  const { data: chefs } = useFetch(
    "https://jsonplaceholder.typicode.com/users?_start=0&_limit=8"
  );

  return (
    <div className="chefs-container">
      <h2 className="chefs-heading">Our chefs</h2>
      <div className="chefs">
        {chefs &&
          chefs.map((chef) => {
            const { id, name, email } = chef;
            return (
              <div key={id}>
                <img src={avatar} alt={name} width="100" height="100" />
                <h4>{name}</h4>
                <p>{email}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Chefs;
