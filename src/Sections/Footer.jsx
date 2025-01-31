import React from 'react'

const Footer = () => {
    return (
        <section className={'c-space pt-7 pb-3 border-t border-black-300 flex' +
            'justify-between items-center flex-wrap gap-5'}>
            <div className={'text-white-500 flex gap-2 '}>
                <p>
                    &copy; 2024 Khang Le
                </p>
                <p>|</p>
                <p>
                    Special thanks to <a className={'hover:text-white'} href={"https://www.jsmastery.pro"}>Adrian @ Javascript Mastery for the threeJS course</a>
                </p>
            </div>

        </section>
    )
}
export default Footer
