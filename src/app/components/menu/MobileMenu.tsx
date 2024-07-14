import { motion, useCycle } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Navigation } from "./Navigation"
import { useDimensions } from "@/lib/use-dimensions"
import { IconButton } from "@chakra-ui/react"
import { BsMenuAppFill } from "react-icons/bs"
import { MenuToggle } from "./MenuToggle"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const MobileMenu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    useEffect(() => {
        console.log({ isOpen })
    }, [isOpen])
    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="absolute top-0 right-0 bottom-0 w-[300px]"
        >
            <motion.div className="absolute top-0 right-0 bottom-0 w-[300px] bg-white" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    )
}