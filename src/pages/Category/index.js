import './styles.css'
import { useState, useEffect } from 'react';
import api from '../../api/amarilis.api';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import CardCategory from "../../components/CardCategory/CardCategory";

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.getAllCategories()
        .then((res) => {
            setCategories(res);
        });
    }, []);

    return(
        <div>
            <AdminNavbar />
            <div className='cards-container'> 
                <div className='categories-container'>
                    {categories.map(category => {
                        return(
                            <CardCategory className='category-card' categoryName={category.name} categoryId={category._id} />
                        )           
                    })}
                </div>
            </div>
        </div>
    );
};

export default Categories;
