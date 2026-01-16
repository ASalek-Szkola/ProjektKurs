import styles from './AddToCartButton.module.css';

function AddToCartButton({ onClick }) {
    return (
      <button onClick={onClick} className={styles['button']}>
        Dodaj do koszyka
      </button>
    );
}

export default AddToCartButton;