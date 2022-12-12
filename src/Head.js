import React from 'react'
import Link from 'next/link'
const menu = [
    'scan1',
    'scan2',
    'scan3',
    'scan4',
    'scan5',
    'scan6'
];

export default function Head() {
  return (
    <div className="list">
        {
            menu.map((item, key) => (
                <Link className="link" key={key} href={`/${item}`} passHref>
                    <a className='link' style={{ padding: 10 }}>{item}</a>
                </Link>
            ))
        }

        <style jsx>
            {`
             .list {
                display: flex;
                flex-direction: row;
                width: 70%;
                margin: 0 auto;
             }

             .link {
                font-size: 16px;
                font-weight: bold;
                min-width: 50px;
                margin: 10px;
             }
            
            `}
        </style>

    </div>
  )
}
