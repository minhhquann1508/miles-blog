import { Fragment } from "react"
import Title from "../components/layout/title"
import FlashSale from "../components/product/flash-sale"
import FlashSaleCountDown from "../components/product/flash-sale-clock"
import ListProduct from "../components/product/list-product"
import { getAllProductApi } from "../apis/product"
import { useQuery } from "@tanstack/react-query"

function HomePage() {
    const fetchListProduct = async () => {
        const res = await getAllProductApi();

        return res.data;
    };

    const listProductQuery = useQuery({
        queryKey: ['list-product'],
        queryFn: fetchListProduct
    })

    return (
        <Fragment>
            <div className="container py-8">
                <Title>Flash sale</Title>
                <div className="bg-white shadow-sm">
                    <div className="p-5 border-b">
                        <FlashSaleCountDown />
                    </div>
                    <div className="mt-2">
                        <FlashSale />
                    </div>
                </div>
            </div>
            <div className="container py-8">
                <Title>Sản phẩm dành cho bạn</Title>
                <div className="mt-2">
                    <ListProduct query={listProductQuery} />
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage