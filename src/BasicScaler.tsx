import { lorem } from './constants';

const letterListStyle = (scrollSpeed: number) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  animation: `slotScroll ${scrollSpeed}s infinite linear` /* Continuous scroll */,
  transition: 'transform 0.5s ease-in-out',
});

const getRandomNr = () => Math.floor(Math.random() * (800 - 100 + 1)) + 100;

// TODO: add logic to start texts from random letter, so it doesnt look so uniform on start
// TODO: fix margin between letters
const SlotMachineWord = ({ word }: { word: string }) => {
  return (
    <div className="slot-container">
      <div style={letterListStyle(getRandomNr()) as React.CSSProperties}>
        {[...word, ...word].map((char, index) => (
          <div className="letter" key={index}>
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SlotMachine() {
  return (
    <>
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
      <SlotMachineWord word={lorem} />
    </>
  );
}
