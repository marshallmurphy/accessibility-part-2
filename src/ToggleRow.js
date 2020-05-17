import React, { useState } from 'react';
import styles from './toggleRow.module.css';

const ToggleRow = ({ option, index }) => {
  const [active, setActive] = useState(false);

  function handleToggle(e) {
    e.keyCode === 13 && setActive(!active);
  }

  return (
    <div className={styles.toggleRow}>
      <label id={'toggle_' + index}>{option}</label> {/**/}

      <label className={styles.toggle} tabIndex='0' onKeyDown={e => handleToggle(e)}>
        <input
          className={styles.toggleInput}
          type='checkbox'
          checked={active}
          onChange={() => setActive(!active)}
          tabIndex='-1'
          aria-labelledby={'toggle_' + index}
          aria-checked={active}
        />

        <span className={styles.toggleSlider}></span>
      </label>
    </div>
  )
}

export default ToggleRow;
