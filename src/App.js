import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CreatePost />
      <Post
        user="Steve Jobs"
        userImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/640px-Steve_Jobs_Headshot_2010-CROP.jpg"
        date={new Date().toDateString()}
        text="WOW! What a cool social network."
      />
    </div>
  );
}

function CreatePost() {
  const createPostButtonStyle = {
    backgroundColor: 'white',
    border: '1px solid rgb(0 0 0 / 40%)',
    borderRadius: '4px',
    color: 'black',
    cursor: 'pointer',
    fontSize: '1.1em',
    paddingBlock: '0.2em',
    paddingInline: '0.3em',
  };
  return (
    <button style={createPostButtonStyle}>Create Post +</button>
  );
}

function Navbar() {
  return (
    <nav>
      <h1 style={{ textAlign: 'left' }}>Logo</h1>
    </nav>
  );
}

function Post({ text, user, userImage, date, image }) {
  const postStyle = {
    border: '1px solid rgb(0 0 0 / 23%)',
    maxWidth: '40em',
    margin: 'auto',
    marginTop: '1em',
    marginBottom: '1em',
    padding: '1em',
    borderRadius: '4px',
  };
  const userImageStyle = {
    maxHeight: '64px',
    borderRadius: '4px',
  };
  return (
    <div className="post" style={postStyle}>
      <div className="post-header">
        <div style={{display: 'flex'}}>
          <img src={userImage} alt={user} style={userImageStyle} />
          <div>
          <h4 style={{ textAlign: 'left',margin:'0.5em',marginTop:'0px'}}>{user}</h4>
          <p style={{ textAlign: 'left',margin:'0.5em' }}>{date}</p>
          </div>
        </div>
      </div>
      <div className="post-content">
        <p style={{ textAlign: 'left',margin:'0.5em',marginBottom:'0px'}}>{text}</p>
        {image && <img src={image} alt="Post Image" style={{ maxHeight: '64px' }} />}
      </div>
    </div>
  );
}




export default App;
