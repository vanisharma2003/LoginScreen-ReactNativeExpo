import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerTitle:"Login Page"}}/>
      <Stack.Screen name="loginPage"/>
      <Stack.Screen name="mainScreen" options={{headerTitle:"Main Screen"}}/>
    </Stack>
  );
}
