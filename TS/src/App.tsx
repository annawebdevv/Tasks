import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Card, CardVariant } from "./copmonents/Card";
import List from "./copmonents/List";
import { IPost, IUser } from "./types/types";
import { UserItem } from "./copmonents/UserItem";
import { PostItem } from "./copmonents/PostItem";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
  async function fetchPosts() {
    try {
      const response = await axios.get<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      setPosts(response.data);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.primary}
        onClick={() => {
          console.log("click");
        }}>
        <button> Click me </button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={posts}
        renderItem={(post: IPost) => <PostItem post={post} key={post.id} />}
      />
    </div>
  );
}

export default App;
