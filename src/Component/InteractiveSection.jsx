import { useState } from 'react';
import { motion } from 'framer-motion';

const HeartAnimation = () => {
  const heartVariants = {
    pulsate: {
      scale: [1, 1.7, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  

  return (
    <motion.div
      className="text-red-500 absolute top-0 left-0 ml-2 mt-2"
      variants={heartVariants}
      initial="pulsate"
      animate="pulsate"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.586l-1.414-1.415a4 4 0 00-5.657 5.657L12 21.243l7.071-7.071a4 4 0 10-5.657-5.657L12 4.586z"
        />
      </svg>
    </motion.div>
  );
};

const MessageCard = ({ title, message }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="bg-blue-300 p-4 rounded-lg shadow-md cursor-pointer text-center mx-auto my-4 "
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{message}</p>
    </motion.div>
  );
};

const SpecialContent = () => {
    const [showContent, setShowContent] = useState(false);
  
    const toggleContent = () => {
      setShowContent(!showContent);
    };
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-6"
      >
        <button
          onClick={toggleContent}
          className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md cursor-pointer my-2 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        >
          Click to Discover More!
        </button>
        {showContent && (
          <p className="text-lg mt-4 px-5">
            Where is my party !... Chalo chalo ab birthday bhi manalo baaki sb mere pass rhne do cause mujhe bolne ka chance aise hi milega thoda thoda ...saamne me to chance hi nhi milta :) 
            {/* Add your personalized message here */}
          </p>
        )}
      </motion.div>
    );
  };

const InteractiveSection = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);


    const messages = [
        {
          title: "Heartfelt Wishes",
          message: "May your birthday be filled with love, laughter, and all the happiness in the world.",
        },
        {
          title: "Unforgettable Memories",
          message: `From the first time we met, to all the fun adventures and moments we've had together, like studying, walking, and traveling on trains. Even the simple act of eating together holds a special place in my heart.

          All those times we've spent, each smile, each laugh, they've become precious memories that I cherish. Your company has painted my world with joy, and I hold these memories dear. ❤️`,
        },
        {
            title: "Your Unique Appearance",
            message: "Your small eyes with the Doraemon face make me happy, and your appearance matters to me more than words can express.",
          },
        {
          title: "Forever Smiles",
          message: "I just want to see your big smile forever and always. Your smile lights up my world.",
        },
        {
            title: "Success and Happiness",
            message: "May you continue to succeed in all that you do and find happiness in every moment. I have no doubt that family will always be there to support you, Trust your heart, and don't worry about what others say.",
          },
        
      ];

      const handleNextClick = () => {
        const nextIndex = (currentMessageIndex + 1) % messages.length;
        setCurrentMessageIndex(nextIndex);
      };
  return (
    <section className="py-8 relative bg-gradient-to-b from-yellow-200 to-pink-400">
      <div className="text-center">
        <HeartAnimation />
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Happy Birthday, Iram!❤️  ( gosshh.. naam le liya .....hahaha)</h2>
        <p className="text-lg md:text-lg mb-6 text-center text-black-800 ">
          On your special day, I wanted to let you know how much you mean to me (Spacially for me).
        </p>
        <p className="text-lg mb-6">
          Your presence brings joy to my life, and every moment spent with you is a treasure.
        </p>
        <p className="text-lg mb-6">
          I hope this small gesture brightens your day and reminds you of the amazing person you are.
        </p>
        <div className="text-center mx-auto max-w-md ">
          <MessageCard title={messages[currentMessageIndex].title} message={messages[currentMessageIndex].message} />
        <button
          onClick={handleNextClick}
          className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md cursor-pointer my-2 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        >
          Click Next Message 
        </button>
        </div>

        <HeartAnimation />
        <SpecialContent />
        <HeartAnimation />
        
        <p className="text-lg mt-8 px-5 md:text-lg">
          I have too many more amazing moments and memories together. Happy Birthday, Iram! I know you are laughing but Your smile right now tells me I'm on the right track to achieving my goal—to make you happy, that's it.
        </p>
      </div>
    </section>
  );
};

export default InteractiveSection;
