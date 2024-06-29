import { useState } from "react"

function ProductItemImages({ product }) {
    const [activeImg, setActiveImg] = useState(product.images[0]);

    const changeActiveImage = (img) => {
        setActiveImg(img);
    }

    return (
        <div>
            <div className="mx-auto w-[500px] h-[500px]">
                <img className="w-full h-full object-center" src={product.thumbnail} alt={activeImg} />
            </div>
            <ul className="flex gap-2">
                {product.images.map((image, index) => (
                    <li key={index} onClick={() => changeActiveImage(image)} className={`${activeImg === image && 'border-blue-600 border'} `}><img src={image} alt={`img-${index}`} /></li>
                ))}
            </ul>
        </div>
    )
}

export default ProductItemImages