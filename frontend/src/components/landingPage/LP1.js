import React from 'react'
import './lp.css'
import AddPartnerForm from './add_partner_form/addPartnerForm'

export const LP1 = ({ partners, idle }) => {

    // getIdle()
    { console.log(5) }

    const deletePartner = () => {

    }

    return (
        <div className="row" style={{ paddingTop: 15 }}>
            <div className="card white" style={{ borderRadius: 10, margin: 0 }}>
                <div className="card-content header_item">
                    <div>

                        <i className="material-icons ass_avatar">assignment_ind</i>
                    </div>
                    <div style={{ flexGrow: 1, alignSelf: 'center', display: 'flex' }}>
                        <div>
                            <ul><li>Total Partners</li><li>On Task</li><li>Idle</li></ul>
                        </div>
                        <div style={{ paddingLeft: 35 }}>
                            <ul><li><strong>{partners.length}</strong></li><li><strong>{partners.length - idle}</strong></li><li><strong>{idle}</strong></li></ul>
                        </div>
                    </div>
                    <div style={{ alignSelf: 'center' }}>
                        <div className='add_del_btn'>
                            <a className="waves-effect waves-light btn modal-trigger add_btn" href="#add_partner">Add Partner</a>
                        </div>

                        <AddPartnerForm />

                        <div className='add_del_btn'>
                            <a className="waves-effect waves-light btn modal-trigger del_btn" href="#delete_partner">Delete Partner</a>
                        </div>

                        <div id="delete_partner" class="modal">
                            <div class="modal-content">
                                <p>Confirm Deletion of partner</p>
                            </div>
                            <div class="modal-footer">
                                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancel</a>
                                <a href="#!" onClick={deletePartner} class="modal-close waves-effect waves-green btn-flat">Delete</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default LP1