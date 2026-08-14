import React from 'react';
import { Youtube, Instagram, Play, Clock } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { videoLessons } from '../../data/videos';
import { siteConfig } from '../../config/siteConfig';

export const VideoLessons: React.FC = () => {
  // Show a compact selection of 4 curated video previews
  const previewVideos = videoLessons.slice(0, 4);

  return (
    <section id="videos" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="VIDEOS & RESOURCES"
          title="Learn Through Videos"
          subtitle="Explore educational videos and problem-solving content from ANNS TUTORING."
        />

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 max-w-5xl mx-auto">
          {previewVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Thumbnail Frame */}
                <div className={`relative h-40 bg-gradient-to-tr ${video.thumbnailGradient} p-5 flex flex-col justify-between text-white overflow-hidden`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono uppercase tracking-academic px-2.5 py-0.5 rounded bg-white/15 backdrop-blur-md border border-white/20 font-semibold">
                      {video.classOrSubject}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono bg-black/40 px-2 py-0.5 rounded text-slate-200">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {video.duration}
                    </span>
                  </div>

                  {/* Centered Play Button */}
                  <div className="mx-auto my-auto w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md">
                    <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                  </div>

                  <div className="z-10 text-[10px] font-mono text-slate-300">
                    ANNS TUTORING
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-sm sm:text-base text-navy-900 mb-1.5 leading-snug">
                    {video.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-3.5 px-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Concept Breakdown
                </span>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  <span>Watch</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <a
            href={siteConfig.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all"
          >
            <Youtube className="w-4 h-4" />
            <span>WATCH ON YOUTUBE</span>
          </a>

          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-navy-950 text-white text-xs sm:text-sm font-semibold border border-slate-800 transition-all"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>FOLLOW ON INSTAGRAM</span>
          </a>
        </div>

      </div>
    </section>
  );
};
