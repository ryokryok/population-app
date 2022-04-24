type SiteTitleProps = {
  title: string
}

export function SiteTitle({ title }: SiteTitleProps) {
  return <h1 className="site-title">{title}</h1>
}
