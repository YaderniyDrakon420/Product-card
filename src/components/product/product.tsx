import './product.css'
import cart from '../../assets/cart.png'

const Prod = (obj: {Image: string; Title: string; Price: string}) => {
    return (
    <div className="card">
            <img src={obj.Image} alt="Book" />
            <div className="card-body">
                <div className="card-title">{obj.Title}</div>
                <div className="review-link">
                    <span>Залишити відгук</span>
                </div>
                <div className="price-and-cart">
                    <div className="price">{obj.Price}</div>
                    <img className="cart-icon" src={cart} alt="cart" />
                </div>
                <div className="smart">Безкоштовна доставка</div>
            </div>
        </div>
    )
}

export default Prod