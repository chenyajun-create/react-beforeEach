'use client'
import { useEffect, useState } from 'react'
import React from 'react'
import { Button, Modal, Form, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'
//#region table相关
//#endregion
type FieldType = {
  password?: string
}
export default function LoginSubmit() {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const onFinish = (values: any) => {
    setConfirmLoading(true)
    setTimeout(() => {
      if (values.password === '666') {
        localStorage.setItem('isLogin', 'true')
        message.success('登录成功！')
        navigate('/management')
        setConfirmLoading(false)
      } else {
        message.warning('密码错误，请重新登录！')
        setConfirmLoading(false)
      }
    }, 300)
  }

  // 在客户端进行模态框的初始化
  useEffect(() => {
    setOpen(true)
  }, [])
  return (
    <>
      <Modal title="Please Login" centered open={open} footer={null} closeIcon={null} maskClosable={false}>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 500 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={confirmLoading} className="bg-blue-500">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
