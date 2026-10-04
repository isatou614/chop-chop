function AreaRow({ name, time }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-line px-5 py-4">
      <span className="text-base text-ink">{name}</span>
      <span className="text-sm text-ink-3">{time}</span>
    </div>
  );
}

export default AreaRow;
