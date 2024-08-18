import BusinessAutomation from "./BusinessAutomation";
import ITBanner from "./ITBanner";
import ITState from "./ITState";
import PlanningPolicy from "./Planning-Policy/PlanningPolicy";


const ITStrategy = () => {
    return (
        <div>
            <ITBanner></ITBanner>
            <ITState></ITState>
            <PlanningPolicy></PlanningPolicy>
            <BusinessAutomation></BusinessAutomation>
        </div>
    );
};

export default ITStrategy;