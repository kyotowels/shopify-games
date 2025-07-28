import React, { useState, useRef, useEffect } from "react";
import { Button, Card, Text, Stack, Badge } from "@shopify/polaris";

const SpinWheel = ({ prizes, onWin, onLose }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [hasSpun, setHasSpun] = useState(false);
  const canvasRef = useRef(null);
  const wheelRef = useRef(null);

  const spinWheel = () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    setResult(null);

    // Random spin duration between 3-5 seconds
    const spinDuration = 3000 + Math.random() * 2000;
    
    // Random final angle
    const finalAngle = Math.random() * 360;
    
    // Animate the spin
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / spinDuration, 1);
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentAngle = finalAngle * easeOut;
      
      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${currentAngle}deg)`;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Spin complete
        setIsSpinning(false);
        setHasSpun(true);
        
        // Determine winner based on final angle
        const segmentAngle = 360 / prizes.length;
        const winningIndex = Math.floor((360 - finalAngle) / segmentAngle) % prizes.length;
        const winningPrize = prizes[winningIndex];
        
        setResult(winningPrize);
        
        if (winningPrize.type === 'win') {
          onWin(winningPrize);
        } else {
          onLose();
        }
      }
    };
    
    requestAnimationFrame(animate);
  };

  const resetWheel = () => {
    setHasSpun(false);
    setResult(null);
    if (wheelRef.current) {
      wheelRef.current.style.transform = 'rotate(0deg)';
    }
  };

  return (
    <Card>
      <Stack vertical spacing="loose">
        <Text variant="headingLg" as="h2" alignment="center">
          🎯 Spin to Win!
        </Text>
        
        <div style={{ position: 'relative', width: '300px', height: '300px', margin: '0 auto' }}>
          {/* Wheel */}
          <div
            ref={wheelRef}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3)',
              transition: isSpinning ? 'none' : 'transform 0.1s ease-out',
              position: 'relative',
            }}
          />
          
          {/* Center pointer */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '0',
              height: '0',
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '20px solid #333',
              zIndex: 10,
            }}
          />
        </div>

        {/* Prizes Display */}
        <Stack distribution="fillEvenly">
          {prizes.map((prize, index) => (
            <Badge key={index} status={prize.type === 'win' ? 'success' : 'info'}>
              {prize.label}
            </Badge>
          ))}
        </Stack>

        {/* Action Buttons */}
        <Stack distribution="center">
          {!hasSpun ? (
            <Button
              primary
              onClick={spinWheel}
              disabled={isSpinning}
              loading={isSpinning}
            >
              {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
            </Button>
          ) : (
            <Stack>
              <Button onClick={resetWheel}>
                Spin Again
              </Button>
            </Stack>
          )}
        </Stack>

        {/* Result Display */}
        {result && (
          <Card>
            <Stack vertical spacing="tight" alignment="center">
              <Text variant="headingMd" as="h3">
                {result.type === 'win' ? '🎉 Congratulations!' : '😔 Try Again!'}
              </Text>
              <Text variant="bodyLg" as="p">
                {result.message}
              </Text>
              {result.discount && (
                <Badge status="success">
                  {result.discount}
                </Badge>
              )}
            </Stack>
          </Card>
        )}
      </Stack>
    </Card>
  );
};

export default SpinWheel; 