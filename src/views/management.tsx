'use client'

import React from 'react'
import type { ColumnsType } from 'antd/es/table'
import { Space, Card } from 'antd'

export default function App() {
  const cardStyle = {
    width: '80%', // 设置宽度为屏幕宽度的80%
    minWidth: '600px !important',
  }

  return (
    <main
      className="flex min-h-screen  flex-col items-center justify-between"
      style={{
        minWidth: '600px',
      }}
    >
      <Space direction="vertical" style={cardStyle} className="p-24">
        <Card
          title="管理页"
          headStyle={{
            fontSize: '26px',
          }}
        ></Card>
      </Space>
      <div
        style={{
          textAlign: 'center',
          position: 'fixed',
          bottom: '20px',
        }}
      >
        <a
          style={{ color: '#909399', textDecoration: 'none' }}
          href="https://beian.miit.gov.cn/"
          rel="noreferrer"
          target="_blank"
        >
          浙ICP备2023053626号
        </a>
      </div>
    </main>
  )
}
