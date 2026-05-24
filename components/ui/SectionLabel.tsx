interface Props {
  label: string;
  centered?: boolean;
}

export default function SectionLabel({ label, centered }: Props) {
  return (
    <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
      <div className="w-8 h-px bg-violet opacity-60" />
      <span className="font-pixel text-violet text-xs tracking-widest uppercase opacity-80">
        {label}
      </span>
      <div className="w-8 h-px bg-violet opacity-60" />
    </div>
  );
}