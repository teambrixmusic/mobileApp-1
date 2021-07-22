import { StyleSheet } from 'react-native';
import { settingsGlobals } from '@globals';

const themeMapper = {
    light: {
        fontColorMain: { color: 'black' },
        switchColor: { color: 'rgba(128, 128, 128, 0.4)' },
        fontColorSub: { color: '#828282' },
        containerColorMain: { backgroundColor: 'white' },
        containerColorSub: { backgroundColor:  '#f7f7f7' },
        chipColor: { backgroundColor: '#f5f5f5' },
        coinPriceContainer: { backgroundColor:  '#ebebeb' },
        borderColor: { borderColor:  '#e0e0e0' },
        lightBorderColor: { borderColor:  '#f2f2f2' },
        buttonBorderColor: { borderColor: 'black' },
        shadowColor: { shadowColor:  '#d6d6d6' },
        recloutBorderColor: { borderColor: '#bdbdbd' },
        buttonDisabledColor: { backgroundColor: '#999999' },
        diamondColor: { color: '#3599d4' },
        linkColor: { color: '#3f729b' },
        modalBackgroundColor: { backgroundColor:  '#f7f7f7' },
        disabledButton: { backgroundColor: '#2b2b2b' },
        likeHeartBackgroundColor: { backgroundColor: 'black' }
    },
    dark: {
        fontColorMain: { color: '#ebebeb' },
        switchColor: { color:  'rgba(128, 128, 128, 1)' },
        fontColorSub: { color: '#b0b3b8' },
        containerColorMain: { backgroundColor:  '#000000' },
        containerColorSub: { backgroundColor: '#121212' },
        chipColor: { backgroundColor: '#262525' },
        coinPriceContainer: { backgroundColor: '#171717' },
        borderColor: { borderColor: '#262626' },
        lightBorderColor: { borderColor: '#1a1a1a' },
        buttonBorderColor: { borderColor: '#262626' },
        shadowColor: { shadowColor: 'black' },
        recloutBorderColor: { borderColor: '#4a4a4a' },
        buttonDisabledColor: { backgroundColor: '#2e2e2e' },
        diamondColor: { color: '#b9f2ff'},
        linkColor: { color: '#d1eeff' },
        modalBackgroundColor: { backgroundColor: '#242424' },
        disabledButton: { backgroundColor: '#2b2b2b' },
        likeHeartBackgroundColor: { backgroundColor: 'white' }
    },
    cake: {
        fontColorMain: { color: '#47205c' },
        switchColor: { color: 'rgba(128, 128, 128, 1)' },
        fontColorSub: { color: '#a97aa2' },
        containerColorMain: { backgroundColor: '#f8edeb' },
        containerColorSub: { backgroundColor: '#f3e1e1' },
        chipColor: { backgroundColor: '#f8edeb' },
        coinPriceContainer: { backgroundColor: '#f3e1e1' },
        borderColor: { borderColor: '#fae1dd' },
        lightBorderColor: { borderColor: '#fae1dd' },
        buttonBorderColor: { borderColor: '#009aff' },
        shadowColor: { shadowColor: '#f3e1e1' },
        recloutBorderColor: { borderColor: '#fae1dd' },
        buttonDisabledColor: { backgroundColor: '#999999' },
        diamondColor: { color: '#009aff' },
        linkColor: { color: '#009aff' },
        modalBackgroundColor: { backgroundColor: '#f8edeb' },
        disabledButton: { backgroundColor: '#999999' },
        likeHeartBackgroundColor: { backgroundColor: '#ff3298' }
    }
    
} as any;

export let themeStyles = StyleSheet.create(
    themeMapper[settingsGlobals.theme]
);

export function updateThemeStyles() {
    themeStyles = StyleSheet.create(
        themeMapper[settingsGlobals.theme]
    );
}
