import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function SearchInput() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [userInput, setUserInput] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = () => {
    setFilteredPosts(
      posts.filter((post) =>
        post.body.toLowerCase().includes(userInput.toLowerCase())
      )
    );

  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        placeholder="Search posts..."
      />
      <button onClick={handleSearch}>Search Post</button>
      {userInput === "" ? (
        <div>
          <h1>All Posts</h1>{" "}
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <h1>Filtered Posts</h1>{" "}
          {filteredPosts.map((post) => (
            <Card key={post.id} post={post} />
          ))}{" "}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
