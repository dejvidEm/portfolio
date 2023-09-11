import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { SectionName } from "./types";

export function useSectionInView(SectionName: SectionName, threshold = 0.7) {
    const { ref, inView } = useInView({
        threshold: threshold,
      });
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(SectionName);
        }
      }, [inView, setActiveSection, timeOfLastClick, SectionName]);

      return {
        ref,
      }
}