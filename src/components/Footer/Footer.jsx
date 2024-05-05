import React from 'react'
import footer_styles from '../../styles/Footer.module.css'
import { Layout } from 'antd'
import {Typography} from 'antd'

const { Title, Paragraph, Text } = Typography;

const Footer = () => {
  return (
        <Layout className={footer_styles.footerStyle}>
            <div class="footer_styles.tStyle">Анализ рынка IT специалистов Tech Trand Tracker</div>
            <div>Выполнено в рамках курсовой работы 2024</div>
            <div>Щедрина Анастасия & Кудрявцева Мария</div>

        </Layout>



    // <Footer className={footer_styles.fStyle}>
    //     <Title level={5} className={footer_styles.tStyle}>Анализ рынка IT специалистов Tech Trand Tracker</Title>
    //     <Text className={footer_styles.tStyle}>Курсовая работа студетнок Кудрявцевой Марии и Щедриной Анастасии</Text>
    // </Footer>
  )
}

export default Footer