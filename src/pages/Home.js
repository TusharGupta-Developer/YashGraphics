import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { useNavigate } from "react-router-dom"; // React Router for navigation
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="hero">
            {/* Animated Logo */}
            <motion.img
                src="/logo.png"
                alt="Yash Graphics Logo"
                className="hero-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Animated Heading */}
            <motion.h1
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50, duration: 1.5 }}
            >
                Yash Graphics
            </motion.h1>

            {/* Animated Tagline */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Where Innovation Meets Execution – Delivering Excellence in Design, Precision in Printing, and Speed in Delivery. Empowering Your Vision with Creative Solutions, Premium Quality Materials, and Unmatched Customer Satisfaction. Your One-Stop Destination for All Printing and Design Needs.

            </motion.p>

            {/* Button */}
            <motion.button
                className="hero-button"
                onClick={() => navigate("/products")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                See Products
            </motion.button>
        </div>
    );
};

export default Home;
