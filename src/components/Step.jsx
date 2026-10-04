function Step({ icon, label, title, body }) {
  return (
    <div>
      <img src={icon} alt="" className="h-20 w-20" />
      <p className="mt-6 text-sm font-semibold text-chop-dark">{label}</p>
      <h3 className="mt-1 text-xl font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 text-base text-ink-2">{body}</p>
    </div>
  );
}

export default Step;
