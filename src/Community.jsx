import React, { useState } from "react";
import "./Community.css";

// Sample community posts (20 shown, can extend to 30)
const initialPosts = [
  {
    id: 1,
    user: "Anita Sharma",
    avatar: "https://i.pravatar.cc/100?img=5",
    text: "Ward 3 residents organized a cleanliness drive near the temple. 🌸",
    image: "https://images.unsplash.com/photo-1524492449090-9c17f8f54c1d?auto=format&fit=crop&w=800&q=60",
    likes: 12,
    comments: []
  },
  {
    id: 2,
    user: "Ravi Kumar",
    avatar: "https://i.pravatar.cc/100?img=12",
    text: "Streetlight in Green Park finally fixed after our collective petition 🙏",
    image: "https://images.unsplash.com/photo-1604671801904-0a7cf90e1e1e?auto=format&fit=crop&w=800&q=60",
    likes: 8,
    comments: []
  },
  {
    id: 3,
    user: "Seema Patel",
    avatar: "https://i.pravatar.cc/100?img=47",
    text: "Children in Ward 6 painted rangoli around pothole repairs – spreading joy 💐",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    likes: 21,
    comments: []
  },
  {
    id: 4,
    user: "Ajay Verma",
    avatar: "https://i.pravatar.cc/100?img=22",
    text: "Massive pothole near College Road needs urgent fixing. 🚧",
    image: "https://images.unsplash.com/photo-1612296720050-bc0d2f9b3919?auto=format&fit=crop&w=800&q=60",
    likes: 30,
    comments: []
  },
  {
    id: 5,
    user: "Fatima Khan",
    avatar: "https://i.pravatar.cc/100?img=36",
    text: "Overflowing sewage in Ward 10 is making life difficult. 🚱",
    image: "https://images.unsplash.com/photo-1580207923184-08855efc3ec6?auto=format&fit=crop&w=800&q=60",
    likes: 14,
    comments: []
  },
  {
    id: 6,
    user: "Deepak Singh",
    avatar: "https://i.pravatar.cc/100?img=18",
    text: "Streetlights in Industrial Area still not repaired 😡",
    image: "https://images.unsplash.com/photo-1604081516009-5036a0a8c1c8?auto=format&fit=crop&w=800&q=60",
    likes: 17,
    comments: []
  },
  {
    id: 7,
    user: "Priya Nair",
    avatar: "https://i.pravatar.cc/100?img=33",
    text: "Thanks to Ward 5 officers for quick pothole repair 🙌",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=60",
    likes: 42,
    comments: []
  },
  {
    id: 8,
    user: "Rahul Mehta",
    avatar: "https://i.pravatar.cc/100?img=41",
    text: "Sewage water flooding in Ward 2 has become unbearable.",
    image: "https://images.unsplash.com/photo-1584448097741-03f1b0f3a5f2?auto=format&fit=crop&w=800&q=60",
    likes: 19,
    comments: []
  },
  {
    id: 9,
    user: "Suman Joshi",
    avatar: "https://i.pravatar.cc/100?img=7",
    text: "Streetlight outage near the bridge is dangerous for pedestrians.",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60",
    likes: 26,
    comments: []
  },
  {
    id: 10,
    user: "Manoj Gupta",
    avatar: "https://i.pravatar.cc/100?img=15",
    text: "Community youth filled potholes with temporary fixes! 👏",
    image: "https://images.unsplash.com/photo-1602810311561-69c1aef1d879?auto=format&fit=crop&w=800&q=60",
    likes: 33,
    comments: []
  }
  // 👉 Add up to 20–30 posts similarly
];

function Community() {
  const [posts, setPosts] = useState(initialPosts);
  const [showComments, setShowComments] = useState({});

  // Like handler
  const handleLike = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  // Toggle comments
  const toggleComments = (id) => {
    setShowComments({ ...showComments, [id]: !showComments[id] });
  };

  // Add comment
  const handleAddComment = (id, text) => {
    if (!text.trim()) return;
    setPosts(posts.map(p => 
      p.id === id ? { ...p, comments: [...p.comments, text] } : p
    ));
  };

  return (
    <div className="community">
      <h2>🌿 Community Voices</h2>
      {posts.map(post => (
        <div className="postCard" key={post.id}>
          <div className="postHeader">
            <img src={post.avatar} alt={post.user} className="avatar" />
            <span className="username">{post.user}</span>
          </div>
          <p className="postText">{post.text}</p>
          {post.image && <img src={post.image} alt="post" className="postImage" />}
          
          {/* Actions */}
          <div className="actions">
            <button onClick={() => handleLike(post.id)}>👍 Like ({post.likes})</button>
            <button onClick={() => toggleComments(post.id)}>💬 Comment ({post.comments.length})</button>
          </div>

          {/* Comment Section */}
          {showComments[post.id] && (
            <div className="commentsSection">
              {post.comments.map((c, i) => (
                <p key={i} className="comment">💭 {c}</p>
              ))}
              <CommentInput onSubmit={(text) => handleAddComment(post.id, text)} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Comment input box
function CommentInput({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="commentForm">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Write a comment..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Community;
