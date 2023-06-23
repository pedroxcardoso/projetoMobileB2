import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgetPasswordPage from '../pages/ForgotPasswordPage';

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){

    return (
        <Stack.Navigator>

        <Stack.Screen name='LoginPage' component={LoginPage} options={{headerShown: false}} />
        <Stack.Screen name='RegisterPage' component={RegisterPage} options={{headerShown: false}} />
        <Stack.Screen name='ForgotPasswordPage' component={ForgetPasswordPage} options={{headerShown: false}} />

        </Stack.Navigator>
    );
}