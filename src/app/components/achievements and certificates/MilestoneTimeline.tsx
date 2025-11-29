import TimelineCard from './TimelineCard';

const MilestoneTimeline = ({
  milestones,
}: any) => {
  return (
    <div className="relative w-full max-w-5xl mt-40 mb-10 ">
      <div
        className="absolute top-0 left-4 md:left-1/2 transform
        md:-translate-x-1/2 h-full w-1 bg-cyan-500/30"
      />

      {milestones.map((item: any, i: number) => (
        <TimelineCard
          key={i}
          item={item}
          index={i}
        />
      ))}
    </div>
  );
};

export default MilestoneTimeline;
