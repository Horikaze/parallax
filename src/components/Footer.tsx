export default function Footer() {
  return (
    <div className="bg-[#210002] flex flex-col items-center text-[#ffaf00] text-center px-2 container">
      <p className="text-4xl tracking-widest text-center">
        AVAILABLE NOW FOR $19.99
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 my-10 items-center justify-center">
        <div className="h-8 w-72 bg-[#ffaf00] rounded-sm flex gap-x-3 p-2 items-center justify-center">
          <img
            src="https://www.firewatchgame.com/images/buyicon_pc.png"
            alt="windows"
            width="30px"
          />
          <p className="text-black font-semibold tracking-wide">
            WINDOWS MAC LINUX
          </p>
        </div>
        <div className="h-8 w-72 bg-[#ffaf00] rounded-sm flex gap-x-3 p-2 items-center justify-center">
          <img
            src="https://www.firewatchgame.com/images/buyicon_pc.png"
            alt="windows"
            width="30px"
          />
          <p className="text-black font-semibold tracking-wide">
            WINDOWS MAC LINUX
          </p>
        </div>
        <div className="h-8 w-72 bg-[#ffaf00] rounded-sm flex gap-x-3 p-2 items-center justify-center">
          <img
            src="https://www.firewatchgame.com/images/buyicon_pc.png"
            alt="windows"
            width="30px"
          />
          <p className="text-black font-semibold tracking-wide">
            WINDOWS MAC LINUX
          </p>
        </div>
        <div className="h-8 w-72 bg-[#ffaf00] rounded-sm flex gap-x-3 p-2 items-center justify-center">
          <img
            src="https://www.firewatchgame.com/images/buyicon_pc.png"
            alt="windows"
            width="30px"
          />
          <p className="text-black font-semibold tracking-wide">
            WINDOWS MAC LINUX
          </p>
        </div>
      </div>
      <iframe
        className="aspect-video lg:min-w-[1000px] w-full lg:w-auto mb-10"
        src="https://www.youtube-nocookie.com/embed/cXWlgP5hZzc"
      ></iframe>
      <div className="flex flex-col lg:mx-40 gap-y-5">
        <h2 className="font-semibold text-3xl">
          Firewatch is a mystery set in the Wyoming wilderness, where your only
          emotional lifeline is the person on the other end of a handheld radio
        </h2>
        <div className="flex md:flex-row flex-col text-xl gap-4 leading-relaxed">
          <div className="flex flex-col gap-y-5 w-full text-start">
            <p>The year is 1989.</p>
            <p>
              You are a man named Henry who has retreated from your messy life
              to work as a fire lookout in the Wyoming wilderness. Perched atop
              a mountain, it's your job to find smoke and keep the wilderness
              safe.
            </p>
            <p>
              An especially hot, dry summer has everyone on edge. Your
              supervisor, a woman named Delilah, is available to you
            </p>
            <div className="flex cursor-pointer text-black mt-auto bg-[#973700] hover:bg-[#ffaf00] transition-all h-7 w-full rounded-sm font-semibold justify-center items-center">
              SCREENS & TRAILERS
            </div>
          </div>
          <div className="flex flex-col gap-y-5 w-full text-start">
            <p>
              at all times over a small, handheld radio—and is your only contact
              with the world you've left behind.
            </p>
            <p>
              But when something strange draws you out of your lookout tower and
              into the world below, you'll explore a wild and unknown
              environment, facing questions and making interpersonal choices
              that can build or destroy the only meaningful relationship you
              have.
            </p>
            <div className="flex cursor-pointer  mt-auto text-black bg-[#973700] hover:bg-[#ffaf00] transition-all h-7 w-full rounded-sm font-semibold justify-center items-center">
              FIREWATCH FAQ
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 my-10 items-center justify-center">
          <div className="flex w-full h-full justify-center items-center">
            <img
              src="https://www.firewatchgame.com/screenshots/thumbs/firewatch_01.jpg"
              alt="ss"
            />
          </div>
          <div className="flex w-full h-full justify-center items-center">
            <img
              src="https://www.firewatchgame.com/screenshots/thumbs/firewatch_02.jpg"
              alt="ss"
            />
          </div>
          <div className="flex w-full h-full justify-center items-center">
            <img
              src="https://www.firewatchgame.com/screenshots/thumbs/firewatch_03.jpg"
              alt="ss"
            />
          </div>
          <div className="flex w-full h-full justify-center items-center">
            <img
              src="https://www.firewatchgame.com/screenshots/thumbs/firewatch_04.jpg"
              alt="ss"
            />
          </div>
        </div>
      </div>
      <h2 className="mt-10 text-3xl font-semibold tracking-wide">
        "AS VISUALLY STRIKING AS ITS UNIQUE PREMISE."
      </h2>
      <p className="text-[#973700] tracking-wide mt-8 mb-16">
        ENTERTAINMENT WEEKLY
      </p>
      <p className="text-3xl font-semibold mb-10">日本語に関する情報</p>
      <p className="max-w-xl text-center text-[#973700] mb-10">
        ©2024 CAMPO SANTO, IN COOPERATION WITH PANIC. FIREWATCH IS A TRADEMARK
        OF CAMPO SANTO. NINTENDO SWITCH IS A TRADEMARK OF NINTENDO.
      </p>
      <a
        className="text-2xl mb-10 underline"
        href="https://github.com/Horikaze"
        target="_blank"
      >
        Site made by Horikaze
      </a>
      <a
        className="underline fixed right-5 bottom-5"
        href="https://github.com/Horikaze/parallax"
        target="_blank"
      >
        GITHUB
      </a>
    </div>
  );
}
