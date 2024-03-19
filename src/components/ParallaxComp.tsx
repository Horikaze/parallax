import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "./Footer";

export default function ParallaxComp() {
  return (
    <Parallax pages={4} config={{ tension: 0 }}>
      <ParallaxLayer speed={-0.8}>
        <div
          className="w-full h-[900px] bg-center"
          style={{
            backgroundImage: `url(./images/background.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.75}>
        <div
          className="w-full h-[900px] bg-center"
          style={{
            backgroundImage: `url(./images/mountains.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.7}>
        <div
          className="w-full h-[900px] bg-center"
          style={{
            backgroundImage: `url(./images/logo_land.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.65}>
        <div
          className="w-full h-[900px] bg-center "
          style={{
            backgroundImage: `url(./images/jungle1.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.5}>
        <div
          className="w-full h-[900px] bg-center mt-12"
          style={{
            backgroundImage: `url(./images/jungle2.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.45}>
        <div
          className="w-full h-[900px] bg-center mt-12"
          style={{
            backgroundImage: `url(./images/jungle3.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.4}>
        <div
          className="w-full h-[900px] bg-center mt-12"
          style={{
            backgroundImage: `url(./images/jungle4.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.1}>
        <div
          className="w-full h-[900px] bg-center mt-12"
          style={{
            backgroundImage: `url(./images/man_on_mountain.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0}>
        <div
          className="w-full h-[900px] bg-center mt-12"
          style={{
            backgroundImage: `url(./images/jungle5.png)`,
            backgroundSize: "cover",
          }}
        />
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}
