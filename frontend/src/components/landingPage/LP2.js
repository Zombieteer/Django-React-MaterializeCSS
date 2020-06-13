import React from 'react'
import './lp.css'
import Default_user from '../../static/Default-user.png'

export const LP2 = ({ partners, idle }) => {



    return (
        <div className="row">
            <div>
                <span style={{ fontWeight: 'bolder', fontSize: 18 }}>On Task</span>&emsp;
                <span style={{ color: '#69696A' }}>({partners.length - idle} partners)</span>
            </div>
            {partners.map((partner, i) => {
                if (partner.availability_status === "on_task") return (
                    <div className="col l3 s12 m7 cards" >
                        <div className="card" style={{ borderRadius: 10 }}>
                            <div className="card-image" style={partnerImage_div}>
                                <img alt='partner-image' style={partnerImage} src={partner.partner_image ? partner.partner_image : Default_user} />
                            </div>
                            <div className="card-content details_on_card">
                                <h6 style={{ fontSize: 20 }}>{partner.partner_first_name}</h6>
                                <h7 style={{ color: '#69696A' }}>Partner Id: {partner.id}</h7>
                                <h7 style={{ color: '#A5A5A5' }}>Task Completed: </h7>
                            </div>
                            <div className="card-action partner_detail_btn">
                                <button className="on_task_partner_detail_btn" href="#!">Details</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const partnerImage = {
    height: 60,
    width: 60,
    borderRadius: '50%'
}

const partnerImage_div = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20
}

export default LP2