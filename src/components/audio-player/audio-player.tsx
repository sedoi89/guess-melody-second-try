import {Fragment, useState, useEffect, useRef} from "react";

type AudioPlayerProps = {
  isPlaying: boolean;
  src: string;
  onPlayClick: () => void;
}

const AudioPlayer = ({isPlaying, src, onPlayClick}: AudioPlayerProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);


  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current !== null) {
      audioRef.current.onloadeddata = () => setIsLoading(false);
    }
    return () => {
      if (audioRef.current !== null) {
        audioRef.current.onloadeddata = null;
        audioRef.current = null;
      }
    };
  }, [src]);

  useEffect(() => {
    if (audioRef.current === null) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
      return;
    }
    audioRef.current.pause();
  },[isPlaying]);

  return (
    <Fragment>
      <button
      className={`track__button track__button--${isPlaying? 'pause' : 'play'}`}
      type='button'
      disabled={isLoading}
      onClick={onPlayClick}
      />
      <div className={'track__status'}>
        <audio src={src} ref={audioRef}/>
      </div>
    </Fragment>
  );
};

export default AudioPlayer;
