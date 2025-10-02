import React, { useRef, useEffect } from 'react';

export default function MusicPrompt({ play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));
    }
  }, [play]);

  return (
    <audio ref={audioRef} src="/audio/hsyn_algsmy.mp3" loop />
  );
}
