import { Button } from "antd"
import { useNavigate } from "react-router-dom"

function FlashSaleCountDown() {
    const navigate = useNavigate();

    return (
        <div className="flex-col flex justify-between items-center sm:flex-row gap-3">
            <div className="flex items-center gap-10">
                <h1 className="max-lg:hidden text-red-500 capitalize">Đang được giảm giá</h1>
                <div className="flex gap-5 items-center">
                    <span>Kết thúc sau:</span>
                    <ul className="flex gap-2 items-center">
                        <li>
                            <p className="rounded-md w-[35px] h-[35px] bg-red-600 text-white text-center leading-[35px]">12</p>
                        </li>
                        <li><span>:</span></li>
                        <li>
                            <p className="rounded-md w-[35px] h-[35px] bg-red-600 text-white text-center leading-[35px]">00</p>
                        </li>
                        <li><span>:</span></li>
                        <li>
                            <p className="rounded-md w-[35px] h-[35px] bg-red-600 text-white text-center leading-[35px]">01</p>
                        </li>
                    </ul>
                </div>
            </div>
            <Button onClick={() => navigate('/category/all')}>Xem tất cả sản phẩm</Button>
        </div>
    )
}

export default FlashSaleCountDown