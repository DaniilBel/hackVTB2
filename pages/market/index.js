import styles from '../../styles/Market.module.css'
import Cost from "../../Cost"

export default function Market() {
    let h = "190"
    let w = "190"

    //let cost = new Cost()

    return (
        <div>
            <div className={styles.single}>
                <img src='tshirt2.jpg' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(2)}>Приобрести (2 VTBT)</div>
                </button>
            </div>
            <div className={styles.single}>
                <img src='singlet2.jpg' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(1)}>Приобрести (1 VTBT)</div>
                </button>
            </div>
            <div className={styles.single}>
                <img src='mouse.jpg' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(3)}>Приобрести (3 VTBT)</div>
                </button>
            </div>
            <div className={styles.single}>
                <img src='cap.jpg' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(1)}>Приобрести (1 VTBT)</div>
                </button>
            </div>
            <br />
            <div className={styles.single}>
                <img src='nft1.png' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(1)}>Приобрести NFT (1 VTBT)</div>
                </button>
            </div>
            <div className={styles.single}>
                <img src='nft2.jpg' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(1)}>Приобрести NFT (1 VTBT)</div>
                </button>
            </div>
            <div className={styles.single}>
                <img src='nft3.png' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(1)}>Приобрести NFT (1 VTBT)</div>
                </button>
            </div>
            <div className={styles.single}>
                <img src='nft4.png' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(1)}>Приобрести NFT (1 VTBT)</div>
                </button>
            </div>
            <br />
            <div className={styles.single}>
                <img src='nft5.png' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(1)}>Приобрести NFT (1 VTBT)</div>
                </button>
            </div>
            <div className={styles.single}>
                <img src='nft6.png' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(1)}>Приобрести NFT (1 VTBT)</div>
                </button>
            </div>
            <div className={styles.single}>
                <img src='nft7.png' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(1)}>Приобрести NFT (1 VTBT)</div>
                </button>
            </div>
            <div className={styles.single}>
                <img src='nft8.png' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(1)}>Приобрести NFT (1 VTBT)</div>
                </button>
            </div>
            <br />
            <div className={styles.single}>
                <img src='promobot.png' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(100)}>Приобрести (100 VTBT)</div>
                </button>
            </div>
            <div className={styles.single}>
                <img src='carpet.jpg' height={h} width={w}/>
                <button className={styles.button}>
                    <div onClick={() => Cost.downCost(2)}>Приобрести (2 VTBT)</div>
                </button>
            </div>
        </div>
    );

}