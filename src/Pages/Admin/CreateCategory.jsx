import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal } from 'antd';

//compoenr
import Form from "../../Component/Form";

const CreateCategory = () => {


  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const { data } = await axios.post("https://daraz-api.onrender.com/api/v1/category/create-category", { name });
        if (data?.success) {
           console.log(name);
           getAllCategories();
        }else{
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
  };
 

  const handleDelete = async(id) =>{

    try {
      const {data} = await axios.delete(`https://daraz-api.onrender.com/api/v1/category/delete-category/${id}`);
      if(data.success){
        console.log('this item is delete');
        getAllCategories();
      }else{
        console.log(data.message);
      }
    } catch (error) { 
       console.log(error.message);
    }

  }

  const updateCategories = async(id) =>{

    try {
      const data = await axios.put(`https://daraz-api.onrender.com/api/v1/category/delete-category/${id}`);
      if(data.success){

      }
    } catch (error) {
      
    }

  }

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
      "https://daraz-api.onrender.com/api/v1/category/categories"
    );
 
      if (data?.success) {
        setCategories(data?.categories);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }; 
  

  useEffect(() => {
    getAllCategories();

  }, []);

  return (
    <div>

     <Form handleSubmit={handleSubmit} value={name} setValue={setName}   />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">categories</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories?.map((ctg, index) => {
            return (
              <React.Fragment key={ctg._id}>
                <tr>
                  <td>{ctg.name}</td>
                  <td>
                    <button className="btn btn-warning me-2" onClick={()=>setIsModalOpen(true)}>Edit</button>
                    <button className="btn btn-danger me-2" onClick={()=>handleDelete(ctg._id)} >delete</button>
                  </td>
                 
                </tr>
              
              </React.Fragment>
              
            );
          })}
          
        </tbody>
      </table>
      <Modal title="Basic Modal" open={isModalOpen} onCancel={() =>{setIsModalOpen(false)}}>
        <Form />
      </Modal>
    </div>
  );
};

export default CreateCategory;
