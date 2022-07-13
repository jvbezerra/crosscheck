type Props = {
  children: React.ReactNode
}

export default function Icon({ children }: Props) {
  return (
    <span className="material-symbols-outlined">
      {children}
    </span>
  )
}