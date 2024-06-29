import { Fragment, useState } from "react"
import { Button, Form, Select, Input, Radio, Space, Breadcrumb } from 'antd';
import { FaCreditCard } from "react-icons/fa";

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function OrderPage() {
    const [radioValue, setRadioValue] = useState(1);
    const onChangeRadio = (e) => {
        console.log('radio checked', e.target.value);
        setRadioValue(e.target.value);
    };

    return (
        <Fragment>
            <div className="container py-8">
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
                            title: 'Tên của sản phẩm',
                        },
                    ]}
                />
                <div className="flex-col mt-5 flex gap-5 justify-between xl:flex-row">
                    {/* Phần bên trái chứa thông tin địa chỉ */}
                    <div className="w-full xl:w-[50%] bg-white p-5 shadow-sm rounded-md">
                        <h3 className="text-lg mb-5">Thông tin giao hàng</h3>
                        <Form
                            layout="vertical"
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Họ tên"
                                name="fullname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập họ tên!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Số điện thoại"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập số điện thoại!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Địa chỉ giao hàng"
                                name="address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập địa chỉ giao hàng!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Tỉnh - Thành phố">
                                <Select placeholder="Tỉnh - Thành phố">
                                    <Select.Option value="tphcm">TP.Hồ Chí Minh</Select.Option>
                                    <Select.Option value="hanoi">Hà Nội</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button size="large" type="primary" htmlType="submit">
                                    Lưu địa chỉ
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    {/* Phần bên phải chứa thông tin thanh toán */}
                    <div className="flex-grow bg-white p-5 shadow-sm rounded-md">
                        <h3 className="text-lg mb-3">Chọn phương thức thanh toán</h3>

                        {/* Phần option phương thức thanh toán */}
                        <div className="py-3 flex justify-center sm:justify-normal">
                            <Radio.Group onChange={onChangeRadio} value={radioValue}>
                                <Space direction="vertical">
                                    <Radio
                                        value={1}
                                        style={{ borderRadius: 5, border: '0.5px solid #ccc', padding: 20, width: '100%' }}
                                    >
                                        <div className="flex items-center gap-5">
                                            <span>Thanh toán với ZaloPay</span>
                                            <img width={20} src="https://img.lazcdn.com/g/tps/tfs/TB10rN4lnM11u4jSZPxXXahcXXa-1024-1024.png" alt="" />
                                        </div> </Radio>
                                    <Radio
                                        value={2}
                                        style={{ borderRadius: 5, border: '0.5px solid #ccc', padding: 20, width: '100%' }}
                                    >
                                        <div className="flex items-center gap-5">
                                            <span>Thanh toán khi nhận hàng</span>
                                            <FaCreditCard color="#535bf2" size={20} />
                                        </div> </Radio>
                                </Space>
                            </Radio.Group>
                        </div>

                        {/* Phần thông tin đơn hàng */}
                        <h3 className="text-lg mb-5">Thông tin đơn hàng</h3>
                        <ul className="flex flex-col gap-5 items-center sm:items-start">
                            <li className="flex justify-between w-full">
                                <span>Tạm tính</span>
                                <span>29.500.000 đ</span>
                            </li>
                            <li className="flex justify-between w-full">
                                <span>Phí vận chuyển</span>
                                <span>16.000 đ</span>
                            </li>
                            <li className="flex justify-between w-full border-t py-3">
                                <span>Tổng cộng:</span>
                                <span className="text-orange-600 text-lg">29.606.500 đ</span>
                            </li>
                            <li className="flex justify-between w-full">
                                <Button className="w-full" size="large" type="primary">Đặt hàng</Button>
                            </li>
                        </ul>

                        {/* Thong tin san pham mua */}
                        <div className="mt-5">

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default OrderPage