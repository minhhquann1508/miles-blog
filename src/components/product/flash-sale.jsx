import FlashSaleItem from './flash-sale-item';

function FlashSale() {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-1'>
            {new Array(6).fill(null).map((el, index) => (
                <FlashSaleItem key={index} />
            ))}
        </div>
    )
}

export default FlashSale