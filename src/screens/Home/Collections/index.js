import React, { useState } from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link, useHistory } from "react-router-dom";
import styles from "./Collections.module.sass";
import Icon from "../../../components/Icon";

const items = [
  {
    name: "Énergie",
    author: "Voltaine & Viktor",
    counter: "28",
    avatar: "/images/content/avatar-1.jpg",
    pinhash: "/item/1",
    gallery:
      "https://ipfs.io/ipfs/QmWAxX3T4JXt9LnHjuFRu96jSbfvmxGZBeryQ578GThhW5/Énergie-001.jpg",
    
  },
  {
    name: "Collection",
    author: "Coming Soon",
    counter: "28",
    avatar: "/images/content/avatar-3.jpg",
    pinhash: "/",
    gallery: "/images/content/collections2.png",
  },
  {
    name: "Collection",
    author: "Coming Soon",
    counter: "28",
    avatar: "/images/content/avatar-4.jpg",
    pinhash: "/",
    gallery: "/images/content/collections3.png",
  },
  {
    name: "Collection",
    author: "Coming Soon",
    counter: "28",
    avatar: "/images/content/photo-3.2.jpg",
    pinhash: "/",
    gallery: "/images/content/collections2.png",
  },
  {
    name: "Collection",
    author: "Coming Soon",
    counter: "28",
    avatar: "/images/content/photo-3.1.jpg",
    pinhash: "/",
    gallery: "/images/content/collections3.png",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Collections = () => {
  const history = useHistory();
  const [activeDrag, setActiveDrag] = useState({
    clientXonMouseDown: null,
    clientYonMouseDown: null,
  });

  const handleOnMouseDown = (e) => {
    setActiveDrag({
      clientXonMouseDown: e.clientX,
      clientYonMouseDown: e.clientY,
    });
    e.preventDefault(); // stops weird link dragging effect
  };
  const onLinkClick = (e) => {
    e.stopPropagation();
    if (
      activeDrag.clientXonMouseDown !== e.clientX ||
      activeDrag.clientYonMouseDown !== e.clientY
    ) {
      // prevent link click if the element was dragged
      e.preventDefault();
    } else console.log("itemclick", e);
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="16" fill="#c1c1c1" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="16" fill="#c1c1c1" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <div className={styles.head}>
              <div className={cn("h3", styles.title)}>Code & Art</div>
              <div className={styles.subtitle}>on the Blockchain</div>
            </div>
            <div className={styles.iconcircle}>
              <svg width="200px" height="100px" viewBox="0 0 297 225" xmlns="http://www.w3.org/2000/svg">
                <g stroke="null">
                  <path
                    id="svg_17"
                    d="m74.496025,112.248273c0,-58.701659 47.548344,-106.250003 106.250003,-106.250003c58.701659,0 106.250003,47.548344 106.250003,106.250003c0,58.701659 -47.548344,106.250003 -106.250003,106.250003c-58.701659,0 -106.250003,-47.548344 -106.250003,-106.250003z"
                    strokeOpacity="null"
                    strokeLinecap="null"
                    strokeLinejoin="null"
                    strokeWidth="4"
                    stroke="#e2e2e2"
                    fillOpacity="null"
                    fill="none"
                  />
                  <g id="svg_216">
                    <line
                      fill="none"
                      strokeWidth="4"
                      strokeOpacity="null"
                      fillOpacity="null"
                      x1="25.922312"
                      y1="201.384363"
                      x2="4.090681"
                      y2="215.976576"
                      id="svg_203"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      transform="rotate(-9 15.00649642944336,208.68047332763672)"
                      stroke="#e2e2e2"
                    />
                    <line
                      fill="none"
                      strokeWidth="4"
                      strokeOpacity="null"
                      fillOpacity="null"
                      x1="4.390218"
                      y1="184.279325"
                      x2="26.122777"
                      y2="201.081614"
                      id="svg_204"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      transform="rotate(7 15.256497383117676,192.68047332763672)"
                      stroke="#e2e2e2"
                    />
                    <line
                      fill="none"
                      strokeWidth="4"
                      strokeOpacity="null"
                      fillOpacity="null"
                      x1="26.422312"
                      y1="136.884363"
                      x2="4.590681"
                      y2="151.476576"
                      id="svg_205"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      transform="rotate(-9 15.50649642944336,144.18047332763672)"
                      stroke="#e2e2e2"
                    />
                    <line
                      fill="none"
                      strokeWidth="4"
                      strokeOpacity="null"
                      fillOpacity="null"
                      x1="4.890218"
                      y1="151.779325"
                      x2="26.622777"
                      y2="168.581614"
                      id="svg_206"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      transform="rotate(7 15.756497383117676,160.18047332763672)"
                      stroke="#e2e2e2"
                    />
                    <line
                      fill="none"
                      strokeWidth="4"
                      strokeOpacity="null"
                      fillOpacity="null"
                      x1="26.922312"
                      y1="39.884363"
                      x2="5.090681"
                      y2="54.476576"
                      id="svg_207"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      transform="rotate(-9 16.00649642944336,47.18046951293945)"
                      stroke="#e2e2e2"
                    />
                    <line
                      fill="none"
                      strokeWidth="4"
                      strokeOpacity="null"
                      fillOpacity="null"
                      x1="5.390218"
                      y1="54.779325"
                      x2="27.122777"
                      y2="71.581614"
                      id="svg_208"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      transform="rotate(7 16.256497383117676,63.18046760559082)"
                      stroke="#e2e2e2"
                    />
                    <line
                      fill="none"
                      strokeWidth="4"
                      strokeOpacity="null"
                      fillOpacity="null"
                      x1="27.422312"
                      y1="7.384363"
                      x2="5.590681"
                      y2="21.976576"
                      id="svg_209"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      transform="rotate(-9 16.50649642944336,14.680469512939453)"
                      stroke="#e2e2e2"
                    />
                    <line
                      fill="none"
                      strokeWidth="4"
                      strokeOpacity="null"
                      fillOpacity="null"
                      x1="5.890218"
                      y1="22.279325"
                      x2="27.622777"
                      y2="39.081614"
                      id="svg_210"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      transform="rotate(7 16.756497383117676,30.68047046661377)"
                      stroke="#e2e2e2"
                    />
                    <line
                      fill="none"
                      strokeWidth="4"
                      strokeOpacity="null"
                      fillOpacity="null"
                      x1="26.422312"
                      y1="104.384363"
                      x2="4.590681"
                      y2="118.976576"
                      id="svg_211"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      transform="rotate(-9 15.50649642944336,111.68046951293945)"
                      stroke="#e2e2e2"
                    />
                    <line
                      fill="none"
                      strokeWidth="4"
                      strokeOpacity="null"
                      fillOpacity="null"
                      x1="4.890218"
                      y1="119.279325"
                      x2="26.622777"
                      y2="136.081614"
                      id="svg_212"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      transform="rotate(7 15.756497383117676,127.68047332763672)"
                      stroke="#e2e2e2"
                    />
                    <line
                      fill="none"
                      strokeWidth="4"
                      strokeOpacity="null"
                      fillOpacity="null"
                      x1="26.922312"
                      y1="71.884363"
                      x2="5.090681"
                      y2="86.476576"
                      id="svg_213"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      transform="rotate(-9 16.00649642944336,79.18046951293945)"
                      stroke="#e2e2e2"
                    />
                    <line
                      fill="none"
                      strokeWidth="4"
                      strokeOpacity="null"
                      fillOpacity="null"
                      x1="5.390218"
                      y1="86.779325"
                      x2="27.122777"
                      y2="103.581614"
                      id="svg_214"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      transform="rotate(7 16.256497383117676,95.18046951293945)"
                      stroke="#e2e2e2"
                    />
                    <path
                      fill="none"
                      fillOpacity="null"
                      stroke="#e2e2e2"
                      strokeWidth="4"
                      strokeLinejoin="null"
                      strokeLinecap="null"
                      strokeOpacity="null"
                      transform="rotate(-9 15.00649642944336,176.68047332763672)"
                      d="m25.922312,169.384363l-21.831631,14.592213"
                      id="svg_215"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className={styles.inner}>
            <Slider className="collection-slider" {...settings}>
              {items.map((x, index) => (
                <Link
                  className={styles.item}
                  to={x.pinhash}
                  key={index}
                  onMouseDown={handleOnMouseDown}
                  onClick={onLinkClick}
                >
                  <div className={styles.gallery}>
                    <div className={styles.preview} key={index}>
                      <img src={x.gallery} alt="Collection" />
                    </div>
                  </div>
                  <div className={styles.subtitle}>{index + 1}</div>
                  <div className={styles.subtitle}>{x.name}</div>
                  <div className={styles.user}>
                    <span>{x.author}</span>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
