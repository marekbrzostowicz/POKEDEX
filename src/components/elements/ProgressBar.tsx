const ProgressBar = ({ stat }: { stat: number }) => {
  let difference;
  if (stat >= 100) {
    difference = 0;
  } else {
    difference = 200 - stat * 2;
  }

  const isMax = stat >= 100;

  return (
    <div className="flex">
      <div
        style={{ width: `${stat >= 100 ? 200 : stat * 2}px` }}
        className={`h-3  border-t-2 border-l-2 border-b-2 border-amber-400  ${
          stat >= 100 ? "rounded-xl border-r-2" : "rounded-bl-xl rounded-tl-xl"
        }  ${stat >= 100 ? "bg-rose-500" : "bg-blue-500"} ${
          stat <= 60 ? "bg-indigo-200" : "bg-blue-500"
        }`}
      ></div>
      {!isMax && (
        <div
          style={{ width: `${difference}px` }}
          className="h-3 border-t-2 border-r-2 border-b-2 border-amber-400 rounded-ee-xl rounded-e-xl bg-slate-600"
        ></div>
      )}
    </div>
  );
};

export default ProgressBar;
