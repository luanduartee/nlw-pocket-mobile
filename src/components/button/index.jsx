import { 
    TouchableOpacity, 
    TouchableOpacityProps, 
    Text, 
    TextProps, 
    ActivityIndicator,
} from "react-native"
import { IconProps as TableIconProps } from "@tabler/icons-react-native"
import { s } from  "./styles"ident
import { colors } from "@/styles/theme"

type ButtonProps = TouchableOpacityProps & {
    isLoading ?: boolean
}

function Button ({children, style, isLoading = false, ...rest}: ButtonProps) {
    return <TouchableOpacity style={s.container} activeOpacity={0.8} disabled={isLoading}>
        {
            isLoading ? <ActivityIndicator size="small" color={colors.grey[100]} /> : children
        }
    </TouchableOpacity>
}

function Title ({children}: TextProps) {
    return <Text style={s.title}>{children}</Text>
}

type IconProps = {
    icon: React.ComponentType<TableIconProps>
}

function Icon() {
    return <Icon size={24} color={color.gray[100]} />
}

Button.Title = Title
Button.Icon = Icon

export { Button }