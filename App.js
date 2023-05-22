import { NavigationContainer } from "@react-navigation/native"
import { StackNavigation } from "./screens/StackNavigation"

export default function App () {
  return(
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}