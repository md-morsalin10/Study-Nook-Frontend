"use client"
import { motion } from "framer-motion";

const ZoomIn = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            {children}
        </motion.div>
    );
};

export default ZoomIn;