'use client';
import Image from "next/image";
import Ballpit from "./Ballpit";
import TextType from "./TextType";
import Fireworks from "@fireworks-js/react";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const [showFire, setShowFire] = useState(false)
  const [count, setCount] = useState(0)
  const timer = useRef<any>(null)
const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    //  timer.current =  setInterval(() => {
    //   if (count > 10) {
    //     clearInterval(timer.current)
    //   }
    //     setCount(prev=>prev + 1)
    //   }, 1000);

  }, [])

  return (
    <div className="page" onClick={()=>{
      console.log('11111')
    }}>
      <title>嫁给我吧老婆！！！</title>
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
          text={["亲爱的老婆："]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter=""
          loop={false}
          textColors={['#6d4c41']}
        />
        <div>
          <TextType
            className="text2"
            text={["宝贝，这是我们故事的开始，也是我想和你共度一生的理由。"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            loop={false}
            textColors={['#6d4c41']}
            initialDelay={1000}
          />
        </div>
        <div>
          <TextType
            className="text2"
            text={["还记得吗？两年前的11月21日，我们成了彼此微信里的一个名字。我们靠着文字互相陪伴, 现在想想，那些深夜的聊天，早已悄悄把我们的心连在了一起。"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            loop={false}
            textColors={['#6d4c41']}
            initialDelay={4000}
          />
        </div>
        <div>
          <TextType
            className="text2"
            text={["12月16日第一次见面，我紧张得手心冒汗。吃饭时偷偷看你，饭后一起溜达，冬天的风都是甜的。后来我们去许昌古城，我想给你拍照，你撅着嘴说“不要”——那模样我记到现在哈哈哈哈(❁´◡`❁)。"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            loop={false}
            textColors={['#6d4c41']}
            initialDelay={12000}
          />
        </div>
        <div>
          <TextType
            className="text2"
            text={["元旦带你回家乡的湖边散步，水面闪着光，就像我见到你时的心情。但最难忘的，是2月13日，丹江口水库的日落把整个世界染成金色。我终于鼓起勇气表白，你点头时，晚霞正好落在你睫毛上。我们的第一个吻，带着湖水的清澈气息。"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            loop={false}
            textColors={['#6d4c41']}
            initialDelay={25000}
          />
        </div>
        <div>
          <TextType
            className="text2"
            text={["那天我们住一个房间haha，第一次搂着宝贝可舒服啦。过年背着你时，河对面突然升起烟花——那一刻我就知道，这辈子就是你了。"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            loop={false}
            textColors={['#6d4c41']}
            initialDelay={36000}
          />
        </div>
        <div>
          <TextType
            className="text2"
            text={["后来我们一起经历了好多第一次：元宵节拍视频时我害羞得手脚都不知道往哪放；百天纪念日一起吃蛋糕；五一去日照和青岛看海，哥哥躺着看宝贝在沙滩捡贝壳；中秋自驾太行山，咱俩在群山面前笑得比阳光还灿烂；第一次见家长，哥哥超级紧张呢......从订婚到备婚，每一个和你有关的画面，都是我生命里最珍贵的宝藏。"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            loop={false}
            textColors={['#6d4c41']}
            initialDelay={42000}
          />
        </div>
        <div>
          <TextType
            className="text2"
            text={["所以今天，我想让我们的故事有最完美的续集。"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            loop={false}
            textColors={['#6d4c41']}
            initialDelay={57000}
          />
        </div>
        <div>
          <TextType
            className="text2"
            text={["宝贝，嫁给我好吗？"]}
            typingSpeed={300}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
            loop={false}
            textColors={['#6d4c41']}
            initialDelay={60000}
          />
        </div>
        {/* <div className="my-btn" >aaa</div> */}


        {/* <Fireworks
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
          />  */}




      </div>

     
    </div>
  );
}
