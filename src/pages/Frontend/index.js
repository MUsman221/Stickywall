import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Select } from 'antd';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../Frontend/Home'
import Today from './Today';
import Upcoming from './Upcoming';
// import List from './List';
import Personal from './List/Personal';
import Work from './List/Work';

export default function Index() {
  const navigate = useNavigate()
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [list, setList] = useState("personal")


  return (
    <>
      <div className="container" style={{ paddingTop: "100px", width: "150vh" }}>
        <div className="row">
          <div className="col">
            <div >
              <Layout style={{ borderRadius: 30, height: "80vh" }}>
                <Sider trigger={null} collapsible collapsed={collapsed} style={{ border: "1px solid black", borderRadius: 30 }}>
                  <div className="demo-logo-vertical" />
                  <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      color: "white",
                      fontSize: '16px',
                      width: 64,
                    }}
                  />
                  <Menu
                    onClick={({ key }) => {
                      if (key === "signout") {
                        // sign Out Function
                      } else {
                        navigate(key)
                      }
                    }}

                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ border: "1px solid #001529", borderRadius: "30px", paddingTop: "10px" }}
                    items={[
                      {
                        label: "Menu",
                        className: "fs-3"

                      },
                      {
                        label: "Task",
                        className: "fs-5"
                      },
                      {
                        // key: '1',
                        label: 'UpComing',
                        key: "/upcoming"

                      },
                      {
                        key: '/today',
                        label: 'Today',
                      },
                      {
                        key: '/',
                        label: 'Sticky Wall',
                      },
                      {
                        label: "List",
                        className: "fs-5"
                      },

                      {
                        key: '/personal',
                        label: 'Personal  ',
                      },
                      {
                        key: '/work',
                        label: 'Work  ',
                      },
                      {
                        key: 'signout',
                        label: 'Sign Out  ',
                      },


                    ]}

                  />
                </Sider>
                <Layout style={{ border: "1px solid white", borderRadius: "50px" }}>
                  <Header
                    style={{
                      padding: 0,
                      background: "#edede9",
                      border: "1px solid white ", borderRadius: "50px"
                    }}
                  >
                    <h1 className='px-3'>Sticky Wall</h1>
                  </Header>
                  <Content
                    style={{
                      margin: '24px 16px',
                      padding: 24,
                      minHeight: 280,
                      background: "#edede9",
                      overflow: "scroll"
                    }}
                  >
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/today' element={<Today />} />
                      <Route path='/upcoming' element={<Upcoming />} />
                      <Route path="/personal" element={<Personal />} />
                      <Route path="/work" element={<Work />} />
                    </Routes>
                  </Content>
                </Layout>
              </Layout>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}


