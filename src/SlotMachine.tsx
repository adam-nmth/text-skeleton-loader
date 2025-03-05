import { memo } from 'react';
import { motion } from 'framer-motion';
import { lorem } from './constants';

const letterListStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  willChange: 'transform',
};
const getRandomNr = () => Math.floor(Math.random() * (15 - 2 + 1)) + 2;
const splittedText = lorem.split('');
const shiftArray = (arr: string[], n: number) => {
  const length = arr.length;
  const shift = n % length;
  return [...arr.slice(shift), ...arr.slice(0, shift)];
};

const SlotMachineWord = memo(({ textArr }: { textArr: string[] }) => {
  return (
    <div className="slot-container">
      <motion.div
        style={letterListStyle as React.CSSProperties}
        animate={{ y: ['0%', '-100%'] }}
        transition={{
          duration: getRandomNr(),
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {textArr.map((char, index) => (
          <div className="letter" key={index}>
            {char}
          </div>
        ))}
      </motion.div>
    </div>
  );
});

type Props = {
  characterCount: number;
  fontSize?: string;
  fontWeight?: string | number;
};

export const SlotMachine = memo(
  ({ characterCount, fontSize = '16px', fontWeight = 'normal' }: Props) => {
    const arr = Array.from({ length: characterCount }, (_, index) => index);

    return (
      <div
        style={{
          fontSize,
          fontWeight,
        }}
      >
        {arr.map((x) => (
          <SlotMachineWord
            textArr={shiftArray(splittedText, getRandomNr())}
            key={`slotMachine_${getRandomNr()}_${x}`}
          />
        ))}
      </div>
    );
  }
);
