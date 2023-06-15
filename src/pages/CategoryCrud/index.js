import './styles.css'
import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import api from '../../api/amarilis.api';

function CategoryCrud() {
    const [category, setCategory] = useState();

    const [name, setName] = useState('');

    const handleName = (e) => setName(e.target.value);

    const { categoryName, categoryId } = useParams();
    const navigate = useNavigate();

    const fetchCategory = useCallback(async () => {
        const categoryFromDB = await api.getCategoryByName(categoryName);
        console.log(categoryFromDB);
        setCategory(categoryFromDB);
        setName(categoryFromDB.name);
    }, [categoryName]);


    const deleteCategory = async () => {
        await api.removeCategory(categoryId);
        navigate('/admin/categories');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.editCategory({name});
        navigate('/admi/categories');
    };

    useEffect(() =>{
        fetchCategory()
    }, [fetchCategory]);

    return(
        <div>
            <AdminNavbar />
            <div className='category-crud'>
                {category && (
                            <form className='category-form-container' onSubmit={handleSubmit}>
                                <label htmlFor="name">Nome da Categoria:</label>
                                <input className='input' id="name" type="text" value={name} onChange={handleName} />
                                <div className='form-btns-container'> 
                                    <Link className='edit-btn' to='/admin/categories'>
                                        <button className='edit-btn-content'>Voltar</button>
                                    </Link>
                                    <button className='submit-btn' type="submit">Confirmar</button>
                                    <button className='delete-btn' onClick={deleteCategory}>Remover</button>
                                </div>      
                            </form>                  
                    )}        
            </div>
        </div>
    );
};

export default CategoryCrud;
