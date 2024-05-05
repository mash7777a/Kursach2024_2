import React from 'react'
import AppRoutes from '../Routes/Routes'
import Head from "../Header/Header"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar"
import styles from "../../styles/App.module.css"


import { Layout } from 'antd'
const { Sider, Content } = Layout;

const App = () => {
  return (
    <Layout className={styles.layoutStyle}>
        <Head />
        <Layout className={styles.layoutStyle}>
            <Sider theme='light' className={styles.siderStyle}>
                <Sidebar />
            </Sider>
            <Content className={styles.contentStyle}>
                <AppRoutes />
            </Content>
        </Layout>
        
        <Footer />

    </Layout>
  )
}

export default App