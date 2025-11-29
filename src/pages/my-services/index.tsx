import Card from '@/components/card/Card'
import SvgFilePlus02 from '@/components/icons/FilePlus02'
import SvgGlobe02 from '@/components/icons/Globe02'
import SvgTool02 from '@/components/icons/Tool02'

function MyServices() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: <SvgGlobe02 className='text-[#69D2E7]' />,
      desc: "I can work with certain or specific tech stacks that are available on my arsenal. Whether it's freelance or contract-based, let's discuss!",
    },
    {
      id: 2,
      title: 'Site Re-engineering',
      icon: <SvgTool02 className='text-[#FF7A5C]' />,
      desc: 'I can rewrite apps from the ground-up or continue a paused project.',
    },
    {
      id: 3,
      title: 'Data Entry',
      icon: <SvgFilePlus02 className='text-[#7FBC8C]' />,
      desc: 'I can convert raw informations into organized, usable digital format for businesses.',
    },
  ]
  return (
    <section className='flex flex-col gap-14'>
      <h2 className='text-center font-["Archivo",_sans-serif] text-4xl font-extrabold'>
        What I can do
      </h2>

      <div className='flex flex-col gap-5 md:flex-row'>
        {services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            icon={service.icon}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  )
}

export default MyServices
