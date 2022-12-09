import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ImageModel1 from "../photos/Model1.png";
import CardItem from '../components/CardItem/CardItem';
import { Container, CardContainer, CardWrapper, ServicesCard } from '../components/Services/ServicesElemets';
const data = [
    {
        title: "Cham1",
        text: "the best one",
        image: ImageModel1,
        price: 715,
    },
    {
        title: "Cham1",
        text: "the best one",
        image: ImageModel1,
        price: 715,
    },
    {
        title: "Cham1",
        text: "the best one",
        image: ImageModel1,
        price: 715,
    },
    {
        title: "Cham1",
        text: "the best one",
        image: ImageModel1,
        price: 715,
    },
];



const Catalog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <CardContainer>
             

                <CardWrapper>

                    {data.map(({ title, text, image, price }, idx) => (
                        <CardItem
                            title={title}
                            text={text}
                            imageSrc={image}
                            price={price}
                            id={idx}
                        />
                    ))}

                </CardWrapper>

            </CardContainer>
        </>
    );
};

export default Catalog;
