import axios from "axios";
import React, { useEffect, useState } from "react";
// import connect from "../util/messgeUtils";
import { Table } from "reactstrap";

export interface Posts {
  id: number,
  body: String,
  title: String,
  userId:number
}

export default function Message () {
  const initialState: Posts[] = [];
  const [post, setpost] = useState(initialState);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      const response = res.data;
      console.log("Res", res.data);
      setpost(response);
      console.log("post", post);
    });
  }, []);

  return (
    <div className="bgimg">

      <div className="middle">
        <h1>Messgae Page ....</h1>

      </div>
      <div className="bottomleft">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {post.map((item, index) => (
              <tr key={item.id} >
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
