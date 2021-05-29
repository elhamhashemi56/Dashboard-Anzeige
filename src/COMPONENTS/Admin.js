import React, {useState} from "react";
import './newProdukt.css'
import axios from 'axios'

const NewProdukt =()=>{
    const [file,setFile]= useState("")
    const [state, setState] = useState({
        name: "",
        price: "",
        description: "",
        SuccessMessage:""
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };


    const handleChangeImage = (e) => {
        const profilImage=e.target.files[0]
        console.log('profilImage',profilImage);
        setFile(profilImage)
    };

    const handleSend = () => {
        if (state.name.length && state.price.length && state.description.length && file ) {
            const payload = {
                name: state.name,
                price: state.price,
                description: state.description,
                file:file
            };
            console.log(payload);

            axios
                .post(`http://localhost:5000/product`, payload)
                .then((response) => {
                    console.log("response",response);
                    localStorage.setItem("product_name", response.data.name);
                    localStorage.setItem("product_price", response.data.price);
                    localStorage.setItem("product_description", response.data.description);
                    localStorage.setItem("product_image", response.data.image);

                    if (response.status === 201) {
                        setState((prevState) => ({
                            ...prevState,
                            SuccessMessage:
                                "New Procuct successful.",
                        }));

                    } else {
                        alert("Some error occurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert("Please enter all inputs");
        }
    };


    return(
        
        <div className='home'>
        <div  className="container" id="container">   
            
                <form action="#" >
                    <h3>New Product</h3>
                
                    <input
                     type="text"
                     placeholder="Product Name"
                     id="name"
                     value={state.name}
                     onChange={handleChange}
                     
                     />

                    <input
                     type="text"
                     placeholder="Price"
                     id='price'
                     value={state.price}
                     onChange={handleChange}
                     
                     />

                    <input
                     type="text"
                     placeholder="Description"
                     id='description'
                     value={state.description}
                     onChange={handleChange}
                     
                     />

                    <input
                     type="file"
                     placeholder="Image"
                     id='files'
                     name='image'
                     onChange={handleChangeImage}
                     
                     />
                    
                    <button onClick={handleSend}>S E N D </button>
                </form>
            </div>
        </div>
   

    )
}

export default NewProdukt