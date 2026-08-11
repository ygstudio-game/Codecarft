import React from "react";
import { motion } from "motion/react";
import { clubMembers } from "../constants/constants";

const MemberCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.05, 0.3),
      }}
      className="group"
    >
      <div
        className="
          relative
          bg-gradient-to-b
          from-[var(--color-dark-ink)]
          to-[#061114]
          border border-white/10
          rounded-[1.5rem]
          overflow-hidden
          p-4
          shadow-[0_15px_35px_rgba(0,0,0,0.4)]
          transition-all duration-400
          hover:-translate-y-2
          hover:border-[var(--color-mint-blast)]/40
          hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)]
        "
      >
        {/* Subtle glow */}
        <div
          className="
            absolute
            -top-16
            -right-16
            w-32
            h-32
            rounded-full
            bg-[var(--color-mint-blast)]/10
            blur-[60px]
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
          "
        />

        {/* Background grid */}
        <div
          className="
            absolute inset-0
            bg-[url('/images/grid.svg')]
            bg-center
            opacity-[0.05]
            pointer-events-none
          "
        />

        <div className="relative z-10">

          {/* Member Image */}
          <div
            className="
              w-full
              aspect-square
              rounded-[1.2rem]
              overflow-hidden
              bg-[#071316]
              border border-white/10
            "
          >
            <img
              src={member.img}
              alt={member.name}
              className="
                w-full
                h-full
                object-cover
                object-center
                transition-transform
                duration-500
                group-hover:scale-105
              "
              onError={(e) => {
                e.target.src = "/images/about-image.jpg";
              }}
            />
          </div>

          {/* Member Details */}
          <div className="text-center pt-4 pb-2">

            <h3
              className="
                text-base
                md:text-lg
                font-bold
                text-white
                leading-snug
                group-hover:text-[var(--color-mint-blast)]
                transition-colors duration-300
              "
            >
              {member.name}
            </h3>

            <div
              className="
                w-8
                h-px
                bg-[var(--color-mint-blast)]
                mx-auto
                my-2.5
                opacity-60
              "
            />

            <p
              className="
                text-[10px]
                md:text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-gray-400
              "
            >
              {member.team}
            </p>

          </div>
        </div>
      </div>
    </motion.div>
  );
};


const TeamPage = () => {

  // Get only regular members
  const teams = [...new Set(clubMembers.map((member) => member.team))];

  return (
    <section
      className="
        min-h-screen
        py-24
        md:py-32
        bg-[var(--color-graphite-blue)]
        text-white
        relative
        overflow-hidden
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          top-[-150px]
          right-[-150px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-[var(--color-emerald-neo)]/10
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-150px]
          left-[-150px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-[var(--color-mint-blast)]/5
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          relative
          z-10
        "
      >

        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              tracking-tighter
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-white
              to-gray-500
            "
          >
            Our{" "}
            <span
              className="
                text-[var(--color-mint-blast)]
                drop-shadow-[0_0_15px_rgba(120,255,207,0.35)]
              "
            >
              Members
            </span>
          </h1>

          <div
            className="
              h-1
              w-24
              md:w-32
              bg-gradient-to-r
              from-transparent
              via-[var(--color-mint-blast)]
              to-transparent
              mx-auto
              mt-6
            "
          />

          <p
            className="
              mt-7
              text-base
              md:text-lg
              text-gray-400
              max-w-2xl
              mx-auto
            "
          >
            Meet the talented members who make CodeCraft
            stronger, together.
          </p>
        </motion.div>


        {/* Teams */}
        {teams.map((team) => {

          const members = clubMembers.filter(
            (member) => member.team === team
          );

          return (
            <div
              key={team}
              className="mb-20"
            >

              {/* Team Heading */}
              <div
                className="
                  flex
                  items-center
                  gap-4
                  mb-8
                "
              >

                <div className="h-px flex-1 bg-white/10" />

                <h2
                  className="
                    text-lg
                    md:text-xl
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-[var(--color-mint-blast)]
                    whitespace-nowrap
                  "
                >
                  {team}
                </h2>

                <div className="h-px flex-1 bg-white/10" />

              </div>


              {/* Members Grid */}
              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-3
                  md:grid-cols-4
                  lg:grid-cols-5
                  gap-4
                  md:gap-5
                "
              >

                {members.map((member, index) => (
                  <MemberCard
                    key={member.name}
                    member={member}
                    index={index}
                  />
                ))}

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default TeamPage;