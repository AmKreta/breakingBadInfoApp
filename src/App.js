import Component from './components/components';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

function App() {
	const theme = useSelector(state => state.theme.theme);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<Component />
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
