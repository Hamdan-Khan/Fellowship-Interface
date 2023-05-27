import React, { useState } from "react";
import { motion } from "framer-motion";

const Task8 = () => {
  const delay = 0.2;
  const [render, setRender] = useState(1);
  return (
    <section
      key={render}
      className="flex flex-col sm:flex-row gap-2 px-5 py-4 items-stretch h-[600px]"
    >
      <div className="flex flex-col sm:w-[50%] p-4 justify-center items-center">
        <motion.h1
          initial={{ opacity: 0.3, y: -200 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold my-3"
        >
          FRAMER MOTION
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.3, y: -200 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl mb-2"
        >
          Animate with ease
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setRender(render + 1)}
          className="border rounded-md my-2 border-black px-10 font-semibold text-xl py-0.5 w-max"
        >
          Animate
        </motion.button>
      </div>
      <div className="flex justify-center items-center relative sm:w-[50%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-[170px] h-[170px] bg-green-500 rounded-[50%] absolute top-[100px] right-[30px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: delay * 1 }}
          className="w-[170px] h-[170px] bg-yellow-500 rounded-[50%] absolute top-[200px] left-[100px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: delay * 2 }}
          className="w-[210px] h-[210px] bg-blue-500 rounded-[50%] absolute top-[300px] right-[120px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: delay * 3 }}
          className="w-[210px] h-[210px] bg-orange-500 rounded-[50%] absolute top-[20px] left-[29px]"
        ></motion.div>
      </div>
    </section>
  );
};

export default Task8;
