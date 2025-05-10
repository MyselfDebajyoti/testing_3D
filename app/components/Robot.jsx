import Spline from "@splinetool/react-spline/next";

export default function Robot() {
  return (
    <div className="h-[50%] w-[50%]">
      <Spline
        scene="https://prod.spline.design/6yNMQ3UivtRSuA0d/scene.splinecode"
        className="h-full w-full"
      />
    </div>
  );
}
