import './styles.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import api from '../../api/amarilis.api';

function AddProductToCategory () {
    const [categoryName, setCategoryName] = useState('')
    const { productId } = useParams();

    const navigate = useNavigate();

    const handleCategory = (e) => setCategoryName(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.addProductToCategory(categoryName, productId);
        resetForm();
        navigate('/admin/category');
    };

    const resetForm = () => {
        setCategoryName('');
    }

    return(
        <div>
            <form className='add-product-form-container' onSubmit={handleSubmit}>
                <label htmlFor="name">Categoria:</label>
                <input className='input' id="name" type="text" value={categoryName} onChange={handleCategory} />
                <button className='submit-btn' type="submit">Adicionar produto</button>
            </form>    
        </div>
    );
};

export default AddProductToCategory;