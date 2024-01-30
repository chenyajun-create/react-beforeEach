import React from 'react'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

const App: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    className="min-h-screen"
    extra={
      <Link to="/">
        <Button type="primary" className="bg-blue-500">
          Back Home
        </Button>
      </Link>
    }
  />
)

export default App
