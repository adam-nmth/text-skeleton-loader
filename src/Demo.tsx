import { useEffect, useState } from 'react';
import { SlotMachine } from './SlotMachine';

const ProductSkeleton = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          width: 220,
          height: 180,
          backgroundColor: 'lightgray',
          marginBottom: 8,
          borderRadius: '3px',
          animation: 'glow 2s infinite',
        }}
      ></div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div style={{ marginRight: 16 }}>
          <SlotMachine characterCount={8} fontWeight={'bold'} />
        </div>
        <SlotMachine characterCount={6} fontWeight={'bold'} />
      </div>
      <SlotMachine characterCount={22} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: 12 }}>
          <SlotMachine characterCount={3} fontSize="14px" />
        </div>
        <SlotMachine characterCount={2} fontSize="14px" />
      </div>
    </div>
  );
};

const ProductThumb = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <img
        src="src/assets/pebbs.jpg"
        style={{
          width: 220,
          height: 180,
          borderRadius: '3px',
          marginBottom: 8,
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          fontWeight: 'bold',
        }}
      >
        Mister Pebbles
      </div>
      He is known to be a good boi.
      <div style={{ display: 'flex', flexDirection: 'row' }}>Age: 3</div>
    </div>
  );
};

export const Demo = () => {
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  useEffect(() => {
    finishLoading();
  }, []);

  return (
    <div style={{ display: 'flex', maxWidth: '800px', flexWrap: 'wrap' }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
        <div style={{ marginRight: 32, marginBottom: 16 }} key={i}>
          {isLoading ? <ProductSkeleton /> : <ProductThumb />}
        </div>
      ))}
    </div>
  );
};
