// styles
import styles from "./styles.module.scss";
import Image from "next/image";
export default function Payment() {
  return (
    <div className={styles.footer__payment}>
        <h3>We Accpet</h3>
        <div className={styles.footer__flexwrap}>
            <Image src="/images/payment/paypal.png" alt="" height={500} width={600}/>
            <Image src="/images/payment/mastercard.png" alt="" height={500} width={600}/>
            <Image src="/images/payment/visa.png" alt="" height={500} width={600}/>
        </div>
    </div>
  )
}
