import './styles.css'
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar';

function CreateProductPage() {
    return(
        <div>
            <AdminNavbar />
            <div className="account-page-container">
                <AddProductForm />
            </div>
        </div>
    );
};

export default CreateProductPage;
