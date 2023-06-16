import './styles.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import api from '../../api/amarilis.api';

function AddProductForm() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');

    const navigate = useNavigate();

    const handleName = (e) => setName(e.target.value);
    const handlePrice = (e) => setPrice(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleSize = (e) => setSize(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = {
            name, price, description, size
        }
        await api.addProduct(product);
        resetForm();
        navigate('/admin/products');
    }

    const resetForm = () => {
        setName('');
        setPrice(0);
        setDescription('');
        setSize('');
    }

    return(
        <form className='add-product-form-container' onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input className='input' id="name" type="text" value={name} onChange={handleName} />
          
            <label htmlFor="price">Preço:</label>
            <input className='input' id="price" type="text" value={price} onChange={handlePrice} />
          
            <label htmlFor="description">Descrição:</label>
            <textarea className='input' id="description" type='text' value={description} onChange={handleDescription} />
          
            <label htmlFor="size">Tamanho:</label>
            <input className='input' id="size" type="text" value={size} onChange={handleSize} />

            <button type="submit">Adicionar produto</button>

        </form>
    );
};

export default AddProductForm;
