import React from 'react';
import Dropdown from './Dropdown';
import ToggleRow from './ToggleRow';

import styles from './app.module.css';

const App = () => {
  const options = [
    'Subscribe to all emails',
    'Marketing emails only',
    'Weekly newsletter',
    'Emails for direct messages',
    'Some other option',
    'Emails about sasquatch',
    'Notify me whenever you notify me',
    'Send emails to everyone I know'
  ];

  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <div className={styles.logo} tabIndex='0'>Logo</div>
        <div className={styles.navlinks}>
          <a href='#'>Link A</a>
          <a href='#'>Link B</a>
          <a href='#'>Link C</a>

          <Dropdown />
        </div>
      </nav>

      <div className={styles.body}>
        <h1>Preferences</h1>

        <div className={styles.preferences}>
          {options.map((item, index) => {
            return (
              <ToggleRow option={item} key={index} index={index} />
            );
          })}
        </div>

      </div>
    </main>
  );
}

export default App;
