import React from 'react'
import {Typography, Image, Layout} from 'antd'
import start_pic from '../../images/starter_picture.png'
import styles from '../../styles/Home.module.css'

import {SunOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography;
const categories_list  = ['США','Индия', 'Германия', 'СНГ'];

const Home = () => {
  return (
    <Layout className={styles.layoutStyle}>
      
        <Text className={styles.homeStyle}>Анализ рынка <br/> IT-специалистов</Text>
        <Image src={start_pic} className={styles.imgStyle} preview={false}/>
        
        {/* <Text> Выберите желаемый регион</Text>
        <Text>
                    <ul className={styles.decorationStyle}>
                        {categories_list.map((name) => (
                            <li
                                class={styles.linkStyle}
                                key={name}
                                onClick={() => onClickCategory(name)}
                                className={value === name ? 'active' : ''}>
                                {/* <FolderTwoTone  className={styles.linkStyle}/> */}
                                {/* <SunOutlined />
                                <NavLink to={`/region/${name}`} className={styles.linkStyle}> {name}</NavLink>
                                
                            </li>
                        ))}
                    </ul>
                </Text> */}

        
    </Layout>
  )
}

export default Home