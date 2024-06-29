import { Button, InputNumber } from "antd"

import { Link, useNavigate } from "react-router-dom"

import { renderStar } from "../../helper/helperFn"

import { FaRegCheckCircle, FaHeart, FaShippingFast } from "react-icons/fa";

const onChange = (value) => {
    console.log('changed', value);
};

const RULE_LIST = [
    { content: '100% chính hãng', icons: FaRegCheckCircle },
    { content: 'Được đổi ý', icons: FaHeart },
    { content: '30 Ngày Trả Hàng Miễn Phí', icons: FaShippingFast }
]

function ProductItemOption({ product }) {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <span className="text-sm py-1 px-2 text-white bg-red-600 rounded-sm">Sản phẩm bán chạy</span>
                <h1 className="my-2 text-xl uppercase font-bold leading-7">{product.productName}</h1>
                <div className="flex gap-1 items-center">
                    {renderStar(product.rating)}
                    <p className="ml-3 text-blue-500 text-sm">{product.numberOfReviews} đánh giá</p>
                </div>
                <p className="py-5 border-b">Thương hiệu: <Link className="text-blue-500" to={`/brand/${product.brand.slug}`}>{product.brand.name}</Link></p>
                <div className="py-3">
                    {/* Giá */}
                    <p className="text-2xl text-red-600 font-bold">{product.price.toLocaleString()} VNĐ</p>
                    {/* Optional tùy chọn */}
                    <div className="my-3">
                        <h6>Các tùy chọn khác:</h6>
                        <ul className="flex gap-3 mt-3">
                            {product.options.map((option, index) => (
                                <li key={index}>
                                    <Button>{option.optionName}</Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Số lượng */}
                    <div className="my-3">
                        <h6>Số lượng:</h6>
                        <div className="mt-3">
                            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                        </div>
                    </div>
                    {/* Mua hoặc thêm vào giỏ hàng */}
                    <div className="my-5">
                        <div className="mt-3 flex gap-3">
                            <Button size="large" onClick={() => navigate('/order?orderId')}>Mua ngay</Button>
                            <Button size="large" type="primary">Thêm vào giỏ hàng</Button>
                        </div>
                    </div>

                    {/* Mục đổi trả, bảo hành */}
                    <div className="my-3">
                        <h6>Đổi trả và bảo hành</h6>
                        <ul className="mt-3">
                            {RULE_LIST.map((item, index) => (
                                <li key={index} className="flex items-center py-2">
                                    <span className="w-[30px]"><item.icons /></span>
                                    <p className="text-sm text-black/80">{item.content}</p>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItemOption