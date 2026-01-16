import styles from './NavigationPanel.module.css';

function NavigationPanel({  }) {
    return (
      <nav>
        {/* Lewy */}
        <div>
          <h3>Nazwa</h3>
        </div>

        {/* Prawy */}
        <div>
          <button className={styles['button']}>Koszyk</button>
          <button>
            <a>Zaloguj się</a>
          </button>
        </div>


        <span>Nazwa</span>
        <img src="./assets/" alt="Koszyk"></img>
        <img src="./assets/" alt="Konto"></img>
      </nav>
    );
}

export default NavigationPanel;