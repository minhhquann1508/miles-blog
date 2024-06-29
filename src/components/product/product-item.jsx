import { useNavigate } from "react-router-dom";

import { renderStar } from "../../helper/helperFn";

function ProductItem({ product }) {
    const navigate = useNavigate();

    const priceAfterDiscount = product.discount > 0 ? product.price - (product.price * product.discount) / 100 : product.price;

    return (
        <div className="hover:border-[#ccc] border-transparent border cursor-pointer bg-white" onClick={() => navigate(`/product-detail/${product._id}`)}>
            <div className="h-[188px] mx-auto">
                <img className="w-full h-full object-scale-down" src={product.thumbnail} alt={product.productName} />
            </div>
            <div className="p-2 border-t">
                <span className="bg-red-600 text-xs text-white px-1 rounded-sm">Sản phẩm bán chạy</span>
                <h3 className="mt-1 font-bold line-clamp-1 uppercase text-[15px]">{product.productName}</h3>
                <p className="text-red-600 font-bold">{priceAfterDiscount.toLocaleString()}</p>
                {product.discount > 0 && <p className="line-through text-xs text-black/50">{product.price.toLocaleString()} đ</p>}
                <p className="flex gap-0.5 mt-0.5 items-center">
                    {renderStar(product.rating)}
                    <span className="text-[12px] text-black/60">({product.numberOfReviews})</span>
                </p>
            </div>
        </div>
    )
}

export default ProductItem