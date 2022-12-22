import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ showModal, setShowModal }) => {

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
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
                        <h2>deu certo</h2>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default Modal;