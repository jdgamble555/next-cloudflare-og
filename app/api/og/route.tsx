import { type NextRequest } from "next/server";
import { ImageResponse } from "next/og";


export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const parameters = Object.fromEntries(searchParams.entries());

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6f90ab",
        fontSize: "2rem",
        color: "#fff",
      }}
    >
      <span>Noto Sans (Default Font)</span>
      <span
        style={{
          fontFamily: "JetBrains Mono",
        }}
      >
        JetBrains Mono (using GoogleFont class)
      </span>
      <span>These are emojiss: 😎🌩️</span>
      <span
        style={{
          fontFamily: "JetBrains Mono",
        }}
      >
        Parameters: {JSON.stringify(parameters)}
      </span>
    </div>
  );
}