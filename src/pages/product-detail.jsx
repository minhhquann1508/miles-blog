import { Breadcrumb } from 'antd';
import { Fragment } from 'react';
import ProductItemImages from '../components/product/product-item-img';
import ProductItemOption from '../components/product/product-item-option';
import ProductItemDescription from '../components/product/product-item-desc';
import ProductItemRating from '../components/product/product-item-rating';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getDetailProductApi } from '../apis/product';

function ProductDetailPage() {
    const { productId } = useParams();

    const fetchDetailProduct = async (productId) => {
        const res = await getDetailProductApi(productId);

        return res.data;
    }

    const { isLoading, data } = useQuery({
        queryKey: ['product-detail', productId],
        queryFn: ({ queryKey }) => fetchDetailProduct(queryKey[1])
    });

    if (isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <Fragment>
                <div className='container py-8'>
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: 'Trang chủ',
                                href: '/',
                            },
                            {
                                title: 'Chi tiết sản phẩm',
                                href: '/category/all',
                            },
                            {
                                title: `${data.product.productName}`,
                            },
                        ]}
                    />
                    <main className='mt-3'>
                        <div className='flex justify-between gap-10 bg-white p-5'>
                            <div className='w-[50%]'><ProductItemImages product={data.product} /></div>
                            <div className='flex-grow'><ProductItemOption product={data.product} /></div>
                        </div>
                        <div className='bg-white mt-5'>
                            <ProductItemDescription product={data.product} />
                        </div>
                        <div className='bg-white mt-5'>
                            <ProductItemRating product={data.product} />
                        </div>
                    </main>
                </div>
            </Fragment>
        )
    }
}

export default ProductDetailPage