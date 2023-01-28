import React from "react";
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ showModal, setShowModal }) => {

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const modalVariants = {
        hidden: { y:'-100vw', opacity: 0 },
        visible: { y: 200, opacity: 1,
            transition: { delay: 0.5 } 
        }
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {
                showModal && (
                    <motion.div className="backdrop"
                        variants={backdropVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        <motion.div className="modal"
                            variants={modalVariants}
                            initial='hidden'
                            animate='visible'
                        >
                            <p>Another one??</p>
                            <Link to="/">
                                <button>OK</button>
                            </Link>
                        </motion.div>
                        
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default Modal;