export interface ComparisonRow {
  feature: string;
  aitc: string | boolean;
  col2: string | boolean;
  col3: string | boolean;
}

interface ComparisonTableProps {
  badge?: string;
  heading: string;
  subheading?: string;
  rows: ComparisonRow[];
  col1Label?: string;
  col2Label?: string;
  col3Label?: string;
  bg?: 'white' | 'light';
}

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className={`inline-flex size-6 items-center justify-center rounded-full ${highlight ? 'bg-white/20' : 'bg-green-100'}`}>
        <svg className={`size-3.5 ${highlight ? 'text-white' : 'text-green-600'}`} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
        </svg>
      </span>
    ) : (
      <span className='inline-flex size-6 items-center justify-center rounded-full bg-gray-100'>
        <svg className='size-3.5 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </span>
    );
  }
  return <span className={`text-sm font-medium ${highlight ? 'text-white' : 'text-secondary'}`}>{value}</span>;
}

export default function ComparisonTable({
  badge,
  heading,
  subheading,
  rows,
  col1Label = 'AITC',
  col2Label = 'US Agency',
  col3Label = 'Freelancer',
  bg = 'light',
}: ComparisonTableProps) {
  return (
    <section className={`common-padding py-16 sm:py-20 md:py-28 ${bg === 'light' ? 'bg-lightShad2' : 'bg-white'}`}>
      <div className='mx-auto max-w-6xl'>
        {badge && (
          <p className='mb-3 text-xs font-bold uppercase tracking-widest text-primary'>{badge}</p>
        )}
        <div className='mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between md:mb-14'>
          <h2 className='text-3xl font-bold text-secondary sm:text-4xl'>{heading}</h2>
          {subheading && (
            <p className='max-w-xs text-sm leading-relaxed text-grey sm:text-right'>{subheading}</p>
          )}
        </div>

        <div className='overflow-x-auto rounded-2xl border border-lightShade1'>
          <table className='w-full min-w-[580px] border-collapse'>
            {/* Header */}
            <thead>
              <tr>
                <th className='w-[38%] rounded-tl-2xl bg-white px-6 py-4 text-left text-sm font-semibold text-grey'>
                  &nbsp;
                </th>
                {/* AITC — highlighted */}
                <th className='bg-secondary px-6 py-4 text-center text-sm font-bold text-white'>
                  <span className='block text-base'>{col1Label}</span>
                  <span className='mt-0.5 block text-xs font-normal text-white/60'>Recommended</span>
                </th>
                <th className='bg-white px-6 py-4 text-center text-sm font-semibold text-secondary'>
                  {col2Label}
                </th>
                <th className='rounded-tr-2xl bg-white px-6 py-4 text-center text-sm font-semibold text-secondary'>
                  {col3Label}
                </th>
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {rows.map((row, i) => {
                const isLast = i === rows.length - 1;
                return (
                  <tr key={i} className='border-t border-lightShade1'>
                    <td className={`bg-white px-6 py-4 text-sm font-medium text-secondary ${isLast ? 'rounded-bl-2xl' : ''}`}>
                      {row.feature}
                    </td>
                    <td className='bg-secondary px-6 py-4 text-center'>
                      <Cell value={row.aitc} highlight />
                    </td>
                    <td className='bg-white px-6 py-4 text-center'>
                      <Cell value={row.col2} />
                    </td>
                    <td className={`bg-white px-6 py-4 text-center ${isLast ? 'rounded-br-2xl' : ''}`}>
                      <Cell value={row.col3} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
