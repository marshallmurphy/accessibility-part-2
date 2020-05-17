import React, { useState } from 'react';
import styles from './dropdown.module.css';

const Dropdown = () => {
  const [active, setActive] = useState(false);

  function closeMenu(e) {
    (e.keyCode === 9 && !e.shiftKey) && setActive(false);
  }

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setActive(!active)}>
        Dropdown
        <div className={styles.caretDown}>&#94;</div>
      </button>

      {active && (
        <div className={styles.menu}>
          <div tabIndex='0' className={styles.menuItem}>Item A</div>
          <div tabIndex='0' className={styles.menuItem}>Item B</div>
          <div tabIndex='0' className={styles.menuItem} onKeyDown={e => closeMenu(e)}>Item C</div>
        </div>
      )}
    </div>
  )
}

export default Dropdown;
