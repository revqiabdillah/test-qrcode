import React from 'react'
import Head from './Head'

export default function Layout({ children }) {
  return (
    <div className='layout'>
        <div className='header'><Head /></div>
        <div className='main'>
            { children }
        </div>

        <style jsx>
            {`
              .layout {
                display: flex;
                flex-direction: column;
              }

              .main {
                display: flex;
                flex-direction: column;
                padding: 20px;
              }

              .header {
                margin-bottom: 30px;
                border-bottom: 1px solid black;
              }
            
            `}
        </style>

    </div>
  )
}
