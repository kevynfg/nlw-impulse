import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";

import { styles } from "./styles";
import { Camera, Trash } from "phosphor-react-native";
import { theme } from "../../theme";
import { Image, View } from "react-native";

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onRemoveShot, onTakeShot }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={screenshot ? onRemoveShot : onTakeShot}>
      {screenshot ? (
        <View>
            <Image style={styles.image} source={{uri: screenshot}}/>
          <Trash size={22} color={theme.colors.text_secondary} weight="fill" style={styles.removeIcon} />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_primary} weight="bold" />
      )}
    </TouchableOpacity>
  );
}
