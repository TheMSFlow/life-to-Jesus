import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AfterAudio from './AfterAudio';
import BeforeAudio from './BeforeAudio';

const LyricsPlayer = ({ audioSrc, lyricsData, highlightColor = 'black', className, userStatus }) => {
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  const [isAudioEnded, setIsAudioEnded] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [userHasChosen, setUserHasChosen] = useState(false); 
  const audioRef = useRef(null);
  const lyricsContainerRef = useRef(null);
  const activeLyricRef = useRef(null);

  const navigate = useNavigate;

  useEffect(() => {
    if (!userHasChosen) {
      const timeoutId = setTimeout(() => {
        startAudio(true); // Automatically play with sound off
      }, 5000);
  
      return () => clearTimeout(timeoutId); // Cleanup timeout
    }
  }, [userHasChosen]); // Run effect again if userHasChosen changes
  
  

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      const currentTime = audio.currentTime;

      // Find the current lyric index based on the time
      const index = lyricsData.findIndex(
        (lyric) => lyric.start !== undefined && currentTime >= lyric.start && currentTime <= lyric.end
      );

      // Update state if the index changes
      if (index !== currentLyricIndex) {
        setCurrentLyricIndex(index);
      }
    };

    // Attach the event listener
    audio.addEventListener('timeupdate', handleTimeUpdate);

    // Cleanup event listener
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentLyricIndex, lyricsData]);

  useEffect(() => {
    const scrollToActiveLyric = () => {
      if (activeLyricRef.current && lyricsContainerRef.current) {
        const container = lyricsContainerRef.current;
        const activeLyric = activeLyricRef.current;

        const containerHeight = container.offsetHeight;
        const lyricOffsetTop = activeLyric.offsetTop;
        const lyricHeight = activeLyric.offsetHeight;

        // Scroll smoothly to center the active lyric
        container.scrollTo({
          top: lyricOffsetTop - containerHeight / 2 + lyricHeight / 2,
          behavior: 'smooth',
        });
      }
    };

    // Add a 1-second delay before scrolling to the next lyric
    const scrollTimeout = setTimeout(scrollToActiveLyric, 1000);
    return () => clearTimeout(scrollTimeout);
  }, [currentLyricIndex]);

  const getLyricStyle = (isActive) => {
    if (isActive) {
      return {
        color: highlightColor,
        fontWeight: 'bold',
        transform: 'scale(1.025)',
        transformOrigin: 'top center',
        transition: 'transform 0.3s ease, color 0.3s ease',
      };
    } else {
      return {
        color: isAudioPlaying ? '#666' : '#0A0A0A',
        transform: 'scale(1)',
        transformOrigin: 'top center',
        transition: 'transform 0.3s ease, color 0.3s ease',
      };
    }
  };

  const startAudio = (mute = false) => {
    const audio = audioRef.current;
    audio.muted = mute;
    audio.play();
    setIsAudioPlaying(true);
    setIsAudioEnded(false);

      // Save the mute preference in local storage
    localStorage.setItem('soundPreference', mute ? 'off' : 'on');
    setUserHasChosen(true);
  };

  const handleSoundOn = () => {
    startAudio(false);
  }

  const handleSoundOff = () => {
    startAudio(true);
  }

  const handleReplay = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;

    if (lyricsContainerRef.current) {
      lyricsContainerRef.current.scrollTo({
        top: 0,
        behavior: 'auto', // Instant scroll for immediate visibility
      });
    }
    
    // Retrieve the sound preference from local storage
  const soundPreference = localStorage.getItem('soundPreference');
  const isMuted = soundPreference === 'off';

  // Use the startAudio function with the retrieved preference
  startAudio(isMuted);
  };

  const handleFinish = () => {
    userStatus();
    navigate('/finish');
  }

  useEffect(() => {
    const audio = audioRef.current;
  
    const handleMuteChange = () => {
      // Save the mute preference in local storage whenever it changes
      localStorage.setItem('soundPreference', audio.muted ? 'off' : 'on');
    };
  
    // Listen for the mute/unmute action
    audio.addEventListener('volumechange', handleMuteChange);
  
    // Cleanup the event listener
    return () => {
      audio.removeEventListener('volumechange', handleMuteChange);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div
          ref={lyricsContainerRef}
          className={`${
            isAudioPlaying ? 'bg-lyrics' : 'bg-fair-black'
          } rounded-3xl p-4 ${className}`}
          style={{ overflow: 'hidden', position: 'relative' }}
        >
          <div className="font-garamond text-2xl md:text-3xl lg:text-4xl text-center relative">
            {lyricsData.map((lyric, index) => {
              // Check if it's a space
              if (lyric.text === '') {
                return <p key={`space-${index}`}>&nbsp;</p>;
              }

              // Render regular lyrics
              return (
                <p
                  key={index}
                  ref={index === currentLyricIndex ? activeLyricRef : null}
                  style={getLyricStyle(index === currentLyricIndex)}
                >
                  {lyric.text}
                </p>
              );
            })}
          </div>

          {!isAudioPlaying && (
            <BeforeAudio 
            handleSoundOn={handleSoundOn}
            handleSoundOff={handleSoundOff}
            />
          )}

          {isAudioEnded && (
            <AfterAudio 
            handleFinish={handleFinish}
            handleReplay={handleReplay}
            />
          )}
        </div>
        <audio
          ref={audioRef}
          controls={isAudioPlaying}
          src={audioSrc}
          className="mb-4 w-full"
          onEnded={() => {
            setIsAudioEnded(true);
            setIsAudioPlaying(false);
          }}
          disabled
        />
      </div>
    </>
  );
};

export default LyricsPlayer;
