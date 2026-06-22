export interface PainPoint {
  problem: string;
  solution: string;
}

interface PainPointsTableProps {
  badge: string;
  heading: string;
  description?: string;
  items: PainPoint[];
  bg?: 'white' | 'light';
  layout?: 'cards' | 'table';
}

export default function PainPointsTable({ badge, heading, description, items, bg = 'light', layout = 'cards' }: PainPointsTableProps) {
  return (
    <section className={`common-padding py-20 md:py-28 ${bg === 'light' ? 'bg-lightShad2' : 'bg-white'}`}>
      <div className='mx-auto max-w-6xl'>
        <p className='text-xs font-bold uppercase tracking-widest text-primary'>{badge}</p>
        <h2 className='mt-3 max-w-3xl text-3xl font-bold text-secondary sm:text-4xl'>{heading}</h2>
        {description && <p className='mt-4 max-w-2xl text-lg text-mainBlack'>{description}</p>}

        {layout === 'table' ? (
          <div className='mt-10 overflow-x-auto rounded-2xl border border-lightShade1 bg-white shadow-sm'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='border-b border-lightShade1 bg-lightShad2'>
                  <th className='w-1/2 px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-red-400'>
                    The Challenge
                  </th>
                  <th className='w-1/2 px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-primary'>
                    How We Solve It
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr
                    key={i}
                    className={`border-b border-lightShade1 transition-colors last:border-0 hover:bg-lightShad2/50 ${i % 2 === 0 ? 'bg-white' : 'bg-lightShad2/30'}`}
                  >
                    <td className='px-6 py-5 align-top'>
                      <p className='text-sm font-bold leading-snug text-secondary'>{item.problem}</p>
                    </td>
                    <td className='px-6 py-5 align-top'>
                      <p className='text-sm leading-relaxed text-grey'>{item.solution}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {items.map((item, i) => (
              <div key={i} className='flex flex-col rounded-2xl border border-lightShade1 bg-white p-6 shadow-sm'>
                <p className='mb-2 text-[11px] font-bold uppercase tracking-widest text-red-400'>The Challenge</p>
                <p className='min-h-10 text-base font-bold leading-snug text-secondary'>{item.problem}</p>

                <div className='my-4 border-t border-lightShade1' />

                <p className='mb-2 text-[11px] font-bold uppercase tracking-widest text-primary'>How We Solve It</p>
                <p className='flex-1 text-sm leading-relaxed text-grey'>{item.solution}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
