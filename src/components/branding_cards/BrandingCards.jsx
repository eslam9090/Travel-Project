import styles from './BrandingCards.module.css'
const BrandingCards = () => {
  return (
    <div className={styles.branding_images}>
    <div className={styles.branding_image}>
      <img src="../../../src/assets/images/img1.png" alt="" />
    </div>
    <div className={styles.branding_image}>
      <img src="../../../src/assets/images/img2.png" alt="" />
    </div>
    <div className={styles.branding_image}>
      <img src="../../../src/assets/images/img3.png" alt="" />
    </div>
    <div className={styles.branding_image}>
      <img src="../../../src/assets/images/img4.png" alt="" />
    </div>
  </div>
  )
}

export default BrandingCards