import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import DrillBox from './components/DrillBox';
import DrillButton from './components/DrillButton';
import MainMenu from './components/MainMenu';
import TitleBar from './components/TitleBar';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
		<Router>
			<div className={styles.container}>
				<Link to='/' className={styles.titleLink}>
					<TitleBar title='mentat' />
				</Link>

				<Routes>
					<Route path='/' element={<MainMenu />} />
					<Route path='/exercise1' element={
						<>
							<DrillBox drillId='exercise1' />
							<DrillButton />
						</>
					} />
					<Route path='/exercise2' element={
						<>
							<DrillBox drillId='exercise2' />
							<DrillButton />
						</>
					} />
					<Route path='/exercise3' element={
						<>
							<DrillBox drillId='exercise3' />
							<DrillButton />
						</>
					} />
				</Routes>

			</div>
		</Router>
  );
};

export default App;

