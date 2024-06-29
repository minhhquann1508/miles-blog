function ProductItemDescription({ product }) {
    return (
        <div className="p-5">
            <h2 className="text-xl font-bold mb-3">Mô tả sản phẩm</h2>
            <p className="leading-7 font-light">{product.description}</p>
        </div>
    )
}

export default ProductItemDescription