import React from 'react';
import { Star, CheckCircle2, MessageSquare, Quote } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 my-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-3 border border-emerald-300 dark:border-emerald-800">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>Local Customer Feedback</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Trusted by Thousands of Families in Gaya
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Real feedback from local residents, doctors, and caregivers in Chand Chaura, AP Colony, Rampur, and Vishnupad.
        </p>

        {/* Rating Summary Pill */}
        <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-sm font-extrabold text-slate-900 dark:text-white">4.9 / 5.0</span>
          <span className="text-xs text-slate-500 border-l border-slate-200 dark:border-slate-700 pl-3">
            Gaya Local Google Reviews
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-700/80 relative flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <Quote className="w-8 h-8 text-emerald-200 dark:text-emerald-900/60 absolute top-4 right-4" />
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-4">
                "{review.comment}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white block">
                  {review.author}
                </span>
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  {review.location}
                </span>
              </div>
              {review.verified && (
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px] bg-emerald-50 dark:bg-emerald-950 px-2 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Customer
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
