import React, { useContext } from 'react'
import { useFormik } from 'formik';
import MainContext from '../../context/context';
import axios from "axios"
import toast from 'react-hot-toast';
import {Helmet} from "react-helmet";
const Add = () => {
    const{filter,deleteHandler}=useContext(MainContext)
    const formik = useFormik({
        initialValues: {
          image: '',
          name: '',
          desc: '',
          price:''
        },
        onSubmit: (values,{resetForm} )=> {
            if(!values.name || !values.image|| !values.desc || !values.price ){
                toast.error("Zəhmət olmasa boşluqları doldurun")
                return;
            }
            axios.post("http://localhost:3007/cards",{...values}).then(res=>{
                console.log(res)
                resetForm()
                toast.success("Əlavə olundu")
            })
          
        },
      });
      return (
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Add-Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

 <form style={{paddingTop:'30px'}} onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">İmage</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          <label htmlFor="lastName"> Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlFor="email">Desc</label>
          <input
            id="desc"
            name="desc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.desc}
          />
          <label htmlFor="lastName">Price</label>
          <input
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <button type="submit">Submit</button>
        </form>

         <div style={{marginTop:'60px'}}>
        

 <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Desc</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {filter.map((item,index)=>{
        return(

           <tr key={index}>
      <td>{item._id.slice(0,5)}</td>
      <td>
        <img style={{width:'45px',height:'45px'}} src={item.image} alt="" />
      </td>
      <td>{item.name}</td>
      <td>{item.desc}</td>
      <td>{item.price}</td>
      <td style={{ padding: '15px' }}> <button onClick={()=>{
                      deleteHandler(item._id)
                    }}>Delete</button> </td>
    </tr>  
        )
    })}
   
    
  </tbody>
</table>

         </div>
       



        </div>
       
      );
}

export default Add