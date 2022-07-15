import { memo } from "react"
import { Button } from "../button";
import { Speaker } from "../speaker";
import { Title } from "../title";
import styles from "./Content.module.css"

const ContentMemo = () => {
  return (
    <div className={styles["yfood-content__wrapper"]}>
      <div className={styles["yfood-content__first"]}>
        <Title label="Basic Information" variant="green" />
        <div className={styles["yfood-content__title-desc"]}>
          <Title label="Debora and Her Diet Tips" variant="bigWhite" />
          <div className={styles["yfood-content__action"]}>
            <p>Physical</p>
            <img alt="carret-down" src={'/icons/carretDown.svg'} />
          </div>
        </div>
        <p className={styles["yfood-content__paragraph-small"]}>Are you overweight ? enjoy this event and get better for solution for your overweight</p>

        <section className={styles["yfood-content__section"]}>
          <Title label="Event Description" variant="orange" />
          <p className={styles["yfood-content__paragraph"]}>Overweight can be a big problem especially in confidential about your self, some people got bullied cause this issue. In Korea
            2% person die cause by overweight, in Indonesia 10% person die caused by obesity.</p>
        </section>

        <section className={styles["yfood-content__section"]}>
          <Title label="Event Detail" variant="orange" />
          <p className={styles["yfood-content__paragraph_xsmall"]}>The MyHealth Programme is committed to ensuring that the residents of Hillingdon can access high quality, evidence-based care in a setting appropriate to their needs by transforming the way care is delivered. We do this by co-producing the programme with our service users and carers, providers, the local authority and community and voluntary sector groups.</p>
          <p className={styles["yfood-content__paragraph_xsmall"]}>Topic: Diet & Nutrition for Weight Loss</p>
          <p className={styles["yfood-content__paragraph_xsmall"]}>MyHealth are offering a FREE workshop on Diet & Nutrition for Weight Loss. Presented by a Dietitian, this is a one-off workshop that will be held virtually through Zoom for 2 hours in a group setting.</p>
          <p className={styles["yfood-content__paragraph_xsmall"]}>This Workshop aims to give you the tools and information needed to give you lasting results on your weight loss. this workshop will help you to identify and understand emotional and physical triggers to overeating. It will also help you to be more mindful about what you eat, from portion sizes to planning a meal with a dietitian. This workshop is more than a fad diet its a lifestyle change.</p>
          <p className={styles["yfood-content__paragraph_xsmall"]}>Contents of Workshop:</p>
          <ul className={styles["yfood-content__list"]}>
            <li>What is Hunger?</li>
            <li>Tools for Weight Loss</li>
            <li>Exploring Mindfulness and Weight Loss</li>
            <li>Exploring 'Head Hunger'</li>
            <li>Plan a Meal</li>
            <li>Visual & Emotional Triggers to Over Eating</li>
            <li>Goal Setting</li>
          </ul>
          <p className={styles["yfood-content__paragraph_xsmall"]}>For any questions please contact the MyHealth team directly through our inbox nhsnwlccg.myhealth@nhs.net</p>
        </section>

        <section className={styles["yfood-content__section"]}>
          <Title label="Media" variant="green" />
          <div className={styles["yfood-content__media-flex"]}>
            <div>
              <img alt="media1" src={'/photos/media1.png'} />
              <div className={styles["yfood-content__action"]}>
                <p>Media Type</p>
                <img alt="carret-down" src={'/icons/carretDown.svg'} />
              </div>
            </div>
            <div>
              <img alt="media1" src={'/photos/media2.png'} />
              <div className={styles["yfood-content__action"]}>
                <p>Media Type</p>
                <img alt="carret-down" src={'/icons/carretDown.svg'} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles["yfood-content__section"]}>
          <Title label="Partner" variant="green" />
          <div className={styles["yfood-content__image-sponsor"]}>

            <div className={styles["yfood-content__image-with-tilte"]}>
              <img width={120} alt="nitendo" src={'/photos/nitendo.png'} />
              <div className={styles["yfood-content__action"]}>
                <p>Venue</p>
                <img alt="carret-down" src={'/icons/carretDown.svg'} />
              </div>
            </div>

            <div className={styles["yfood-content__image-with-tilte"]}>
              <img width={62} alt="dq" src={'/photos/dq.png'} />
              <div className={styles["yfood-content__action"]}>
                <p>Venue</p>
                <img alt="carret-down" src={'/icons/carretDown.svg'} />
              </div>
            </div>

            <div className={styles["yfood-content__image-with-tilte"]}>
              <img width={62} alt="pepsi" src={'/photos/pepsi.png'} />
              <div className={styles["yfood-content__action"]}>
                <p>Venue</p>
                <img alt="carret-down" src={'/icons/carretDown.svg'} />
              </div>
            </div>

            <div className={styles["yfood-content__image-with-tilte"]}>
              <img width={110} alt="unilever" src={'/photos/unilever.png'} />
              <div className={styles["yfood-content__action"]}>
                <p>Venue</p>
                <img alt="carret-down" src={'/icons/carretDown.svg'} />
              </div>
            </div>

            <div className={styles["yfood-content__image-with-tilte"]}>
              <img width={97} alt="wendys" src={'/photos/wendys.png'} />
              <div className={styles["yfood-content__action"]}>
                <p>Venue</p>
                <img alt="carret-down" src={'/icons/carretDown.svg'} />
              </div>
            </div>
          </div>
          <Button title="Add More Sponsor" />
        </section>

        <section className={styles["yfood-content__section"]}>
          <Title label="Video" variant="green" />
          <div className={styles["yfood-content__action"]}>
            <Button title={<div className={styles["yfood-content__action"]}>
              <img alt="camera" src={'/icons/camera.svg'} />
              <p className={styles["yfood-content__bold-text"]}>Add Video</p>
            </div>} withIcon />

            <Button title={<div className={styles["yfood-content__action"]}>
              <img alt="book" src={'/icons/book.svg'} />
              <p className={styles["yfood-content__bold-text"]}>Link Video</p>
            </div>}
            withIcon />
          </div>
        </section>

        <section className={styles["yfood-content__section"]}>
          <Title label="FAQ" variant="green" />
          <div className={styles["yfood-content__action"]}>
            <p className={styles["yfood-content__paragraph"]}>Q :</p>
            <p className={styles["yfood-content__paragraph"]}>We will get the goodybad ?</p>
          </div>
          <div className={styles["yfood-content__action"]}>
            <p className={styles["yfood-content__paragraph"]}>A :</p>
            <p className={styles["yfood-content__paragraph"]}>Yes, each person who join this event will get the goodybad</p>
          </div>
          <Button title="Update FAQ" />
        </section>

        <section className={styles["yfood-content__section"]}>
          <div className={styles["yfood-content__speaker"]}>
            <Title label="Speaker" variant="green" />
            <div className={styles["yfood-content__action"]}>
              <img alt="grid" src={'/icons/grid.svg'} />
              <img alt="list" src={'/icons/list.svg'} />
            </div>
          </div>
          <Speaker />
        </section>
      </div>

      <div className={styles["yfood-content__second"]}>
        <div className={styles["yfood-content__second-title-desc"]}>
          <div className={styles["yfood-content__action"]}>
            <Title label="ADD SCHEDULE" variant="bigWhite" />
            <img alt="carret-down" src={'/icons/carretDown.svg'} />
          </div>
        </div>

        <section className={styles["yfood-content__section-flex"]}>
          <Title label="Basic Information" variant="green" />
          <p className={styles["yfood-content__paragraph_xsmall"]}>15.30 to 18.30</p>
        </section>

        <div className={styles["yfood-content__title-desc"]}>
          <Title label="Understanding Body" variant="bigWhite" />
        </div>

        <p className={styles["yfood-content__paragraph"]}>Everyone have it but not everyone think bout this</p>

        <div className={styles["yfood-content__action"]}>
          <img alt="building" src={'/icons/building.svg'} />
          <p className={styles["yfood-content__paragraph"]}>UK National Kingdom Park</p>
        </div>

        <section className={styles["yfood-content__section"]}>
          <Title label="Session Media" variant="orange" />
          <div className={styles["yfood-content__media-flex"]}>
            <div>
              <img alt="image1" src={'/photos/image1.png'} />
            </div>
            <div>
              <img alt="image2" src={'/photos/image2.png'} />
            </div>
          </div>
        </section>

        <section className={styles["yfood-content__section"]}>
          <Title label="Session Description" variant="orange" />
          <p className={styles["yfood-content__paragraph-small"]}>We will do a virtual gathering tomorrow. Here are some things that you need to take note:</p>
          <p className={styles["yfood-content__paragraph-small"]}>The virtual gathering will be held on Thursday at SG1.00PM via Gather.town with this link: https://app.gather.town/invite?token=vBjz232L4ByDRds. Please let me know if you have any problem joining to Gather.town
            We'll turn on our camera during the meeting, please prepare yourself in a casual outfit.</p>
          <p className={styles["yfood-content__paragraph-small"]}>If there's anything unclear, feel free to contact me.</p>
        </section>

        <div className={styles["yfood-content__media-flex"]}>
          <input type="checkbox" />
          <p className={styles["yfood-content__paragraph_xsmall"]}>Add Speaker from Event</p>
        </div>

        <div className={styles["yfood-content__speaker-2"]}>
          <Title label="Speaker" variant="green" />
          <Speaker noAction />
        </div>

        <div className={styles["yfood-content__action"]}>
          <Title label="Material" variant="green" />
        </div>

      </div>

    </div>
  )
}

export const Content = memo(ContentMemo);