import React, {useState} from 'react'
import {useRef} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState(
        {
            name: '',
            email: '',
            message: ''

        }
    );
    const [loading, setLoading] = useState(false);
    const handleChange = ({target:{name,value}}) => {
        setForm({...form,[name]:value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await  emailjs.send ("service_0qmjr7d",
                "template_w5twbbh",
                {
                    from_name: form.name,
                    to_name: "Tony",
                    from_email: form.email,
                    to_email: "lehoaikhang8699@gmail.com",
                    message: form.message,
                },
                'IeXcQFs3cw5aYd3EL')
            setLoading(false);
            setForm ({
                name: '',
                email: '',
                message: ''
            })
            alert('"Yay! A new connection has been forged! Can’t wait to get to know you better—hope you\'re as awesome as this notification feels. 🚀 ' );

        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Ahh, something went wrong. Please try again.');
        }
    }
    return (
        <section className={'c-space my-20'}>
            <div className={'relative min-h-screen flex ' +
                'items-center justify-center flex-col'}>

                <img  className={'absolute inset-0 min-h-screen'} src={'assets/terminal.png'} alt={'terminal'}/>
                <div className={'contact-container'}>
                    <h3 className={'head-text'}>
                        Contact Me
                    </h3>
                    <p className={'text-lg text-white-600'}>
                        lorem ipsum dolor sit amet
                    </p>
                    <form ref={formRef} onSubmit ={handleSubmit} className={'mt-12 flex flex-col space-y-7'}>

                        <label className={'space-y-3'}>
                            <span className={'field-label'}>
                                Full Name
                            </span>
                            <input type={'text'}
                                   name={'name'}
                                   value={form.name}
                                   onChange={handleChange}
                                   required
                                   className={'field-input'}
                                    placeholder={'King Arthur'}
                            />
                        </label>
                        <label className={'space-y-3'}>
                            <span className={'field-label'}>
                                Email
                            </span>
                            <input type={'email'}
                                   name={'email'}
                                   value={form.email}
                                   onChange={handleChange}
                                   required
                                   className={'field-input'}
                                   placeholder={'Excalibur@Camelot.com'}/>

                        </label>
                        <label className={'space-y-3'}>
                            <span className={'field-label'}>
                                Message
                            </span>
                            <textarea rows={5}
                                      name={'message'}
                                      value={form.message}
                                      onChange={handleChange}
                                      required
                                      className={'field-input'}
                                      placeholder={'Hear yee hear yee...'}/>
                        </label>
                        <button type={'submit'} className={'field-btn'} disabled={loading} >
                            {loading?"Sending...":"Send Message"}
                            <img className={'field-btn_arrow'} src={'assets/arrow-up.png'} alt={'arrow'}/>
                        </button>

                    </form>

                </div>

            </div>

        </section>
    )
}
export default Contact
