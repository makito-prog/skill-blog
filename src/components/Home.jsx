import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });
  const [allThreads, setAllThreads] = useState([]); // スレッドデータ用のステート

  // スレッドデータを取得する関数
  const getAllThreads = async () => {
    try {
      let response = await axios.get("/api/threads"); // APIエンドポイントにGETリクエスト
      console.log("Data fetched:", response.data);
      setAllThreads(response.data); // ステートを更新してデータを保存
    } catch (err) {
      console.log("Error fetching threads:", err);
    }
  }

  // コンポーネントがマウントされた時にスレッドデータを取得
  useEffect(() => {
    getAllThreads();
  }, []);

  // フォームの入力値を管理する関数
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  return (
    <div>
      <h1>Welcome to My Tech Blog</h1>
      <form>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            name="title" 
            value={newBlog.title} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea 
            name="content" 
            value={newBlog.content} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <button type="submit">Add Blog Post</button>
      </form>
      <div className="blog-posts">
        {allThreads.map((thread) => ( // 取得したスレッドデータを表示
          <div key={thread._id}>
            <h2>{thread.title}</h2>
            <p>{thread.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
