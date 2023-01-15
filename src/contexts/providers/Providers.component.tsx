import { ConfigProvider } from 'antd'
import { FunctionComponent, ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export const Providers: FunctionComponent<ProvidersProps> = props => {
  const { children } = props
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        {children}
      </ConfigProvider>
    </>
  )
}
