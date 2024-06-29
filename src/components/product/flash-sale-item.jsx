import { useNavigate } from 'react-router-dom'
function FlashSaleItem() {
    const navigate = useNavigate();
    return (
        <div className="hover:border-[#ccc] border-transparent border cursor-pointer" onClick={() => navigate('/product-detail/123')}>
            <div className="h-[188px] mx-auto">
                <img className="w-full h-full object-center" src="https://img.lazcdn.com/g/ff/kf/S5902e2ad8f264790ac80ce1bfce75d07e.png_400x400q80.png_.webp" alt="img" />
            </div>
            <div className="p-2 border-t">
                <h3 className="font-bold line-clamp-1 uppercase text-[15px]">Điện thoại 15 Pro Max 256GB</h3>
                <p className="text-red-600 font-bold">100.000 đ</p>
                <p className="line-through text-xs text-black/50">125.000 đ</p>
            </div>
        </div>
    )
}

export default FlashSaleItem