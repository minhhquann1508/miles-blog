import { Skeleton } from 'antd';
import ProductItem from '../product/product-item';

function ListProduct({ query }) {
    const { isPending, data } = query;

    if (isPending) {
        return (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3'>
                {new Array(18).fill(null).map((el, index) => (
                    <Skeleton key={index} active />
                ))}
            </div>
        )
    } else {
        return (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3'>
                {data.products.map((product) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </div>
        )
    }
}

export default ListProduct