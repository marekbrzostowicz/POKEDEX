const ProgressBar = ({ stat }: { stat: number }) => {
  let difference;
  if (stat >= 100) {
    difference = 0;
  } else {
    difference = 200 - stat * 2;
  }

  return (
    <div className="flex">
      <div
        style={{ width: `${stat >= 100 ? 200 : stat * 2}px` }}
        className={`h-3  border-t-2 border-l-2 border-b-2 border-amber-600  ${
          stat >= 100 ? "rounded-xl" : "rounded-bl-xl rounded-tl-xl"
        }  ${stat >= 100 ? "bg-rose-400" : "bg-sky-400"}`}
      ></div>
      <div
        style={{ width: `${difference}px` }}
        className="h-3 border-t-2 border-r-2 border-b-2 border-amber-600 rounded-ee-xl rounded-e-xl bg-slate-600"
      ></div>
    </div>
  );
};

export default ProgressBar;
