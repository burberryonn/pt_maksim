import { trainerProfile } from "@/shared/content/trainer";
import type { LocalizedString } from "@/shared/types/content";

export type TrainerHighlight = {
  icon: string;
  label: LocalizedString;
};

export type TrainerProfile = {
  name: string;
  credentials: Array<{
    label: LocalizedString;
  }>;
  bio: {
    headline: LocalizedString;
    paragraphs: LocalizedString[];
  };
  highlights: TrainerHighlight[];
};

export function getTrainerProfile() {
  return Promise.resolve(trainerProfile);
}
