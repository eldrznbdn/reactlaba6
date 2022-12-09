import React from 'react';
import {Card,Button} from 'antd';

const {Meta} = Card;

const CardItem = ({title='No title',text,imageSrc,price}) => {
  return (
    <Card 
    hoverable
    style={{width:250,borderRadius: "10px"}}
    cover={
    <img style={{borderRadius:"10px"}} alt="example" src={imageSrc} />
    }
    >
    <Meta title={title} description={text}/>
    </Card>
  )
}

export default CardItem;
