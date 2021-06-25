import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { themeStyles } from '@styles/globalColors';

export default function TopTabBarComponent({ state, navigation }: any) {

    const onPress = (p_route: any, p_isFocused: boolean, p_index: number) => {

        const event = navigation.emit(
            {
                type: 'tabPress',
                target: p_route.key,
                canPreventDefault: true
            }
        );

        if (!p_isFocused && event.preventDefault) {
            navigation.navigate(p_route.name);
        }
    };

    return <View style={[styles.container, themeStyles.containerColorMain]}>

        {
            state.routes.map(
                (route: any, index: any) => {
                    const isActive = state.index === index;
                    return (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={1}
                            accessibilityState={isActive ? { selected: true } : {}}
                            onPress={() => onPress(route, state.index === index, index)}
                            style={[styles.tab, isActive && [styles.activeTab, { borderBottomColor: themeStyles.fontColorMain.color }]]}
                        >
                            <Text style={isActive ? [themeStyles.fontColorMain, styles.activeTabText] : [styles.notActiveTabText, themeStyles.fontColorSub]}>
                                {route.name}
                            </Text>
                        </TouchableOpacity>
                    );
                }
            )
        }
    </View>
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row'
        },
        tab: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10
        },
        activeTab: {
            borderBottomWidth: 2
        },
        notActiveTabText: {
            fontWeight: '500'
        },
        activeTabText: {
            fontWeight: 'bold'
        }
    }
);