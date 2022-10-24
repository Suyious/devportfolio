import styles from "./styles.module.css"
import Previous from "../../../icons/Previous"
import Next from "../../../icons/Next"
import {useEffect, useState} from "react"

const Carousel = ({elements, capacity=3}) => {

  const [transform, setTransform] = useState(0);
  const [offset, setOffset] = useState(0);
  const [leftControl, setLeftControl] = useState(true);
  const [rightControl, setRightControl] = useState(true);

  useEffect(() => {
    setLeftControl(!(offset === 0));
    setRightControl(!(capacity > elements.length || offset === capacity - elements.length));
  }, [capacity, offset, elements.length])

  // direction: next: -1, previous: 1
  const scroll = (direction) => {
    // checks boundaries (ensures no out of boundary scroll)
    if(offset + direction < capacity - elements.length || offset + direction > 0){
      return;
    }
    // main operations
    setTransform(transform + direction * (100 / capacity));
    setOffset(offset + direction);
  }

  return (
    <div className={styles.Carousel_main}>
      {leftControl && <div onClick={() => scroll(1)} className={styles.Carousel_control + " " + styles.left}>
      <Previous/>
    </div> }
      <div className={styles.Carousel_body}>
        <div className={styles.Carousel_image_array + " animation"}>
          {elements.map((element, i) => (
            <div key={i} className={styles.Carousel_image_container + " capacity"}>{element}</div>
          ))}
        </div>
      </div>
    {rightControl && <div onClick={() => scroll(-1)} className={styles.Carousel_control + " " + styles.right}>
      <Next />
    </div> }
      <style jsx>{`
        .animation {
          transform: translateX(calc( ${transform}% + ${offset}em ));
          transition: transform 500ms ease;
        }
        .capacity {
          width: ${100 / capacity}%;
        }
    `}</style>
    </div>
  )
}

export default Carousel
