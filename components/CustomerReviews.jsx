"use client"
import ReviewCard from "./ReviewCard" 
import { reviews } from "@/constants" 
import {motion} from "framer-motion"

const fadeUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
}

const fadeUpStagger = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3 * index,
    },
  }),
};


const CustomerReviews = () => {
  return (
    <section className="max-container">
    <motion.div variants={fadeUp} initial="initial" whileInView="animate">
        <h3 className="font-palanquin text-center text-4xl font-bold text-[#B0C4DE]">
        What our <span className="text-[#d4af37]">customers</span> say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
    </motion.div>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
         <motion.div key={review.customerName} variants={fadeUpStagger} initial="initial" whileInView="animate" custom={index} >
           <ReviewCard
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
         </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews