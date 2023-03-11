import QR from '../assets/image-qr-code.png';

const QRCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-3xl p-[16px] w-[300px] h-[460px] my-0 mx-auto">
      <img
        src={QR}
        className="rounded-xl w-full h-[260px] text-center select-none"
      />
      <div className="flex flex-col p-[8px]">
        <h1 className="font-bold text-[22px] text-center text-light-dark-blue my-[16px] leading-[120%]">
          Improve your front-end skills by building projects
        </h1>
        <span className="text-base text-center text-light-blue-gray">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </span>
      </div>
    </div>
  );
};

export default QRCard;
