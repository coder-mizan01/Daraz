import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [brand,setBrand] = useState("");
  const [quantity, setQuantity] = useState("");


   

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("title", title);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      productData.append("subcategory", subcategory);
      productData.append("brand",brand)
      const { data } = await axios.post(
        "https://daraz-api.onrender.com/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
          console.log('product is creatd');
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>

      <div className="mt-3">
        <label className="btn btn-outline-secondary col-md-12">
          {photo ? photo.name : "upload photo"}
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            hidden
          />
        </label>
      </div>

      <div className="mt-3">
        {photo && (
          <div>
            <img
              src={URL.createObjectURL(photo)}
              alt=""
              className="img-fluid"
            />
          </div>
        )}
      </div>

      <div className="mt-3">
        <input
          type="text"
          value={category}
          placeholder="write a category"
          className="form-control w-100"
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <input
          type="text"
          value={subcategory}
          placeholder="write a subcategory"
          className="form-control w-100"
          onChange={(e) => setSubCategory(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <input
          type="text"
          value={brand}
          placeholder="write a brand"
          className="form-control w-100"
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <input
          type="text"
          value={title}
          placeholder="write a title"
          className="form-control w-100"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <input
          type="text"
          value={description}
          placeholder="write a description"
          className="form-control w-100"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <input
          type="number"
          value={price}
          placeholder="write a price"
          className="form-control w-100"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>


      <div className="mt-3">
        <input
          type="number"
          value={quantity}
          placeholder="write a quantity"
          className="form-control w-100"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      

      <div className="mt-3">
      <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
      </div>


    </>
  );
};

export default CreateProduct;
