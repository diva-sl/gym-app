import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-slate-900 p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-while mt-1">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <button className="w-36 bg-green-500 font-medium py-2 rounde">
            <a href="tel:9888888250">Join</a>
          </button>
        </div>
        <div className="font-bold mb-6">Services</div>
        <div className="flex flex-col gap-4">
          <a href="" className="text-sm hover:underline">
            Personl Training
          </a>
          <a href="" className="text-sm hover:underline">
            Body transformation
          </a>
          <a href="" className="text-sm hover:underline">
            Weight Traning
          </a>
        </div>
      </div>
      <div>
        <div className="font-bold mb-6">Company</div>
        <div className="flex flex-col gap-4">
          <Link
            to="/privacy-policy"
            target="_blank"
            className="text-sm hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-and-conditions"
            target="_blank"
            className="text-sm hover:underline"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
      <div>
        <div className="font-bold mb-6">Follow Us</div>
        <div className="text-sm mb-4">sunshinefitness@gmail.com</div>
        <div className="text-sm">9889888952</div>
        <div className="flex gap-4 mt-4">
          <a
            href="https://instagram.com/gravity_fitness99?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            className="hover:scale-110 text-xl"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100094029139147&mibextid=LQQJ4d"
            target="_blank"
            className="hover:scale-110 text-xl"
          >
            <BsFacebook />
          </a>
          <a href="" className="hover:scale-110 text-xl">
            <BsTwitter />
          </a>
          <a href="" className="hover:scale-110 text-xl">
            <BsPinterest />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
