import { IoStarSharp } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { renderStar } from "../../helper/helperFn";

function ProductItemRating() {
    const comments = [
        { fullname: 'Minh Quan', rating: 4, isBought: true, comment: 'hàng chính hãng .máy đẹp mượt mà.', image: 'https://img.lazcdn.com/g/ugc/6b74e973fd8343e5a45073c06c7e3af1_853c8ba13d1e4cff80bc818ddaf21987.jpg_200x200q80.jpg_.webp' },
        { fullname: 'Minh Thong', rating: 3.5, isBought: false, comment: 'hàng chính hãng .máy quá tệ.', image: 'https://img.lazcdn.com/g/ugc/6b74e973fd8343e5a45073c06c7e3af1_853c8ba13d1e4cff80bc818ddaf21987.jpg_200x200q80.jpg_.webp' }
    ]

    return (
        <div className="p-5">
            <h2 className="text-xl font-bold mb-3">Đánh giá và nhận xét về sản phẩm</h2>
            <div className="border-b py-3">
                <h1 className="text-3xl flex items-center gap-2"> <span><IoStarSharp color="#f69c08" size={24} /></span> 4.5 / 5</h1>
                <p className="text-black/70 text-sm mt-2">3054 đánh giá</p>
            </div>
            <div>
                {comments.map((comment, index) => (
                    <div key={index} className="border-b py-3">
                        <p className="flex items-center mb-2">{renderStar(comment.rating)}</p>
                        <h1 className="flex justify-between">
                            <span className="flex gap-2">
                                {comment.fullname}
                                <span className="text-green-500 text-sm flex items-center gap-1"><FaCircleCheck /> Chứng nhận đã mua hàng</span>
                            </span>
                            <span className="text-sm">17/06/2024</span>
                        </h1>
                        <p className="text-black/80 text-[14px] mb-2">{comment.comment}</p>
                        <div>
                            <img width={80} src={comment.image} alt={comment.fullname} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductItemRating