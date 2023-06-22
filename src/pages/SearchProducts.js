import RecipeLink from "../components/RecipeLink";
import ErrorPage from "./ErrorPage";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import apiControl from '../controls/apiControl'

function SearchResults() {

  const [searchProducts, setSearchProducts] = useState([]);

  const { search } = useParams();

  useEffect(() => {
    apiControl.getProductByName(search)
          .then((response) => {
              setSearchProducts(response);
          });
  }, [search]);


  return search.strProduct ?(
    <>
        <h2 className='page-title'>NOSSOS PRODUTOS</h2>
            <div className="search-products-page">  
                {searchProducts.map(product => {
                    return (
                        <RecipeLink key={product.idProduct} productIMG={product.strProductThumb} productName={product.strProduct} idProduct={product.idProduct} />
                    )
                })}
            </div>
    </>
): <ErrorPage/>;
};

export default SearchResults;
