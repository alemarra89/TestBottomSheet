import BottomSheet, { BottomSheetScrollView, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  const sheetRef = useRef<BottomSheet>(null);

  const handleOpenPress = useCallback(() => {
    sheetRef.current?.expand();
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  return (

    <GestureHandlerRootView style={styles.container}>

      <Button title="Open" onPress={() => handleOpenPress()} />

      <BottomSheet
        ref={sheetRef}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        android_keyboardInputMode="adjustPan"
        enablePanDownToClose
        enableOverDrag
        index={-1}
      >
        <BottomSheetScrollView
          contentContainerStyle={styles.contentContainer}
          bounces={false}
          overScrollMode="never"
          keyboardShouldPersistTaps="handled"
        >

            <Text>Some extra space 1</Text>
            <BottomSheetTextInput style={styles.input} />
            <Text>Some extra space 2</Text>
            <BottomSheetTextInput style={styles.input} />
            <Text>Some extra space 3</Text>
            <BottomSheetTextInput style={styles.input} />
            <Text>Some extra space 4</Text>
            <BottomSheetTextInput style={styles.input} />
            <Text>Some extra space 5</Text>
            <BottomSheetTextInput style={styles.input} />
            <Text>Some extra space 6</Text>
            <BottomSheetTextInput style={styles.input} />
            <Text>Some extra space 7</Text>
            <BottomSheetTextInput style={styles.input} />
            <Text>Some extra space 8</Text>
            <BottomSheetTextInput style={styles.input} />
            <Text>Some extra space 9</Text>
            <BottomSheetTextInput style={styles.input} />
            <Text>Some extra space 10</Text>
            <BottomSheetTextInput style={styles.input} />
            <Text>Some extra space 11</Text>
            <BottomSheetTextInput style={styles.input} />
            <Text>Some extra space 12</Text>
            <BottomSheetTextInput style={styles.input} />

            <Button title="Close" onPress={() => handleClosePress()} />

        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>

  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  input: {
    margin: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CCC',
  },
});
