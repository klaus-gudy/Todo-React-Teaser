import axios from 'axios';
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
  

  const handleSubmit = (e, id) => {
    e.preventDefault();//prevents browser loads during submission
    //console.log(title)

    //new post
    const newTodo = {

      title: formdata.title,
      description: formdata.description,
      completed: false,
      created: new Date().toLocaleString(),
      lastUpdated: new Date().toString()
    };

    

    axios.post(`https://dev.hisptz.com/dhis2/api/dataStore/madadi/${id}`, newTodo, {auth:{username:'admin', password:'district'}}).then(
      (res) => {
        console.log('Post request successful:', res.data);
        onAddPost(newTodo);
        setFormdata({
          title: '',
          description: ''
        }); //clear the value after submission

      }
    ).catch((error) => {console.error('tatizo', error);});


    };

  return (
    <div>
      <h2>Add Task</h2>
      <form className="mb-4" onSubmit={handleSubmit} >
        <input type="text" className="border border-gray-300 p-2 mb-2" name="title" value={title} onChange={handleChange} placeholder='title'/>
        <br></br>
        <input type="text" className="border border-gray-300 p-2 mb-2" name="description" value={description} onChange={handleChange} placeholder='description'/>
        <br></br>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">submit</button>
      </form>
    </div>
  )
}

export default Addtodo