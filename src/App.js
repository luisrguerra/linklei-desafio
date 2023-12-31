import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css" integrity="sha512-LX0YV/MWBEn2dwXCYgQHrpa9HJkwB+S+bnBpifSOTO1No27TqNMKYoAn6ff2FBh03THAzAiiCwQ+aPX+/Qt/Ow==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <Navbar />
      <button style={createPostButtonStyle} onClick={handleShow}>Criar Post +</button>
      <Post
        user="Steve Jobs"
        userImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg/640px-Steve_Jobs_Headshot_2010-CROP.jpg"
        date={new Date().toDateString()}
        text="WOW! What a cute dog."
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cute_dog.jpg/640px-Cute_dog.jpg"
      />
      <Modal id="ModalDialog" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar postagem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className='mb-3'>
        <Form.Label>Autor do post:</Form.Label>
        <Form.Control
          type="text"
          required
        />
        </Form.Group>
        <Form.Group className='mb-3'>
        <Form.Label>Categoria:</Form.Label>
        <Form.Select>
          <option value="post">Post</option>
          <option value="article">Artigo</option>
          <option value="group">Grupo</option>
        </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Texto:</Form.Label>
          <Form.Control as="textarea" rows={4} required />
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Descartar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Publicar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <h3 style={{ textAlign: 'left' }}>Rede Social</h3>
    </nav>
  );
}

function Post({ text, user, userImage, date, image }) {
  const userImageStyle = {
    maxHeight: '64px',
    borderRadius: '4px',
  };
  return (
    <div className="post">
      <div className="post-header">
        <div style={{display: 'flex'}}>
          <img src={userImage} alt={user} style={userImageStyle} />
          <div>
          <h4 style={{ textAlign: 'left',margin:'0.5em',marginTop:'0px'}}>{user}</h4>
          <p style={{ textAlign: 'left',margin:'0.5em' }}>{date}</p>
          </div>
          <Dropdown className="postOptions" as={ButtonGroup}>
            <Dropdown.Toggle variant="light" id="dropdown-split-basic"></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Editar</Dropdown.Item>
              <Dropdown.Item>Excluir</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="post-content">
        <p style={{ textAlign: 'left',margin:'0.5em',marginBottom:'0px'}}>{text}</p>
        <img src={image} alt="Post" style={{ maxWidth: '79vw',marginTop:'0.5em',borderRadius: '3px' }} />
      </div>
    </div>
  );
}

export default App;
