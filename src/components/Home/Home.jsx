import React from 'react'
import {Typography, Image, Layout} from 'antd'
import start_pic from '../../images/starter_picture.png'
import styles from '../../styles/Home.module.css'

const { Title, Paragraph, Text } = Typography;

const Home = () => {
  return (
    <Layout className={styles.layoutStyle}>
      
        <Text className={styles.homeStyle}>Анализ рынка <br/> IT-специалистов</Text>
        <Image src={start_pic} className={styles.imgStyle} preview={false}/>

        
    </Layout>
  )
}

export default Home