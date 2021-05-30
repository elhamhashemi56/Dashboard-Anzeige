import React, {useEffect, useState} from "react";
import './newProdukt.css'
import axios from 'axios'
import {useHistory, useParams} from "react-router-dom";

const EditProdukt = () => {

    const {productId} = useParams()
    const [file, setFile] = useState()// blob
    const history = useHistory();
    const [state, setState] = useState({
        _id: "",
        name: "",
        price: "",
        description: "",
        SuccessMessage: ""
    });

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKENDURL}/product/edit/${productId}`).then(res => {
            setState(state => ({
                _id: res.data._id,
                name: res.data.name,
                price: res.data.price,
                description: res.data.price,
            }))
        }).catch(err => {
            console.log(err);
        });
    }, [])

    const handleChange = (e) => {
        const {id, value} = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };


    const handleChangeImage = (e) => {
        const profilImage = e.target.files[0]
        console.log('profilImage', profilImage);
        setFile(profilImage)
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (state.name.length && state.price.length && state.description.length && file) {

            const formData = new FormData()
            formData.append("name", state.name);
            formData.append("price", state.price);
            formData.append("description", state.description);
            formData.append("image", file);

            axios
                .put(`${process.env.REACT_APP_BACKENDURL}/product/${state._id}`, formData)
                .then((response) => {
                    history.push("/produkt")
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            alert("Please enter all inputs");
        }
    };


    return (

        <div className='home'>
            <div className="container" id="container">

                <form action="#">
                    <h3>Edit Product</h3>

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
                        onChange={handleChangeImage}
                    />

                    <button onClick={handleSend} className='buContainer'>S E N D</button>
                </form>
            </div>
        </div>


    )
}

export default EditProdukt
