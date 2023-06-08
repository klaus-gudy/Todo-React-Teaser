import React, {useState} from 'react'

function Addtodo({onAddPost}) {
  const [formdata, setFormdata] = useState({
    title: '',
    description: ''
  });
  const { title, description } = formdata;
  // const [description, setDescription] = useState('');
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();//prevents browser loads during submission
    //console.log(title)
    onAddPost(formdata)
    setFormdata({
      title: '',
      description: ''
    }); //clear the value after submission
    };

  return (
    <div>
      <h2>Add Blog Post</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="title" value={title} onChange={handleChange} placeholder='title'/>
        <br></br>
        <input type="text" name="description" value={description} onChange={handleChange} placeholder='description'/>
        <br></br>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Addtodo