import './styles.css'
import { useState, useEffect } from 'react';
import api from '../../api/amarilis.api';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';
import Card from "../../components/Card/Card";

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
            <div className='categories-container'>
                {categories.map(category => {
                    return(
                        <Card className='category-card' categoryName={category.name} categoryId={category._id} categoryRoute={'category'}/>
                    )           
                })}
            </div>
        </div>
    );
};

export default Categories;
