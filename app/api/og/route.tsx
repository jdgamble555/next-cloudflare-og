import { ImageResponse } from "next/og";


export async function GET() {

  return new ImageResponse(
    <div tw="flex h-full w-full flex-col items-center justify-center bg-white p-10">
      <div tw="text-center text-[60px] font-bold text-black">Welcome to My Site</div>
      <div tw="mt-5 text-[30px] text-gray-600">Generated with NextJS ImageResponse</div>
    </div>
  );
}