'use client'

import { motion } from "framer-motion"

export default function Framer() {

    return (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
            <div className="hover:bg-bondi-50 border rounded-lg w-60 h-32 flex justify-center hover:cursor-pointer" >
            <p className="text-bondi-50 self-center px-5 py-5 font-bold">
                Clique aqui
            </p>
            </div>
        </motion.div>
    )
}





