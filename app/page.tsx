'use client';
import Image from "next/image";
import Ballpit from "./Ballpit";

export default function Home() {
  return (
    <div >
      <div className="back" >
        <Ballpit
          count={100}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false} 
          colors={[0xffffff, 0x000000, 0x5227ff]}
        />
      </div>
    </div>
  );
}
