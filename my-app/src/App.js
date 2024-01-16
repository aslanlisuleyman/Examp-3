import {BrowserRouter,Routes,Route} from "react-router-dom"
import MainContext from "./context/context";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import Wishlist from "./pages/Wishlist/Wishlist";
import Add from "./pages/Add/Add";
import Detail from "./pages/Detail/Detail";
import { useEffect, useState } from "react";
import axios from "axios"
import toast from 'react-hot-toast';
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import swal from 'sweetalert2';
function App() {
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState("")
  const[filter,setFilter]=useState([])
  const [wishlist,setWishlist]=useState(localStorage.getItem("wishlists")?JSON.parse(localStorage.getItem("wishlists")):[])
  const [basket,setBasket]=useState(localStorage.getItem("baskets")?JSON.parse(localStorage.getItem("baskets")):[])
  const [homeCounter,setHomeCounter]=useState(localStorage.getItem("counter")? Math.max(0,parseInt(localStorage.getItem("counter"))):0)
  const addBasket =(item)=>{
    const target=basket.find(pro=>pro._id==item._id)
    if(!target){
      const newItem={...item,count:1,totalPrice:item.price}
      setBasket([...basket,newItem])
      localStorage.setItem("baskets",JSON.stringify([...basket,newItem]))
      toast.success("Əlavə olundu")
    } else{
      const newData={...item,count:target.count+1,totalPrice:item.price*(target.count+1)}
      setBasket([...basket.filter(pro=>pro._id != item._id),newData])
      localStorage.setItem("baskets",JSON.stringify([...basket.filter(pro=>pro._id != item._id),newData]))
      toast.success("Əlavə olundu")
    }
  }

const handleInc=(item)=>{
  const updatedata=[...basket]
  const target=updatedata.find(pro=>pro._id==item._id)
  target.count +=1
  target.totalPrice=item.price*target.count
  setBasket(updatedata)
  localStorage.setItem("baskets",JSON.stringify(updatedata))
}
const handleDec = (item) => {
  let updatedata = [...basket];
  let target = updatedata.find(prod => prod._id === item._id);

  if (target.count > 1) {
    setHomeCounter(homeCounter - 1);
    localStorage.setItem("counter", homeCounter - 1);
    target.count -= 1;
    target.totalPrice = item.price * target.count;
    setBasket(updatedata);
    localStorage.setItem("basket", JSON.stringify(updatedata));
  }
   else {
    setHomeCounter(homeCounter - 1);
    localStorage.setItem("counter", homeCounter - 1);
    updatedata = updatedata.filter((prod) => prod._id !== item._id);
    setBasket(updatedata);
    localStorage.setItem("basket", JSON.stringify(updatedata));
  }
};




  const handleDelete=()=>{
    setWishlist([])
    localStorage.removeItem("wishlist")
  }

  const deleteHandler=(id)=>{
    axios.delete(`http://localhost:3007/cards/${id}`).then(res=>{
      setData([...res.data])
      setFilter([...res.data])
    })
  }
  const addWish=(item)=>{
    const target=wishlist.find(items=>items._id==item._id)
    if(target){
      swal.fire({
        title: "xəta!",
        text: "Siz bu məhsulu wishlistə əlavə etmisiniz!",
        icon: "error"
      });
    } else{
      setWishlist([...wishlist,item])
      localStorage.setItem("wishlists",JSON.stringify([...wishlist,item]))
      toast.success("Əlavə olundu")
    }
  }

  const removeWish=(id)=>{
    const target=wishlist.find(item=>item._id==id)
    wishlist.splice(wishlist.indexOf(target),1)
    setWishlist([...wishlist])
    localStorage.setItem("wishlists",JSON.stringify([...wishlist]))
  }

  const handleFilter=()=>{
    setFilter([...data.sort((a,b)=>b.price-a.price)])
  }

  const seacrhHandlerr=(searchValue)=>{
    if(searchValue){
      setFilter([...data.filter(item=>item.name.toLowerCase().trim().includes(searchValue.trim().toLowerCase()))])
    }else{
      setFilter([...data])
    }
  }
  useEffect(()=>{
   axios.get("http://localhost:3007/cards").then(res=>{
    setData(res.data)
    setFilter(res.data)
    setLoading(false)
   }).catch(error=>{
    setLoading(false)
    setError(error)
   })
  },[])
  const datas={
handleFilter,seacrhHandlerr,handleDelete,deleteHandler,addWish,removeWish,data,setData,loading,setLoading,error,setError,
wishlist,setWishlist,basket,setBasket,addBasket,handleInc,handleDec,filter,setFilter
  }
  return (
    <MainContext.Provider value={datas}>
    
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/:id" element={<Detail/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </MainContext.Provider>
    
  );
}

export default App;
