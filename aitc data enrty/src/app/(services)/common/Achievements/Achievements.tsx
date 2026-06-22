import { fetchData } from '@/utils/getData';
import { type AchievementsDTO } from '@/types/service/seo/SEODTO';

import AchievementSwiper from './AchievementSwiper';

const Achievements = async ({ url }: { url: string }) => {
  const data = await fetchData<AchievementsDTO>(url);
  return <>{data?.awardShowcases?.length > 0 && <AchievementSwiper data={data} />}</>;
};

export default Achievements;
