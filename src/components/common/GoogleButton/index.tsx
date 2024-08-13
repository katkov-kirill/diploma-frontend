import GoogleSvg from '@assets/Google.svg';

export const GoogleButton = () => {
  return (
    <button className="bg-transparent gap-[10px] outline-none flex justify-center rounded-[10px] items-center h-[45px] border-2 border-[#5D6AD1]">
      <img src={GoogleSvg} /> Sign in with Google
    </button>
  );
};
