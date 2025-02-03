import { create } from "zustand";
import CV from "/src/assets/projectFiles/Bentum Yaw Richmond - CV.pdf";

export const useNavStore = create((set) => ({
  menu: false,
  openMenu: () => set({ menu: true }),
  closeMenu: () => set({ menu: false }),
}));

export const useDownloadStore = create(() => ({
  downloadCV: () => {
    const cvPath = CV;
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Bentum Yaw Richmond_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
}));

export const useScrollStore = create((set) => ({
  activeSection: "home",
  setActiveSection: (section) => {
    set({ activeSection: section });

    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },
}));
