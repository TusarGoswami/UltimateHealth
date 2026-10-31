/**
 * Curated Daily Wellness & Longevity Insights.
 */

export interface WellnessTip {
  id: number;
  category: 'nutrition' | 'fitness' | 'mindfulness' | 'sleep';
  title: string;
  tip: string;
}

export const WELLNESS_TIPS: WellnessTip[] = [
  {
    id: 1,
    category: 'nutrition',
    title: 'Hydrate Upon Waking',
    tip: 'Drinking 300-500ml of water immediately upon rising jumpstarts cellular hydration and digestive motility.'
  },
  {
    id: 2,
    category: 'fitness',
    title: 'Zone 2 Cardio Foundation',
    tip: 'Aim for 150 minutes of conversational-pace aerobic movement weekly to maximize mitochondrial density.'
  },
  {
    id: 3,
    category: 'mindfulness',
    title: 'Box Breathing Pause',
    tip: 'Inhale for 4s, hold for 4s, exhale for 4s, hold for 4s. 3 rounds downregulates the sympathetic nervous system.'
  },
  {
    id: 4,
    category: 'sleep',
    title: 'Evening Light Dimming',
    tip: 'Dim overhead lighting 90 minutes before bed to support natural melatonin synthesis.'
  }
];

export function getDailyWellnessTip(index: number): WellnessTip {
  const normalizedIndex = Math.abs(index) % WELLNESS_TIPS.length;
  return WELLNESS_TIPS[normalizedIndex];
}
