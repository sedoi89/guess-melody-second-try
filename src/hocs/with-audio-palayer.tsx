import {ComponentType} from 'react';
import {useState} from 'react';
import AudioPlayer from '../components/audio-player/audio-player';


type HOCProps = {
  renderPlayer: (src: string, id: number) => void;
};

function withAudioPlayer<T>(Component: ComponentType<T>)
  : ComponentType<Omit<T, keyof HOCProps>> {

  type ComponentProps = Omit<T, keyof HOCProps>

  function WithAudioPlayer(props: ComponentProps): JSX.Element {
    const [activePlayer, setActivePlayer] = useState(0);
    return (
      <Component
        {...props as T}
        renderPlayer={(src: string, id: number) => (
          <AudioPlayer
            isPlaying={id === activePlayer}
            src={src}
            onPlayClick={() => {
              setActivePlayer(activePlayer === id ? -1 : id);
            }}
          />
        )}
      />
    );

  }

  return WithAudioPlayer;
}
export default withAudioPlayer;
