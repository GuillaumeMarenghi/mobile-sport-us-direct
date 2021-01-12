import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoPlayer = ({yt}) => {

  const id = yt.substr(32)
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={200}
        width={300}
        play={playing}
        videoId={id}
        onChangeState={onStateChange}
      />
    </View>
  );
}

export default VideoPlayer;