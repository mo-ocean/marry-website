'use client';
import Image from "next/image";
import Ballpit from "./Ballpit";
import TextType from "./TextType";
import Fireworks from "@fireworks-js/react";
import { useState } from "react";


export default function Home() {
  const [showFire, setShowFire] = useState(false)
  return (
    <div className="page">

      <div className="back" >
        <Ballpit
          count={100}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
          colors={[
            0xFFD1DC, // 柔和粉红
            0xFFC0CB, // 樱花粉
            0xFFF5E0, // 奶油黄
            0xFFF9C4, // 柔和黄
            0xC8F7C5, // 薄荷绿
            0xA8EDEA, // 天空蓝
            0xB2EBF2, // 浅蓝绿
            0xE6E6FA, // 薰衣草紫
            0xD8BFD8, // 薰衣草淡紫
            0xFFE4E1,  // 淡珊瑚粉
            0xffffff, 0x000000, 0x5227ff
          ]}
        />
      </div>

      <div className="blurBg"></div>


      <div className="content">
        <TextType
          className="text1"
          text={["Text typing effect"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          loop={false}
          textColors={['#775021']}
        />



        <div onClick={() => {
          console.log('111')
          setShowFire(true)
        }}>confirm1</div>

        {
          showFire ? <Fireworks
            options={{
              rocketsPoint: {
                min: 0,
                max: 100
              }
            }}
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              position: 'fixed',
              background: '#000'
            }}
          /> : null
        }



      </div>
    </div>
  );
}
