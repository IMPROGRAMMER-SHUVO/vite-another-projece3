import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReviewItem.css'
import { faRemove, faTrash } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product,handleRemoveFormcart}) => {
    const {img,price,name,id ,quantity}=product
    return (
        <div className="review-item">
            <img src={img} />
            <div className='review-details'>
<p className='product-title'>{name}</p>
<p>price<span className='orange-text'>${price}</span></p>
<p>Quatntity<span className='orange-text'>${quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveFormcart(id)}
            className='btn-delete'>< FontAwesomeIcon className='delet' icon={faTrash} /></button>
        </div>
    );
};

export default ReviewItem;