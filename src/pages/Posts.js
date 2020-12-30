import React, { useState, useEffect } from "react";

import axios from "axios";

function Posts() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setLoading(true);

    try {
      axios.get(url).then(result => setData(result.data));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        {isError && (
          <div classname="alert alert-danger">Something went wrong...</div>
        )}

        {isLoading ? (
          <div className="alert alert-warning">Loading...</div>
        ) : (
          <ul className="item-list">
            {data.map((item, i) => (
              <li>
                <h4>
                  <span className="text-primary">{item.id}</span>. {item.title}
                </h4>
                <div>User ID: {item.userId}</div>
                <div>Post content: {item.body}</div>
                <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Posts;
