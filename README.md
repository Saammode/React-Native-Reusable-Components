# React-Native-Reusable-Components
This is repository contain react-native components that can be reused over projects!

How to use components
1. Offline
    -> This component is used to detect internet connection react-native application
    -> Run `npm install @react-native-community/netinfo`
    -> Include this component in the screen where you want to show a red notification on top if u loose internet connectivity
    
2. Header
    -> Use this component to show a Header with two icon on both of side and a text in center
    -> Run `npm install react-native-vector-icons/FontAwesome`
    -> Include at top of screen and pass the necessary props, See example below
    -> eg:- <Header text='Header' left={'question-circle'} leftonPress={() => {alert('Question mark pressed')}} right={'arrow-right'} rightonPress={() => this.props.navigation.goBack()} />
    -> text is the text that will apear in heading
    -> left and right need to be fontawesome icon name for react-native
    -> leftonPress and rightonPress are two function that will be fired when you click icon displayed
    
