import type { Fact } from '~/models/facts.server'

type Props = {
  fact: Fact
}

const LogoSchema: Record<string, { style: string, path: string }> = {
  'projetocomprova.com.br': {
    style: 'w-20',
    path: 'https://projetocomprova.com.br/wp-content/uploads/2019/08/comprova-logo.svg'
  },
  'www.aosfatos.org': {
    style: 'w-16',
    path: 'https://www.aosfatos.org/static/images/logo-aosfatos.svg'
  },
  'lupa.uol.com.br': {
    style: 'w-16 bg-black',
    path: 'https://lupa.uol.com.br/static/media/brand-light.012edaab.svg'
  },
  'g1.globo.com': {
    style: 'w-10 h-fit',
    path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Logotipo_g1.svg/204px-Logotipo_g1.svg.png'
  },
}

export default function FactItem ({ fact }: Props) {
  const logo = LogoSchema[fact.displayLink]
  return (
    <article className="flex flex-row items-center gap-4 py-4 border-b">
      <img
        alt={fact.displayLink}
        className={logo.style}
        src={logo.path}
      />
      <div>
        <a href={fact.link}>
          <h1 className="font-bold text-xl">{ fact.title }</h1>
        </a>
        <p className="text-xs">{ fact.snippet }</p>
      </div>
    </article>
  )
}