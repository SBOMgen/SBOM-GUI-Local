import React from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";
const Listt = () => {
  const [list, setlist] = React.useState([]);
  const options = {
    method: "GET",
    url: "http://localhost:4000/reports",
  };
  React.useEffect(() => {
    if (list.length == 0) {
      axios(options)
        .then((response) => {
          const workflows = response.data;
          console.log(workflows.data);
          setlist(workflows.data);
        })
        .catch((error) => {
          console.error(
            "Error fetching repositories:",
            error.response ? error.response.data : error.message
          );
        });
    }
  }, [list]);

  return (
    <>
      {list.map((item, k) => {
        console.log(item);
        return (
          <div key={k}>
            <Link to={`${item.id}`}>
              {" "}
              <Card title={item.html} date={item.uploaded} />
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Listt;
