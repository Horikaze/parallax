import { useParallax } from "react-scroll-parallax";

export default function ParallaxComp() {
  return (
    <div className="h-[calc(100vh+200px)] relative overflow-hidden">
      <div
        className="absolute inset-0 size-full"
        ref={useParallax<HTMLDivElement>({ speed: -90 }).ref}
      >
        <img
          src="./images/background.png"
          className="size-full h-full object-cover object-bottom"
          alt=""
        />
      </div>
      <div
        className="absolute inset-0 size-full"
        ref={useParallax<HTMLDivElement>({ speed: -85 }).ref}
      >
        <img
          src="./images/mountains.png"
          className="size-full h-full object-cover object-bottom"
          alt=""
        />
      </div>
      <div
        className="absolute inset-0 size-full"
        ref={useParallax<HTMLDivElement>({ speed: -70 }).ref}
      >
        <img
          src="./images/logo_land.png"
          className="size-full h-full object-cover object-bottom"
          alt=""
        />
      </div>
      <div
        className="absolute inset-0 size-full"
        ref={useParallax<HTMLDivElement>({ speed: -65 }).ref}
      >
        <img
          src="./images/jungle1.png"
          className="size-full h-full object-cover object-bottom"
          alt=""
        />
      </div>
      <div
        className="absolute inset-0 size-full"
        ref={useParallax<HTMLDivElement>({ speed: -55 }).ref}
      >
        <img
          src="./images/jungle2.png"
          className="size-full h-full object-cover object-bottom"
          alt=""
        />
      </div>
      <div
        className="absolute inset-0 size-full"
        ref={useParallax<HTMLDivElement>({ speed: -50 }).ref}
      >
        <img
          src="./images/jungle3.png"
          className="size-full h-full object-cover object-bottom"
          alt=""
        />
      </div>
      <div
        className="absolute inset-0 size-full"
        ref={useParallax<HTMLDivElement>({ speed: -40 }).ref}
      >
        <img
          src="./images/jungle4.png"
          className="size-full h-full object-cover object-bottom"
          alt=""
        />
      </div>
      <div
        className="absolute inset-0 size-full"
        ref={useParallax<HTMLDivElement>({ speed: 10 }).ref}
      >
        <img
          src="./images/man_on_mountain.png"
          className="size-full h-full object-cover object-bottom"
          alt=""
        />
      </div>
      <div
        className="absolute inset-0 size-full"
        ref={useParallax<HTMLDivElement>({ speed: 0 }).ref}
      >
        <img
          src="./images/jungle5.png"
          className="size-full h-full object-cover object-bottom"
          alt=""
        />
      </div>
    </div>
  );
}
