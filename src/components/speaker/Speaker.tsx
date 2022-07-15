import { memo } from "react"
import styles from "./Speaker.module.css"
import { ISpeaker } from "./Speaker.types";

const SpeakerMemo = (props: ISpeaker) => {
    const { noAction } = props;

    return (
        <>
            <div className={styles["yfood-speaker"]}>
                <div className={styles["yfood-speaker__item"]}>
                    <img className={styles["yfood-speaker__avatar"]} alt="avatar" src={'/photos/people.png'} />
                    <div className={styles["yfood-speaker__bio"]}>
                        <p className={styles["yfood-speaker__title-name"]}>Geraldie Tan</p>
                        <p className={styles["yfood-speaker__paragraph-small"]}>Backend Developer at Yfood</p>
                        <p className={styles["yfood-speaker__description"]}>Loremo ipsum this is my biograhphy bwkda Loremo ipsum this is my biograhphy bwkda despacito wara wiri kesana kemari</p>
                    </div>
                    {!noAction &&
                        <>
                            <img alt="cross" src={'/icons/cross.svg'} />
                            <img alt="pencil" src={'/icons/pencil.svg'} />
                        </>}
                </div>
                <div className={styles["yfood-speaker__item"]}>
                    <img className={styles["yfood-speaker__avatar"]} alt="avatar" src={'/photos/people.png'} />
                    <div className={styles["yfood-speaker__bio"]}>
                        <p className={styles["yfood-speaker__title-name"]}>Geraldie Tan</p>
                        <p className={styles["yfood-speaker__paragraph-small"]}>Backend Developer at Yfood</p>
                        <p className={styles["yfood-speaker__description"]}>Loremo ipsum this is my biograhphy bwkda Loremo ipsum this is my biograhphy bwkda despacito wara wiri kesana kemari</p>
                    </div>
                    {!noAction &&
                        <>
                            <img alt="cross" src={'/icons/cross.svg'} />
                            <img alt="pencil" src={'/icons/pencil.svg'} />
                        </>}
                </div>
                <div className={styles["yfood-speaker__item"]}>
                    <img className={styles["yfood-speaker__avatar"]} alt="avatar" src={'/photos/people.png'} />
                    <div className={styles["yfood-speaker__bio"]}>
                        <p className={styles["yfood-speaker__title-name"]}>Geraldie Tan</p>
                        <p className={styles["yfood-speaker__paragraph-small"]}>Backend Developer at Yfood</p>
                        <p className={styles["yfood-speaker__description"]}>Loremo ipsum this is my biograhphy bwkda Loremo ipsum this is my biograhphy bwkda despacito wara wiri kesana kemari</p>
                    </div>
                    {!noAction &&
                        <>
                            <img alt="cross" src={'/icons/cross.svg'} />
                            <img alt="pencil" src={'/icons/pencil.svg'} />
                        </>}
                </div>
            </div>
        </>
    )
}

export const Speaker = memo(SpeakerMemo);