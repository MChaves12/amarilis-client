import './styles.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import api from '../../api/amarilis.api';

function CreateCategory () {
    const [name, setName] = useState('');

    const handleName = (e) => setName(e.target.value);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const category = {
            name
        }
        await api.addCategory(category);
        resetForm();
        navigate('/admin/category');
    };

    const resetForm = () => {
        setName('');
    };



    return(
        <div>
            <AdminNavbar />
            <div className='category-crud'>
                <form className='add-category-form-container' onSubmit={handleSubmit}>
                    <label htmlFor="name">Nome:</label>
                    <input className='input' id="name" type="text" value={name} onChange={handleName} />

                    <button className='submit-btn' type="submit">Criar categoria</button>

                </form>
            </div>
        </div>    
    );
};

export default CreateCategory