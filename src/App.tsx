import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

const App = (): ReactElement => {
	return (
		<div className={'main-wrapper'}>
			<Routes>
				<Route path={'/'} element={<></>} />
			</Routes>
		</div>
	);
};

export default App;
