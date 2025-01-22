import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import GpsLogo from './GPSTOTECHv2.svg';
import { useState, useEffect } from 'react';

const Container = styled.div`
  background-color: #F5F6FA;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const LogoWrapper = styled(motion.div)`
  width: 200px;
  height: auto;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }
`;

const LoadingBar = styled(motion.div)`
  width: 200px;
  height: 3px;
  background: #E0E0E0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin-top: 0.5rem;
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #1676FF;
  transform-origin: left;
`;

const TipContainer = styled(motion.div)`
  margin-top: 1rem;
  text-align: center;
  max-width: 320px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 4rem;
`;

const TipHeading = styled(motion.h3)`
  color: #000000;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.5rem;
`;

const TipText = styled(motion.p)`
  color: #4B5563;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  margin: 0;
  margin-top: 0.5rem;
`;

const tips = [
  {
    id: 1,
    text: "Python is the easiest programming language to learn"
  },
  {
    id: 2,
    text: "LinkedIn Assessment badges can boost your profile visibility by 20%"
  },
  {
    id: 3,
    text: "GitHub's resume generator can create a portfolio from your repositories"
  },
  {
    id: 4,
    text: "Personality tests like MBTI can help identify suitable tech roles"
  },
  {
    id: 5,
    text: "Stack Overflow's annual survey can guide your tech career choices"
  },
  {
    id: 6,
    text: "Online coding assessments are used by 89% of tech companies"
  }
];

const LoadingPage = () => {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 10000); // Change tip every 10 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <LogoWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={GpsLogo} alt="GPS to Tech Logo" />
      </LogoWrapper>
      <LoadingBar
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ProgressBar
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </LoadingBar>
      <TipContainer>
        <TipHeading>Did you know...</TipHeading>
        <AnimatePresence mode="wait">
          <TipText
            key={currentTip}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {tips[currentTip].text}
          </TipText>
        </AnimatePresence>
      </TipContainer>
    </Container>
  );
};

export default LoadingPage; 