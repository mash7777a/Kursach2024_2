import React from 'react'
import { ROUTES } from '../../utils/toutes'
import {Link} from 'react-router-dom'
import {Typography, Menu} from 'antd'
import header_styles from '../../styles/Header.module.css'
import { Header } from 'antd/es/layout/layout'
import sun_logo from '../../images/sun-svgrepo-com.svg'
import {FolderTwoTone,SunOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography;

const items1 = [
    
    {key: 'Главная страница', label: 'Главная страница'},
    {key: 'Главная страница', label: 'Главная страница'},
    {key: 'Главная страница', label: 'Главная страница'},
    // label: 'Главная страница',
    // 'Главная страница', 
    // 'Калькулятор зарплаты'
    ];

const Head = () => {
  return (
    <Header className={header_styles.headerStyle}>
        <Link to={ROUTES.HOME} className={header_styles.logostyle}>
            {/* <img src={sun_logo} alt="logo" width="40" height="40"/> */}
            <SunOutlined />
            {/* <svg xmlns={sun_logo} width="40" height="40"></svg> */}
         </Link>

        <Text className={header_styles.titleStyle}>
            Tech Trand Tracker
        </Text>
        <Text className={header_styles.tStyle}>
            <Text className={header_styles.pStyle}>
                <Link to={ROUTES.HOME} className={header_styles.linkStyle}>Главная страница</Link>
            </Text>
            <Text className={header_styles.pStyle}>
                <Link to={ROUTES.HOME} className={header_styles.linkStyle}>Калькулятор зарплаты</Link>
            </Text>
        </Text>


        <div>



        </div>


         {/* <Link to={ROUTES.HOME} >
                Главная страница1
        </Link> */}

        <Menu className={header_styles.pStyle} mode="horizontal" item={items1}>
            {/* <Link to={ROUTES.HOME} >
                <Title level={5} className={header_styles.titleStyle}>Главная страница</Title>
            </Link>
            <Link to={ROUTES.HOME} >
                <Title level={5} className={header_styles.titleStyle}>Калькулятор зарплаты</Title>
            </Link>  */}
        </Menu>



    </Header>
  )
}

export default Head