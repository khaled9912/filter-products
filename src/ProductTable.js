import React,{Component} from 'react';
import PropTypes from 'prop-types'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component{

    render(){
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        let lastCategory = null;
        const rows = [];
        this.props.products.forEach((product)=>{
            if(product.name.indexOf(filterText)==-1){
                return ;
            }
            if(inStockOnly && !product.stocked){
                return ;
            }
            if(product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow
                    key={product.category}
                    category={product.category}/>
                )
            }
            rows.push(
                <ProductRow
                key={product.name}
                product={product}/>
            )
            lastCategory = product.category;
        });
        return (
           <table>
               <thead>
                   <tr>
                   <th>Category</th>
                   <th>Price</th>
                   </tr>
               </thead>
               <tbody>
                   {rows}
               </tbody>
           </table>
        )
    }
}
ProductTable.propTypes = {
    filterText:PropTypes.string.isRequired,
    inStockOnly:PropTypes.bool.isRequired,
}
export default ProductTable;