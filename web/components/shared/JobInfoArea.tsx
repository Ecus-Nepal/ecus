import AppliedUserHolder from "components/EmployerDash/AppliedUserHolder";
import { Dispatch, SetStateAction, useState } from "react";
import { HiX } from "react-icons/hi";
import Modal from "react-modal";
import style from "../scss/shared/JobsInfoArea.module.scss";
import ActionBtn from "./ActionBtn";
import ChatContainer from "./ChatContainer";
import DetailedProfile from "./DetailedProfile";
interface Props {
    title: string,
    setInfoShow: Dispatch<SetStateAction<boolean>>,
    type: "employer" | "employee"
}

Modal.setAppElement('#__next');

const JobInfoArea: React.FC<Props> = ({ title, setInfoShow, type }) => {

    const [showModal, setShowModal] = useState(false)
    const [selectedClient, setSelectedClient] = useState<string | null>(null)

    const handleProfileClick = () => {
        setShowModal(true)
    }

    const [newClients, setNewClients] = useState([
        "Jon Mayer",
        "Mix Man",
        "A Name"
    ])
    const [acceptedClients, setAcceptedClients] = useState([
        "Max Mofo",
        "Joji Club",
        "Coffee"
    ])

    const onAccept = (name: string) => {
        setAcceptedClients(prev => prev.concat(name))
        setNewClients(prev => prev.filter(client => client !== name))

    }

    const onReject = (name: string) => {
        setNewClients(prev => prev.filter(client => client !== name))
    }

    return (
        <>
            <div className={style.jobInfoArea} >
                <button type="button" className={style.closeInfoButton}
                    onClick={() => setInfoShow(false)}
                >
                    <HiX />
                </button>
                <div className={style.container} >
                    <div className={style.jobInfo}>
                        <span className="highlight bold" >{title}</span>
                        <p>
                            In publishing and graphic design,
                            Lorem ipsum is a placeholder text
                            commonly used to demonstrate the
                            visual form of a document or a
                            typeface without relying on meaningful
                            content. Lorem ipsum may be used
                            as a placeholder before final
                            copy is available
                        </p>
                        <div>
                            Salary: Rs 20,200
                        </div>

                        {
                            type === "employer" &&
                            <>
                                <h3>New Clients</h3>
                                <div className={style.appliedUsers} >

                                    {
                                        newClients.map(client => (
                                            <AppliedUserHolder
                                                profilePic={"sda"}
                                                name={client}
                                                onClick={handleProfileClick}
                                                onReject={() => onReject(client)}
                                                onAccept={() => onAccept(client)}
                                            />
                                        ))
                                    }

                                </div>
                                <div className={style.acceptedClient} >
                                    <h3>Accepted Clients</h3>
                                    <ul>
                                        {
                                            acceptedClients.map((client, i) => (
                                                <li
                                                    onClick={() => setSelectedClient(client)}
                                                    key={i}>{client}</li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </>
                        }

                    </div>
                    <div>
                        {
                            selectedClient &&
                            <ChatContainer header={selectedClient} />
                        }
                        {
                            !selectedClient &&
                            <h2>No name Selected</h2>
                        }
                    </div>
                </div>
            </div>



            {
                type === "employer" &&
                <Modal
                    isOpen={showModal}
                    className={style.profileModal}
                    onRequestClose={() => setShowModal(false)}
                    shouldCloseOnOverlayClick={true}
                    style={
                        {
                            overlay: {
                                background: "rgba(0,0,0,0.7)"
                            }
                        }
                    }
                >
                    <DetailedProfile
                        wantedCats={["Web dev", "Content Wriring"]}
                    />
                    <ActionBtn type="button" action="bad" onClick={() => setShowModal(false)} >
                        Close
                    </ActionBtn>
                </Modal>}
        </>
    )
}

export default JobInfoArea
