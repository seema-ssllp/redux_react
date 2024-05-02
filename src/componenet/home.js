import React from 'react'
import { Button, Card, Col, Dropdown, Flex, Row, Upload, items } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Home = () => {
    return (
        <div>
            <div>
                <Flex justify='space-around' gap={"small"} style={{ background: 'pink' }}>
                    <Col ><h4>Header Home Pages is good</h4></Col>
                    <Col ><h4><ShoppingCartOutlined /></h4></Col>

                </Flex>
            </div>


            <Flex gap={"small"} justify="center" vertical>
                <Card justify="center" style={{ width: '30%', marginTop: '20px' }}>
                    <Row >
                        <Col xs={20} sm={17} md={4} lg={4} xl={4}> <img src='https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg' height={40} width={40} /></Col>
                        <Col xs={20} sm={17} md={10} lg={10} xl={10}> <span >I-Phome</span>
                            <span>Prise $ 2000</span></Col>
                        <Col xs={20} sm={17} md={8} lg={8} xl={8}>  <button className='s'>aad to card</button></Col>

                    </Row>
                </Card>

            </Flex>

        </div>
    )
}

export default Home