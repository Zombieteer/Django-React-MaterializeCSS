import React, { useState } from 'react'
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AddPartnerForm = () => {
    var currentTab = 1
    // console.log(currentTab)
    const [user, setUser] = useState({
        "firstname": '',
        'lastname': '',
        'phone': '',
        'address': '',
        'city': '',
        'phone2': '',
        'salary': 0.00,
        'license': '',
        'availability': '',
        'ex_date': ''
    })

    const setDate = (date) => {
        var absDate = (date.getFullYear() + '-' +
            ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
            ('0' + date.getDate()).slice(-2))
        setUser({ ...user, 'ex_date': absDate })
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const addPartner = (e) => {
        e.preventDefault()
        console.log(user)
        const data = {
            'partner_first_name': user.firstname,
            'partner_second_name': user.lastname,
            'mobile': user.phone,
            'full_address': user.address,
            'city': user.city,
            'emergency_number': user.phone2,
            'salary': user.salary,
            'licsence_number': user.license,
            'expiry_date': user.ex_date,
            'availability_status': user.availability
        }
        axios.post('http://127.0.0.1:8000/api/', data, {
            headers: { 'Content-Type': 'application/json' }
        })
        cancel()
    }
    const cancel = () => {
        currentTab = 1
        document.querySelector('.first-step').style.display = 'block'
        document.querySelector('.second-step').style.display = 'none'
        document.querySelector('.third-step').style.display = 'none'
        document.querySelector('.back_btn').style.display = 'none'
        document.querySelector('.next_btn').style.display = 'block'
        document.querySelector('.submit_btn').style.display = 'none'
        setUser({
            "firstname": '',
            'lastname': '',
            'phone': '',
            'address': '',
            'city': '',
            'phone2': '',
            'salary': '',
            'license': '',
            'ex_date': new Date()
        })
    }

    const next = () => {
        currentTab = currentTab + 1
        console.log(currentTab)
        if (currentTab === 2) {
            document.querySelector('.first-step').style.display = 'none'
            document.querySelector('.second-step').style.display = 'block'
            document.querySelector('.third-step').style.display = 'none'
            document.querySelector('.back_btn').style.display = 'block'
        } if (currentTab === 3) {
            document.querySelector('.first-step').style.display = 'none'
            document.querySelector('.second-step').style.display = 'none'
            document.querySelector('.third-step').style.display = 'block'
            document.querySelector('.next_btn').style.display = 'none'
            document.querySelector('.submit_btn').style.display = 'block'
        }
    }

    const back = () => {
        currentTab = currentTab - 1
        console.log(currentTab)
        if (currentTab === 1) {
            document.querySelector('.first-step').style.display = 'block'
            document.querySelector('.second-step').style.display = 'none'
            document.querySelector('.third-step').style.display = 'none'
            document.querySelector('.back_btn').style.display = 'none'
        } if (currentTab === 2) {
            document.querySelector('.first-step').style.display = 'none'
            document.querySelector('.second-step').style.display = 'block'
            document.querySelector('.third-step').style.display = 'none'
            document.querySelector('.next_btn').style.display = 'block'
            document.querySelector('.submit_btn').style.display = 'none'
        }
    }

    const changeSelected_idle = () => {
        document.querySelector('.idle').setAttribute('checked', 'true')
        document.querySelector('.onDelivery').removeAttribute('checked')
        setUser({ ...user, 'availability': 'idle' })
    }

    const changeSelected_task = () => {
        document.querySelector('.idle').removeAttribute('checked')
        document.querySelector('.onDelivery').setAttribute('checked', 'true')
        setUser({ ...user, 'availability': 'on_task' })
    }

    return (
        <div id="add_partner" className="modal">
            <div className="modal-content" style={{ paddingBottom: 10 }}>
                <form >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20 }}>
                        <span><strong style={{ fontSize: 20 }}>Add Partner</strong></span>
                        <div >
                            <div onClick={changeSelected_idle}>
                                <input className="with-gap idle"
                                    value='Idle'
                                    type="radio"
                                /><span>Idle</span>
                            </div>
                            <div onClick={changeSelected_task}>
                                <input className="with-gap onDelivery"
                                    value='On Delivery'
                                    type="radio"
                                /><span>On Delivery</span>
                            </div>
                        </div>
                    </div>

                    <div className='first-step' style={{ display: 'block' }}>
                        First name<input required placeholder='First name...' value={user.firstname} name='firstname' onChange={onChange}></input>
                        Last name<input required placeholder='Last name...' value={user.lastname} name='lastname' onChange={onChange}></input>
                        Mobile Number<input required placeholder='Mobile Number...' value={user.phone} name='phone' onChange={onChange}></input>
                    </div>
                    <div className='second-step' style={{ display: 'none' }}>
                        Full Address<input required placeholder='Addree...' value={user.address} name='address' onChange={onChange}></input>
                        City<input required placeholder='City...' value={user.city} name='city' onChange={onChange}></input>
                        Emergency Number<input required placeholder='Emergency number...' value={user.phone2} name='phone2' onChange={onChange}></input>
                    </div>
                    <div className='third-step' style={{ display: 'none' }}>
                        Salary<input required placeholder='Salary...' value={user.salary} name='salary' onChange={onChange}></input>
                        License Number<input required placeholder='License Number...' value={user.license} name='license' onChange={onChange}></input>
                        Expiry Date<br /><DatePicker dateFormat="yyyy-MM-dd" selected={new Date()} onChange={setDate} />
                    </div>
                    <div className="modal-footer">
                        <a href="#!" style={{ color: 'black' }} className="modal-close waves-effect waves-green flat-btn" onClick={cancel}>Close</a>
                        <a href="#!" style={{ display: 'none' }} className="waves-green btn back_btn add_btn" onClick={back}>Back</a>
                        <a href="#!" className="waves-effect waves-green btn next_btn add_btn" onClick={next}>Next</a>
                        <a href="#!" style={{ display: 'none' }} className="modal-close waves-effect waves-green btn submit_btn add_btn" onClick={addPartner}>Submit</a>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default AddPartnerForm