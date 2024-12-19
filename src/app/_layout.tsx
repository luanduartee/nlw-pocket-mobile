import { Stack } from "expo-router"
import { colors } from "@/styles/theme"
import { gestureHandlerRootHOC, GestureHandlerRootView } from "react-native-gesture-handler"
import { 
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
 } from "@expo-google-fonts/rubik"
 import { Loading } from "@/components/loading"

export default function Layout () {
    const [fonstLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold
    })

    if(!fonstLoaded) {
        return <Loading />
    }

    return (
        <GestureHandlerRootView>
        <Stack 
        screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.gray[100]}
        }}/>
        </GestureHandlerRootView>
    )
}