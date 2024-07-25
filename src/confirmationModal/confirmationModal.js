import axios from "axios"
import { useEffect } from "react"
import { Button, Modal, ModalBody } from "react-bootstrap"



const ConfirmationModal = ({ ok, cancel, data }) => {
   
    return <>
        <p>Do you want to delete this item?</p>
        <Button onClick={() => {
            ok(data)
        }}>Ok</Button> <Button onClick={() => {
            cancel()
        }}>Cancel</Button>
        {/* <Modal>
            <ModalBody>
                <p>Do you want to delete this item?</p>
                <div>
                    <Button onClick={() => {
                        ok(data)
                    }}>Ok</Button> <Button onClick={() => {
                        cancel()
                    }}>Cancel</Button>
                </div>

            </ModalBody>
        </Modal> */}

    </>
}

export default ConfirmationModal;