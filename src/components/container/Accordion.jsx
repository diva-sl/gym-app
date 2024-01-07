import React, {useState} from "react";
import {BsChevronDown } from "react-icons/bs";
import {motio,AnimatePresence} from "framer-motion";

const Accordion = ({id,title,des}) => {
    const [activeIndex,setActiveIndex] = useState(null);
    const handleClick = (id) => {
        setActiveIndex(id=== activeIndex ? null:id);
    };
    return (
        <div className="pb-8 cursor-pointer" id="teacher"  onClick={() => handleClick(id)}>
 <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronDown
          className={`${
            id === activeIndex ? "rotate-180" : "rotate-0"
          } cursor-pointer transition-all duration-300`}
         
        />
      </div>
       <AnimatePresence>
       {id === activeIndex && (
         <motion.div
           initial={{ height: 0 }}
           animate={{ height: "auto" }}
           exit={{ height: 0 }}
           transition={{ duration: 0.3 }}
           style={{ overflow: "hidden" }}
           className="pt-4"
         >
           <p className="text-sm leading-7 text-white">
           {des}
           </p>
         </motion.div>
       )}
     </AnimatePresence>
   </div>
    );
};