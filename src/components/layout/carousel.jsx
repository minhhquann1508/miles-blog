import React from 'react';
import { Carousel, ConfigProvider } from 'antd';

const listImage = [
    "https://img.lazcdn.com/us/domino/5e35fa549acc632984f944819ecf3631.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/c74e5b04cd82d718aab63d4e67e9e4f8.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/096196627d0fab792c10aa61bf200567.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/d3a7cae4d2dd5c7dbd174b1cb839b3b9.jpg_2200x2200q80.jpg_.webp"
]

function MainCarousel() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Carousel: {
                        arrowSize: 25
                    }
                }
            }}
        >
            <div className="container">
                <Carousel className='shadow-md' autoplay={true} draggable={true} arrows={true} infinite={true}>
                    {listImage.map((item, index) => (
                        <div key={index}>
                            <img className='w-full object-scale-down' height={200} src={item} alt={`carousel-${index}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </ConfigProvider>
    )
}

export default MainCarousel