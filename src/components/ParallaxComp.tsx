import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxComp() {
  return (
    <Parallax pages={3} config={{ tension: 0 }}>
      <ParallaxLayer speed={-0.8}>
        <div
          className="w-full h-[900px] bg-center"
          style={{
            backgroundImage: `url(/src/images/background.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.75}>
        <div
          className="w-full h-[900px] bg-center"
          style={{
            backgroundImage: `url(/src/images/mountains.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.7}>
        <div
          className="w-full h-[900px] bg-center"
          style={{
            backgroundImage: `url(/src/images/logo_land.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.65}>
        <div
          className="w-full h-[900px] bg-center "
          style={{
            backgroundImage: `url(/src/images/jungle1.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.5}>
        <div
          className="w-full h-[900px] bg-center mt-12"
          style={{
            backgroundImage: `url(/src/images/jungle2.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.45}>
        <div
          className="w-full h-[900px] bg-center mt-12"
          style={{
            backgroundImage: `url(/src/images/jungle3.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.4}>
        <div
          className="w-full h-[900px] bg-center mt-12"
          style={{
            backgroundImage: `url(/src/images/jungle4.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.1}>
        <div
          className="w-full h-[900px] bg-center mt-12"
          style={{
            backgroundImage: `url(/src/images/man_on_mountain.png)`,
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0}>
        <div
          className="w-full h-[900px] bg-center mt-12"
          style={{
            backgroundImage: `url(/src/images/jungle5.png)`,
            backgroundSize: "cover",
          }}
        />
        <div className="bg-[#210002] w-full h-[2000px]  p-24">
          <p className="text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            incidunt, est, nobis vitae ad labore accusantium deleniti corrupti
            accusamus eum, possimus vero suscipit modi sit. Fuga earum
            asperiores obcaecati maiores repellendus repellat possimus delectus
            cumque doloremque facere? Dolorem eos porro, odio quidem nulla magni
            ipsa, impedit aliquid vitae tempora soluta alias nam sunt in quo
            vero, exercitationem omnis! Vero perspiciatis animi, nostrum et
            quasi quas at provident corporis! Veniam excepturi aspernatur omnis
            provident iusto a beatae laborum laboriosam non iste labore nostrum
            tenetur veritatis sunt ducimus, facilis dolores ipsum repudiandae
            repellendus voluptatibus odit? Totam quos maiores facilis inventore
            maxime suscipit.
          </p>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
