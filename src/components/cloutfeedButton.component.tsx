import { settingsGlobals } from '@globals/settingsGlobals';
import { isDarkMode } from '@styles/';
import { themeStyles } from '@styles/globalColors';
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    styles?: StyleProp<ViewStyle>;
    disabled?: boolean;
}

export default class CloutFeedButton extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    shouldComponentUpdate(p_nextProps: Props): boolean {
        return this.props.disabled !== p_nextProps.disabled ||
            this.props.title !== p_nextProps.title;
    }

    private onPress(): void {
        if (this.props.disabled) {
            return;
        }
        this.props.onPress();
    }

    render(): JSX.Element {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.onPress()}
                style={[
                    styles.btnContainer,
                    this.props.styles,
                    { backgroundColor: this.props.disabled ? themeStyles.buttonDisabledColor.backgroundColor : 'black' },
                    { borderWidth: isDarkMode(settingsGlobals.theme) ? 1 : 0 },
                    themeStyles.buttonBorderColor
                ]}>
                <Text style={styles.btnTitle}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create(
    {
        btnContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 4,
            backgroundColor: 'black',
        },
        btnTitle: {
            color: 'white'
        }
    }
);
